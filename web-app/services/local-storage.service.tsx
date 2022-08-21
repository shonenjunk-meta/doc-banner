import { JUNKIES_DATA } from '../data/junkies';
import { Nft, standard, tokenCode } from '../model/Nft';

export class LocalStorageService {
  private addresses: Map<string, standard> = new Map<string, standard>();
  private myNFTs: Nft[] = [];
  private completedAddress: string[] = [];

  public constructor() {
    let addressesMap = localStorage.getItem('addresses');
    try {
      this.addresses = new Map(JSON.parse(addressesMap));
    } catch {}
  }

  public AddAddress(address: string) {
    const addressType: standard = 'ERC721';

    if (!this.addresses.has(address.toLowerCase())) {
      this.addresses.set(address.toLowerCase(), addressType);
      localStorage.setItem(
        'addresses',
        JSON.stringify(Array.from(this.addresses.entries()))
      );
    }
  }

  public RemoveAddress(type: standard, address: string) {
    if (this.addresses.has(address.toLowerCase())) {
      this.addresses.delete(address.toLowerCase());
      localStorage.setItem(
        'addresses',
        JSON.stringify(Array.from(this.addresses.entries()))
      );
    }
  }

  public GetAddresses(): Map<string, standard> {
    return this.addresses;
  }

  public getMyNFTs(): Nft[] {
    return this.myNFTs;
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
      //'ERC721#WFNH-BE',
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
}
