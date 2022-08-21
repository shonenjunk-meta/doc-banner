import styles from './NftSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Nft } from '../model/Nft';
import _ from 'lodash';
import { useState } from 'react';

export interface INftSelectorProps {
  nfts: Nft[];
  inUseNfts: Nft[];
  visible: boolean;
  onAvatarSelected?: (avatar: Nft) => void;
  onCloseClick?: () => void;
}

const NftSelector = (props: INftSelectorProps) => {
  const [filter, setFilter] = useState({
    code: 'ALL',
    id: '',
  });

  const showHideClassName = props.visible ? styles.visible : '';

  function search() {
    const collectionId = document.getElementById(
      'collectionId'
    ) as HTMLSelectElement;
    const keyword = document.getElementById('keyword') as HTMLInputElement;
    setFilter({ code: collectionId.value, id: keyword.value });
  }

  return (
    <div className={classNames(styles.modal, showHideClassName)}>
      <button
        className={styles.closeButton}
        onClick={() => props.onCloseClick()}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className={styles.filter}>
        <select name='nfts' id='collectionId' onChange={search}>
          <option value='ALL'>ALL</option>
          <option value='ERC721_OCMONK'>OCM Genesis</option>
          <option value='ERC721_SJ'>SJ Genesis</option>
          {/* <option value='ERC721_WFNH-BE'>WF Bronze Ed</option> */}
        </select>
        <input id='keyword' type='text' onChange={search} />
      </div>
      <div className={styles.gridContainer}>
        {props.nfts
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
          ))}
      </div>
    </div>
  );
};

export default NftSelector;
