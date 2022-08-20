import { NFT } from '../services/local-storage.service';
import styles from './NftSelector.module.scss';
import classNames from 'classnames';

export interface INftSelectorProps {
  nfts: NFT[];
  inUseNfts: NFT[];
  visible: boolean;
  onAvatarSelected?: (avatar: NFT) => void;
}

const NftSelector = (props: INftSelectorProps) => {
  const showHideClassName = props.visible ? styles.visible : '';

  return (
    <div className={classNames(styles.modal, showHideClassName)}>
      <div className={styles.gridContainer}>
        {props.nfts.map((nft) => (
          <div className={styles.gridItem} key={`${nft.code}#${nft.id}`}>
            <img
              src={nft.image_url}
              onClick={() => props.onAvatarSelected(nft)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftSelector;
