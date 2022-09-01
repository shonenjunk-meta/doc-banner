import styles from './NftSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faWallet,
  faAddressBook,
  faTrash,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Nft, standard } from '../model/Nft';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service';
import { isAddress } from '../services/eth-util.service';
import Image from 'next/image';

export interface INftSelectorProps {
  nfts: Nft[];
  inUseNfts: Nft[];
  visible: boolean;
  onAvatarSelected?: (avatar: Nft) => void;
  onCloseClick?: () => void;
  updatedAddresses?: () => void;
}

const NftSelector = (props: INftSelectorProps) => {
  const [wallets, setWallets] = useState([]);

  const [showWallet, setShowWallet] = useState(
    props.nfts.length === 0 ? true : false
  );
  const [filter, setFilter] = useState({
    code: 'ALL',
    id: '',
  });
  const showHideClassName = props.visible ? styles.visible : '';
  const initialized = useRef(false);
  const storageService = useRef<LocalStorageService>(null);

  // Retrieve all partner NFTs
  useEffect(() => {
    async function getWallets() {
      storageService.current = new LocalStorageService();
      let arrayWallets = Array.from(storageService.current.GetAddresses());
      setWallets(arrayWallets);
      setShowWallet(arrayWallets.length === 0 ? true : false);
    }

    if (!initialized.current) {
      getWallets();
      initialized.current = true;
    }
  }, []);

  function search() {
    const collectionId = document.getElementById(
      'collectionId'
    ) as HTMLSelectElement;
    const keyword = document.getElementById('keyword') as HTMLInputElement;
    setFilter({ code: collectionId.value, id: keyword.value });
  }

  function shorten(address: string): string {
    return (
      address.substring(0, 6) +
      '...' +
      address.substring(address.length - 4, address.length)
    );
  }

  async function addAddressFromClipboard() {
    const newAddress = await navigator.clipboard.readText();
    if (isAddress(newAddress.toLowerCase())) {
      storageService.current.AddAddress(newAddress);
      setWallets(Array.from(storageService.current.GetAddresses()));
      props.updatedAddresses();
      setShowWallet(false);
    }
  }

  function addAddress() {
    const newAddress = (document.getElementById('address') as HTMLInputElement)
      .value;
    if (isAddress(newAddress.toLowerCase())) {
      storageService.current.AddAddress(newAddress);
      setWallets(Array.from(storageService.current.GetAddresses()));
      props.updatedAddresses();
      setShowWallet(false);
      (document.getElementById('address') as HTMLInputElement).value = '';
    }
  }

  function removeAddress(type: standard, address: string) {
    if (isAddress(address.toLowerCase())) {
      storageService.current.RemoveAddress(type, address);
      setWallets(Array.from(storageService.current.GetAddresses()));
      props.updatedAddresses();
    }
  }

  function onNftSelected(nft: Nft) {
    props.onAvatarSelected(nft);
    (document.getElementById('keyword') as HTMLInputElement).value = '';
    if (initialized.current) {
      search();
    }
  }

  return (
    <div className={classNames(styles.modal, showHideClassName)}>
      <div className={styles.buttonWrapper}>
        <button
          className={`icon-button ${styles.closeButton}`}
          onClick={() => {
            props.onCloseClick();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          className={`icon-button ${styles.walletButton}`}
          onClick={() => setShowWallet(!showWallet)}
        >
          <FontAwesomeIcon icon={showWallet ? faUserCircle : faWallet} />
        </button>
      </div>
      <div
        className={classNames(styles.walletWrapper, showWallet ? '' : 'hidden')}
      >
        <h2>Wallets</h2>
        <div>
          {wallets.map(([key, value]) => (
            <div key={key} className={styles.wallet}>
              <span>{shorten(key)}</span>
              <span>{value}</span>
              <button
                className='button danger'
                onClick={() => removeAddress(value, key)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <div className={styles.wallet}>
            <input
              type='text'
              id='address'
              placeholder='Wallet address...'
            ></input>
            <button className='button success' onClick={() => addAddress()}>
              <em>Add</em>
              <FontAwesomeIcon icon={faAddressBook} />
            </button>
          </div>
        </div>
      </div>
      <div className={showWallet ? 'hidden' : ''}>
        <div className={styles.filter}>
          <select name='nfts' id='collectionId' onChange={search}>
            <option value='ALL'>All NFT</option>
            <option value='ERC721_OCMONK'>OCM Genesis</option>
            <option value='ERC721_SJ'>SJ Genesis</option>
            <option value='ERC721_WFNH-BE'>WF Bronze Ed</option>
          </select>
          <input
            id='keyword'
            type='text'
            onChange={search}
            placeholder='Search by Token ID'
          />
        </div>
        <div className={styles.gridContainer}>
          {props.nfts.length === 0 ? (
            <div>No supported NFTs found.</div>
          ) : (
            props.nfts
              .filter(
                (nft) =>
                  (filter.code === 'ALL' && filter.id === '') ||
                  (filter.code === nft.code && filter.id === '') ||
                  (nft.id.startsWith(filter.id) &&
                    (filter.code === 'ALL' || filter.code === nft.code))
              )
              .map((nft) => (
                <div className={styles.gridItem} key={`${nft.code}#${nft.id}`}>
                  <Image
                    src={nft.image_url}
                    alt='Github'
                    width={100}
                    height={100}
                    layout='responsive'
                    onClick={() => onNftSelected(nft)}
                    loading='lazy'
                  />
                  <span>{nft.id}</span>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NftSelector;
