import { NFT } from '../services/local-storage.service';
import styles from './NftSelector.module.scss';

export interface INftSelectorProps {
  nfts: NFT[];
  inUseNfts: NFT[];
}

const NftSelector = (props: INftSelectorProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.gridContainer}>
        {props.nfts.map((nft) => (
          <div className={styles.gridItem} key={`${nft.code}#${nft.id}`}>
            <img src={nft.image_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftSelector;
