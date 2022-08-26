import { Nft } from '../model/Nft';
import { ITheme } from '../model/Theme';
import domtoimage from 'dom-to-image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faImage,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons';
import AvatarImage from './AvatarImage';
import styles from './Canvas.module.scss';
import BackgroundSelector from './BackgroundSelector';

type Props = {
  data: Nft[];
  theme: ITheme;
  onAvatarClick?: (index: number) => void;
};

export default function BannerBase({ data, theme, onAvatarClick }: Props) {
  const [downloading, setDownloading] = useState(false);

  const [customBackground, setCustomBackground] = useState({});

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

  function setBackground(style: any) {
    setCustomBackground(style);
  }

  return (
    <>
      <div className={`container ${downloading ? 'printing' : ''}`}>
        <div>
          <BackgroundSelector onChange={setBackground} />
        </div>
        <div className={`main-wrapper ${theme?.classNames} `}>
          <div
            id='capture'
            style={customBackground}
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
          <button className='button' onClick={() => setBackground({})}>
            <FontAwesomeIcon icon={faRefresh} /> Default
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
