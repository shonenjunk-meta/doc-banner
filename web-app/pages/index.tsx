import { useEffect, useState } from 'react';
import Erc721SJFBBanner1 from '../components/banners/erc721#sj/FacebookBanner1';
import NftSelector from '../components/NftSelector';
import { getNftPlaceholders } from '../services/data.service';
import { LocalStorageService, NFT } from '../services/local-storage.service';

export default function Home() {
  const [nfts, setNfts] = useState([] as NFT[]);
  const [visibleModal, setModalVisible] = useState(false);
  const [data, setData] = useState(getNftPlaceholders(6));
  const [selectedIndex, setSelectedIndex] = useState(-1);

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

  const showNftSelector = () => {
    setModalVisible(true);
  };

  const hideNftSelector = () => {
    setModalVisible(false);
  };

  function onAvatarClick(index: number) {
    setSelectedIndex(index);
    showNftSelector();
  }

  function onAvatarSelected(avatar: NFT) {
    let dataCopy = [...data];
    dataCopy[selectedIndex] = avatar;
    setData(dataCopy);
    hideNftSelector();
  }

  return (
    <div>
      <h1>Welcome to NFT Profile Builder</h1>
      <h2>Banner</h2>
      <Erc721SJFBBanner1 data={data} onAvatarClick={onAvatarClick} />
      <NftSelector
        nfts={nfts}
        inUseNfts={[]}
        visible={visibleModal}
        onAvatarSelected={onAvatarSelected}
      />
    </div>
  );
}
