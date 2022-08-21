import styles from './NftSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faWallet,
  faPaste,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Nft, standard } from '../model/Nft';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service';
import { isAddress } from '../services/eth-util.service';

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

  let initialized: boolean = false;
  let storageService: LocalStorageService;

  // Retrieve all partner NFTs
  useEffect(() => {
    async function getWallets() {
      storageService = new LocalStorageService();
      setWallets(Array.from(storageService.GetAddresses()));
    }

    if (!initialized) {
      getWallets();
      initialized = true;
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

  async function addAddress() {
    const newAddress = await navigator.clipboard.readText();
    if (isAddress(newAddress.toLowerCase())) {
      let storageService: LocalStorageService = new LocalStorageService();
      storageService.AddAddress(newAddress);
      setWallets(Array.from(storageService.GetAddresses()));
      props.updatedAddresses();
      setShowWallet(false);
    }
  }

  function removeAddress(type: standard, address: string) {
    if (isAddress(address.toLowerCase())) {
      let storageService: LocalStorageService = new LocalStorageService();
      storageService.RemoveAddress(type, address);
      setWallets(Array.from(storageService.GetAddresses()));
      props.updatedAddresses();
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
          <FontAwesomeIcon icon={faWallet} />
        </button>
      </div>
      <div
        className={classNames(styles.walletWrapper, showWallet ? '' : 'hidden')}
      >
        <h2>Wallet</h2>
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
            <button className='button success' onClick={() => addAddress()}>
              <em>Paste Wallet Address</em>
              <FontAwesomeIcon icon={faPaste} />
            </button>
          </div>
        </div>
      </div>
      <div className={showWallet ? 'hidden' : ''}>
        <div className={styles.filter}>
          <select name='nfts' id='collectionId' onChange={search}>
            <option value='ALL'>ALL</option>
            <option value='ERC721_OCMONK'>OCM Genesis</option>
            <option value='ERC721_SJ'>SJ Genesis</option>
            {/* <option value='ERC721_WFNH-BE'>WF Bronze Ed</option> */}
          </select>
          <input
            id='keyword'
            type='text'
            onChange={search}
            placeholder='Token ID'
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
                  <img
                    src={nft.image_url}
                    onClick={() => {
                      props.onAvatarSelected(nft);
                      (
                        document.getElementById('keyword') as HTMLInputElement
                      ).value = '';
                      search();
                    }}
                  />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NftSelector;
