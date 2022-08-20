import styles from './NftSelector.module.scss';
import classNames from 'classnames';
import { Nft } from '../model/Nft';

export interface INftSelectorProps {
  nfts: Nft[];
  inUseNfts: Nft[];
  visible: boolean;
  onAvatarSelected?: (avatar: Nft) => void;
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
