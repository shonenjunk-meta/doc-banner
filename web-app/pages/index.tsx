import { useEffect, useState } from 'react';
import BannerBase from '../components/Canvas';
import LayoutSelector from '../components/LayoutSelector';
import NftSelector from '../components/NftSelector';
import { Nft } from '../model/Nft';
import { ITheme } from '../model/Theme';
import { getNftPlaceholders } from '../services/data.service';
import { LocalStorageService } from '../services/local-storage.service';

export default function Home() {
  const [theme, setTheme] = useState(null);
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

  const themeUpdated = (theme: ITheme) => {
    setTheme(theme);
  };

  const onAvatarClick = (index: number) => {
    setSelectedIndex(index);
    let dataCopy = [...data];
    showNftSelector();
    if (dataCopy[index].id.startsWith('-')) {
      //showNftSelector();
      //return;
    }
  };

  const onAvatarSelected = (avatar: Nft) => {
    let dataCopy = [...data];
    dataCopy[selectedIndex] = avatar;
    setData(dataCopy);
    hideNftSelector();
  };

  const updatedAddresses = async () => {
    let promises = [];
    storageService = new LocalStorageService();
    storageService.GetAddresses().forEach(async (standard, address) => {
      promises.push(storageService.findNFTs(address, standard));
    });
    await Promise.all(promises);
    setNfts(storageService.getMyNFTs());
  };

  return (
    <div>
      <LayoutSelector themeUpdated={themeUpdated} />

      <BannerBase data={data} onAvatarClick={onAvatarClick} theme={theme} />

      <NftSelector
        nfts={nfts}
        inUseNfts={[]}
        visible={visibleModal}
        onAvatarSelected={onAvatarSelected}
        onCloseClick={hideNftSelector}
        updatedAddresses={updatedAddresses}
      />
    </div>
  );
}
