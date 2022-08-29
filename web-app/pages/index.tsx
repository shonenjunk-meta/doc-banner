import { useEffect, useRef, useState } from 'react';
import Canvas from '../components/Canvas';
import LayoutSelector from '../components/LayoutSelector';
import NftSelector from '../components/NftSelector';
import { Nft } from '../model/Nft';
import { ITheme } from '../model/Theme';
import {
  getNftPlaceholders,
  updateNftPlaceholders,
} from '../services/data.service';
import { LocalStorageService } from '../services/local-storage.service';

export default function Home() {
  const [theme, setTheme] = useState(null);
  const [nfts, setNfts] = useState([] as Nft[]);
  const [visibleModal, setModalVisible] = useState(false);
  const [data, setData] = useState(getNftPlaceholders(50));
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const initialized = useRef(false);
  const storageService = useRef<LocalStorageService>(null);

  // Retrieve all partner NFTs
  useEffect(() => {
    async function getAllNFTs() {
      storageService.current = new LocalStorageService();
      let promises = [];
      storageService.current
        .GetAddresses()
        .forEach(async (standard, address) => {
          promises.push(storageService.current.findNFTs(address, standard));
        });
      Promise.all(promises).then(() => {
        let newArray = [...storageService.current.getMyNFTs()];
        setNfts(newArray);
      });
    }

    if (!initialized.current) {
      getAllNFTs();
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    setData(updateNftPlaceholders([...data], theme));
  }, [theme]);

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

  const onDownload = (src: string) => {
    storageService.current.SaveDownload(src);
  };

  const updatedAddresses = async () => {
    storageService.current = new LocalStorageService();
    let promises = [];
    storageService.current.GetAddresses().forEach(async (standard, address) => {
      promises.push(storageService.current.findNFTs(address, standard));
    });

    Promise.all(promises).then(() => {
      let newArray = [...storageService.current.getMyNFTs()];
      setNfts(newArray);
    });
  };

  return (
    <div className='text-center'>
      <h1>Let&apos;s Create!</h1>
      <LayoutSelector themeUpdated={themeUpdated} />

      <Canvas
        data={data}
        onAvatarClick={onAvatarClick}
        onDownload={onDownload}
        theme={theme}
      />

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
