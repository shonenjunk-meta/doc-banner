import { Nft } from '../../model/Nft';
import { ITheme } from '../../model/Theme';
import domtoimage from 'dom-to-image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

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
    <div className={`container ${downloading ? 'printing' : ''}`}>
      <div className={`main-wrapper ${theme?.classNames} `}>
        <div
          id='capture'
          className={`backdrop ${theme?.backdrop?.imageClassName} ${theme?.backdrop?.classNames}`}
        >
          {!theme || theme.nfts.length === 0
            ? ''
            : theme.nfts.map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.classNames ?? ''}`}
                >
                  <img
                    key={index}
                    data-index={index}
                    className={`nft ${item.imageClassNames ?? ''} ${
                      item.shape ?? ''
                    }`}
                    src={data[index].image_url}
                    onClick={() => onAvatarClick(index)}
                  />
                </div>
              ))}
        </div>
      </div>

      <button
        disabled={downloading ? true : false}
        className='button download-button'
        onClick={() => setDownloading(true)}
      >
        <FontAwesomeIcon icon={faDownload} /> Download
      </button>
    </div>
  );
}
