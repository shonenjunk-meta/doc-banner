import { useEffect, useState } from 'react';
import { getNftPlaceholders } from '../../../services/data.service';
import _ from 'lodash';
import styles from './FacebookBanner1.module.scss';

const maxAvatars: number = 6;

export default function Erc721SJFBBanner1() {
  const [nfts, setNfts] = useState(getNftPlaceholders(maxAvatars));
  let initialized: boolean = false;

  useEffect(() => {
    if (!initialized) {
      document.querySelectorAll('.nft').forEach((item) => {
        item.addEventListener('click', (event) => {
          let index = item.getAttribute('data-index');
          let nftsCopy = [...nfts];
          nftsCopy[index].image_url =
            'https://i.shinji.xyz/static/shonen-junk/i/reveals/800x800/de7f5bba82e50dbdeed92f19576717cb97e89175de2dc8915453416746342b14.png?v=20220526';
          setNfts(nftsCopy);
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
            src={nfts[0].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--10 left--16'>
          <img
            key='1'
            data-index='1'
            className='nft'
            src={nfts[1].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--10 left--27'>
          <img
            key='2'
            data-index='2'
            className='nft'
            src={nfts[2].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--32 left--5'>
          <img
            key='3'
            data-index='3'
            className='nft'
            src={nfts[3].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--32 left--16'>
          <img
            key='4'
            data-index='4'
            className='nft'
            src={nfts[4].image_url}
          ></img>
        </div>
        <div className='absolute height--20 top--32 left--27'>
          <img
            key='5'
            data-index='5'
            className='nft'
            src={nfts[5].image_url}
          ></img>
        </div>
      </div>
    </div>
  );
}
