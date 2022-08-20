import { useEffect } from 'react';
import _ from 'lodash';
import styles from './FacebookBanner1.module.scss';
import { NFT } from '../../../services/local-storage.service';

type Props = {
  data: NFT[];
  onAvatarClick?: (index: number) => void;
};

export default function Erc721SJFBBanner1({ data, onAvatarClick }: Props) {
  let initialized: boolean = false;

  useEffect(() => {
    if (!initialized) {
      document.querySelectorAll('.nft').forEach((item) => {
        item.addEventListener('click', (event) => {
          let index = item.getAttribute('data-index');
          onAvatarClick(parseInt(index));
        });
      });
      initialized = true;
    }
  }, []);

  return (
    <div className='twitter-banner-wrapper'>
      <div className={`${styles.erc721sjfbbanner1} capture banner`}>
        <div className='absolute height--20 top--10 left--5'>
          <img
            key='0'
            data-index='0'
            className='nft'
            src={data[0].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--10 left--16'>
          <img
            key='1'
            data-index='1'
            className='nft'
            src={data[1].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--10 left--27'>
          <img
            key='2'
            data-index='2'
            className='nft'
            src={data[2].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--32 left--5'>
          <img
            key='3'
            data-index='3'
            className='nft'
            src={data[3].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--32 left--16'>
          <img
            key='4'
            data-index='4'
            className='nft'
            src={data[4].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--32 left--27'>
          <img
            key='5'
            data-index='5'
            className='nft'
            src={data[5].image_url}
          ></img>
        </div>
      </div>
    </div>
  );
}
