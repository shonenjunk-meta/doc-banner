import styles from './BackgroundSelector.module.scss';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faL } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onChange?: ({}) => void;
};

export default function BackgroundSelector({ onChange }: Props) {
  const [color, setColor] = useState('#');
  const [bgStyle, setBgStyle] = useState({});
  const [showColorSelector, setShowColorSelector] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      window.addEventListener(
        'click',
        (e) => {
          let target = e.target as Element;

          if (target.closest(`.${styles.colorSelector}`) === null) {
            setShowColorSelector(false);
          }
        },
        true
      );
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (color !== '#') {
      let style = {
        backgroundColor: color,
        backgroundImage: 'none',
      };
      setBgStyle(style);
      onChange(style);
    }
  }, [color]);

  function openFiles() {
    (document.getElementById('uploader') as HTMLInputElement).click();
  }

  function upload() {
    var file = (document.getElementById('uploader') as HTMLInputElement)
      .files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      let style = {
        backgroundImage: `url('${reader.result}')`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
      };
      setBgStyle(style);
      onChange(style);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }

  return (
    <div className={styles.customBackgroundWrapper}>
      <input
        type='file'
        id='uploader'
        className='hidden'
        onChange={() => upload()}
      />

      <div
        className={styles.colorButton}
        style={bgStyle}
        onClick={() => setShowColorSelector(!showColorSelector)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`${styles.colorSelector} ${
            showColorSelector ? '' : styles.hide
          }`}
        >
          <div>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <div className={styles.hexWrapper}>
            <span>HEX</span>
            <HexColorInput color={color} onChange={setColor} />
          </div>
          <div className={styles.uploadWrapper}>
            <div className={styles.uploadButton} onClick={() => openFiles()}>
              Upload <FontAwesomeIcon icon={faImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
