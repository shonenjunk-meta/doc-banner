import { Nft } from '../model/Nft';
import { ITheme } from '../model/Theme';
import domtoimage from 'dom-to-image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faImage } from '@fortawesome/free-solid-svg-icons';
import AvatarImage from './AvatarImage';

type Props = {
  data: Nft[];
  theme: ITheme;
  onAvatarClick?: (index: number) => void;
};

export default function BannerBase({ data, theme, onAvatarClick }: Props) {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (downloading) {
      domtoimage
        .toPng(document.querySelector('#capture'))
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          downloadURI(dataUrl, `${theme.name}.png`);

          setDownloading(false);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
          setDownloading(false);
        });
    }
  }, [downloading]);

  function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div className={`container ${downloading ? 'printing' : ''}`}>
        <div className={`main-wrapper ${theme?.classNames} `}>
          <div
            id='capture'
            className={`backdrop ${theme?.backdrop?.imageClassName} ${
              theme?.backdrop?.classNames ?? ''
            }`}
          >
            {!theme || theme.nfts.length === 0
              ? ''
              : theme.nfts.map((item, index) => (
                  <AvatarImage
                    key={index}
                    data={data}
                    index={index}
                    classNames={item.classNames}
                    imageClassNames={item.imageClassNames}
                    shape={item.shape}
                    onAvatarClick={onAvatarClick}
                  />
                ))}
          </div>
        </div>

        <div className='canvas-buttons'>
          <button
            disabled={downloading ? true : false}
            className='button'
            onClick={() => setDownloading(true)}
          >
            <FontAwesomeIcon icon={faImage} /> Background
          </button>

          <button
            disabled={downloading ? true : false}
            className='button'
            onClick={() => setDownloading(true)}
          >
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        </div>
      </div>
    </>
  );
}
