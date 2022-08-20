import { useEffect, useState } from 'react';
import { Nft } from '../model/Nft';
import { LocalStorageService } from '../services/local-storage.service';

export default function Home() {
  const [nfts, setNfts] = useState([] as Nft[]);

  let initialized: boolean = false;
  let storageService: LocalStorageService;

  // Retrieve all partner NFTs
  useEffect(() => {
    async function getAllNFTs() {
      storageService = new LocalStorageService();
      let promises = [];
      storageService.GetAddresses().forEach(async (standard, address) => {
        promises.push(storageService.findNFTs(address, standard));
      });
      await Promise.all(promises);
      setNfts(storageService.getMyNFTs());
    }

    if (!initialized) {
      getAllNFTs();
      initialized = true;
    }
  }, []);

  return (
    <div>
      <h1>Collection</h1>
      <div>
        {nfts.map((nft) => (
          <div key={`${nft.code}#${nft.id}`}>
            <img src={nft.image_url} width='200' height='200' />
          </div>
        ))}
      </div>
    </div>
  );
}
