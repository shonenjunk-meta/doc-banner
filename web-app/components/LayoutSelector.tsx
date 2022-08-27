import { useEffect, useRef, useState } from 'react';
import { ITheme } from '../model/Theme';
import { themes } from '../services/Themes';
import styles from './LayoutSelector.module.scss';

export interface Props {
  themeUpdated?: (theme: ITheme) => void;
}

const LayoutSelector = ({ themeUpdated }: Props) => {
  const [filter, setFilter] = useState({
    size: 'twitter_banner',
    themeId: '',
  });
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      const size = document.getElementById('size') as HTMLSelectElement;
      const filteredThemes = themes.filter(
        (theme) => theme.size === size.value
      );
      setFilter({
        size: size.value,
        themeId: filteredThemes.length > 0 ? filteredThemes[0].id : '',
      });
      themeChange();
    }
    initialized.current = true;
  }, []);

  function sizeChange() {
    const size = document.getElementById('size') as HTMLSelectElement;
    const filteredThemes = themes.filter((theme) => theme.size === size.value);
    setFilter({
      size: size.value,
      themeId: filteredThemes.length > 0 ? filteredThemes[0].id : '',
    });

    if (filteredThemes.length > 0 && themeUpdated) {
      themeUpdated(filteredThemes[0]);
    }
  }

  function themeChange() {
    const size = document.getElementById('size') as HTMLSelectElement;
    const themeId = document.getElementById('theme') as HTMLSelectElement;

    setFilter({ size: size.value, themeId: themeId.value });
    themeUpdated(themes.find((theme) => theme.id === themeId.value));
  }

  return (
    <div className={styles.layoutSelector}>
      <select name='size' id='size' onChange={sizeChange}>
        <option value='twitter_banner'>Twitter Banner</option>
        <option value='facebook_banner'>Facebook Banner</option>
        <option value='opensea_banner'>Opensea Banner</option>
        <option value='square'>Square</option>
        {/* <option value='pillar'>Pillar</option> */}
      </select>
      <select name='theme' id='theme' onChange={themeChange}>
        {themes
          .filter((theme) => theme.size === filter.size)
          .map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default LayoutSelector;
