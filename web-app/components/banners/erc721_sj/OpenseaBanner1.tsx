import styles from './Banner1.module.scss';
import AvatarImage from '../../AvatarImage';
import { Nft } from '../../../model/Nft';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';

type Props = {
  data: Nft[];
  onAvatarClick?: (index: number) => void;
};

export default function Erc721SJOSBanner1({ data, onAvatarClick }: Props) {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (downloading) {
      html2canvas(document.querySelector('#capture2'), {
        allowTaint: false,
      }).then((canvas) => {
        // document.body.appendChild(canvas);
        var myImage = canvas.toDataURL('image/png');
        downloadURI(myImage, 'testaa.png');
        // var image = canvas
        //   .toDataURL('image/png')
        //   .replace('image/png', 'image/octet-stream'); // here is the most important part because if you dont replace you will get a DOM 18 exception.
        // window.location.href = image;
        // console.log(image);
        setDownloading(false);
      });
    }
  }, [downloading]);

  function PrintDiv() {
    html2canvas(document.querySelector('#capture2'), {
      allowTaint: false,
    }).then((canvas) => {
      // document.body.appendChild(canvas);

      var myImage = canvas.toDataURL('image/png');
      downloadURI(myImage, 'testaa.png');

      // var image = canvas
      //   .toDataURL('image/png')
      //   .replace('image/png', 'image/octet-stream'); // here is the most important part because if you dont replace you will get a DOM 18 exception.
      // window.location.href = image;
      // console.log(image);
    });
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
      <div
        className={`banner-wrapper opensea ${downloading ? 'printing' : ''}`}
      >
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
      <button onClick={() => setDownloading(true)}>Test</button>
    </>
  );
}
