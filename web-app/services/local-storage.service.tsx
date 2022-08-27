import { Nft, standard, tokenCode } from '../model/Nft';

export class LocalStorageService {
  private addresses: Map<string, standard> = new Map<string, standard>();
  private downloads: Map<number, string> = new Map<number, string>();
  private myNFTs: Nft[] = [];
  private completedAddress: string[] = [];

  public constructor() {
    this.getAddressesFromStorage();
    this.getDownloadsFromStorage();
  }

  public AddAddress(address: string) {
    address = address.toLowerCase();
    const addressType: standard = 'ERC721';

    if (!this.addresses.has(address)) {
      this.addresses.set(address, addressType);
      localStorage.setItem(
        'addresses',
        JSON.stringify(Array.from(this.addresses.entries()))
      );
    }
  }

  public RemoveAddress(type: standard, address: string) {
    address = address.toLowerCase();
    if (this.addresses.has(address)) {
      this.addresses.delete(address);
      localStorage.setItem(
        'addresses',
        JSON.stringify(Array.from(this.addresses.entries()))
      );
    }
  }

  public GetAddresses(): Map<string, standard> {
    return this.addresses;
  }

  public SaveDownload(src: string) {
    this.downloads.set(new Date().getTime(), src);
    localStorage.setItem(
      'downloads',
      JSON.stringify(Array.from(this.downloads.entries()))
    );
  }

  public RemoveDownload(id: number) {
    if (this.downloads.has(id)) {
      this.downloads.delete(id);
      localStorage.setItem(
        'downloads',
        JSON.stringify(Array.from(this.downloads.entries()))
      );
    }
  }

  public GetDownloads(): Map<number, string> {
    return this.downloads;
  }

  public getMyNFTs(): Nft[] {
    return this.myNFTs;
  }

  public resetNFTs() {
    this.completedAddress = [];
    this.myNFTs = [];
    this.getAddressesFromStorage();
  }

  public async findNFTs(address: string, standard: standard) {
    if (!address || this.completedAddress.includes(address.toLowerCase()))
      return;

    switch (standard) {
      case 'ERC721': {
        await this.getErc721NFTs(address);
        break;
      }
    }

    this.completedAddress.push(address.toLowerCase());
  }

  private async getErc721NFTs(address: string) {
    address = address.toLowerCase();
    let erc721WhiteList: string[] = [
      'ERC721_SJ',
      'ERC721_OCMONK',
      'ERC721_WFNH-BE',
    ];

    await fetch(
      `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=SDHZ9FPMUK55TY5KAU2FBS222DKPIITD65`
    ).then(async (txs: any) => {
      let response = await txs.json();

      if (response.status === '1') {
        response.result.forEach((tx: any) => {
          let tokenSymbol = `ERC721_${tx.tokenSymbol}`;
          if (erc721WhiteList.includes(tokenSymbol)) {
            if (tx.to.toLowerCase() === address) {
              this.myNFTs.push({
                code: tokenSymbol as tokenCode,
                standard: 'ERC721',
                id: tx.tokenID,
                image_url: this.getImageUrl(
                  tokenSymbol as tokenCode,
                  tx.tokenID
                ),
              });
            } else {
              let index = this.myNFTs.findIndex((nft) => nft.id === tx.tokenID);
              if (index >= 0) {
                this.myNFTs.splice(index, 1);
              }
            }
          }
        });
      }
    });
  }

  private getImageUrl(code: tokenCode, id: string): string {
    return `/api/avatar?code=${code}&id=${id}`;
  }

  private getAddressesFromStorage() {
    let addressesMap = localStorage.getItem('addresses');
    try {
      this.addresses = new Map(JSON.parse(addressesMap));
    } catch {}
  }
  private getDownloadsFromStorage() {
    let downloadsMap = localStorage.getItem('downloads');
    try {
      this.downloads = new Map(JSON.parse(downloadsMap));
    } catch {}
  }
}
