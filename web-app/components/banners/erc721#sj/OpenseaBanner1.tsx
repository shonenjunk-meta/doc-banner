import styles from './Banner1.module.scss';
import AvatarImage from '../../AvatarImage';
import { Nft } from '../../../model/Nft';

type Props = {
  data: Nft[];
  onAvatarClick?: (index: number) => void;
};

export default function Erc721SJOSBanner1({ data, onAvatarClick }: Props) {
  return (
    <>
      <h1>Opeansea Banner</h1>
      <div className='banner-wrapper opensea'>
        <div className={`${styles.erc721sjfbbanner1} capture banner`}>
          <div className='absolute height--20 top--10 left--5'>
            <AvatarImage data={data} index={0} />
          </div>
          <div className='absolute height--20 top--10 left--16'>
            <AvatarImage data={data} index={1} />
          </div>
          <div className='absolute height--20 top--10 left--27'>
            <AvatarImage data={data} index={2} />
          </div>
          <div className='absolute height--20 top--32 left--5'>
            <AvatarImage data={data} index={3} />
          </div>
          <div className='absolute height--20 top--32 left--16'>
            <AvatarImage data={data} index={4} />
          </div>
          <div className='absolute height--20 top--32 left--27'>
            <AvatarImage data={data} index={5} />
          </div>
        </div>
      </div>
    </>
  );
}
