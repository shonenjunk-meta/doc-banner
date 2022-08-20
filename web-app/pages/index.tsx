import { useEffect, useState } from 'react';
import Erc721SJFBBanner1 from '../components/banners/erc721#sj/FacebookBanner1';
import Erc721SJOSBanner1 from '../components/banners/erc721#sj/OpenseaBanner1';
import Erc721SJTWBanner1 from '../components/banners/erc721#sj/TwitterBanner1';
import NftSelector from '../components/NftSelector';
import { Nft } from '../model/Nft';
import { getNftPlaceholders } from '../services/data.service';
import { LocalStorageService } from '../services/local-storage.service';

export default function Home() {
  const [nfts, setNfts] = useState([] as Nft[]);
  const [visibleModal, setModalVisible] = useState(false);
  const [data, setData] = useState(getNftPlaceholders(100));
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

    function setupAvatarEvents() {
      document.querySelectorAll('.nft').forEach((item) => {
        item.addEventListener('click', (event) => {
          let index = item.getAttribute('data-index');
          onAvatarClick(parseInt(index));
        });
      });
    }

    if (!initialized) {
      getAllNFTs();
      setupAvatarEvents();
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

  function onAvatarSelected(avatar: Nft) {
    let dataCopy = [...data];
    dataCopy[selectedIndex] = avatar;
    setData(dataCopy);
    hideNftSelector();
  }

  return (
    <div>
      <Erc721SJTWBanner1 data={data} onAvatarClick={onAvatarClick} />
      <Erc721SJFBBanner1 data={data} onAvatarClick={onAvatarClick} />
      <Erc721SJOSBanner1 data={data} onAvatarClick={onAvatarClick} />

      <NftSelector
        nfts={nfts}
        inUseNfts={[]}
        visible={visibleModal}
        onAvatarSelected={onAvatarSelected}
      />
    </div>
  );
}
