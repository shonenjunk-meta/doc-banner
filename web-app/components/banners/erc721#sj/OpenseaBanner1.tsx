import styles from './Banner1.module.scss';
import AvatarImage from '../../AvatarImage';
import { Nft } from '../../../model/Nft';
import html2canvas from 'html2canvas';

type Props = {
  data: Nft[];
  onAvatarClick?: (index: number) => void;
};

export default function Erc721SJOSBanner1({ data, onAvatarClick }: Props) {
  function PrintDiv() {
    html2canvas(document.querySelector('#capture2'), { allowTaint: true }).then(
      (canvas) => {
        document.body.appendChild(canvas);
      }
    );
  }

  function downloadURI(uri, name) {
    var link = document.createElement('a');

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
  }
  return (
    <>
      <h1>Opeansea Banner</h1>
      <div className='banner-wrapper opensea'>
        <div id='capture2' className={`${styles.erc721sjfbbanner1} banner`}>
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
      <button onClick={() => PrintDiv()}>Test</button>
    </>
  );
}
