import styles from './BackgroundSelector.module.scss';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onChange?: ({}) => void;
};

export default function BackgroundSelector({ onChange }: Props) {
  const [color, setColor] = useState('#aabbcc');
  const [bgStyle, setBgStyle] = useState({});
  const [showColorSelector, setShowColorSelector] = useState(false);

  useEffect(() => {
    let style = {
      backgroundColor: color,
      backgroundImage: 'none',
    };
    setBgStyle(style);
    onChange(style);
  }, [color]);

  function upload() {}

  return (
    <div className={styles.customBackgroundWrapper}>
      <div className={styles.uploadButton} onClick={() => upload()}>
        <FontAwesomeIcon icon={faImage} />
      </div>
      <div
        className={styles.colorButton}
        style={bgStyle}
        onClick={() => setShowColorSelector(!showColorSelector)}
      >
        <div
          className={`${styles.colorSelector} ${
            showColorSelector ? '' : styles.hide
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <div className={styles.hexWrapper}>
            <span>HEX</span>
            <HexColorInput color={color} onChange={setColor} />
          </div>
        </div>
      </div>
    </div>
  );
}
