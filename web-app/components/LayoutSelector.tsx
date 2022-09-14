import { useEffect, useRef, useState } from 'react';
import { ITheme } from '../model/Theme';
import { themes } from '../services/ThemeProvider';

export interface Props {
  colId?: string;
  themeUpdated?: (theme: ITheme) => void;
}

const LayoutSelector = ({ colId, themeUpdated }: Props) => {
  const [filteredThemes, setFilteredThemes] = useState([]);
  const [filter, setFilter] = useState({
    size: 'twitter_banner',
    themeId: '',
  });

  useEffect(() => {
    if (colId) {
      const filtered = themes.filter(
        (theme) =>
          theme.size === filter.size &&
          (theme.code.toLowerCase().trim() === colId.toLowerCase().trim() ||
            theme.code.toLowerCase().trim() === 'generic')
      );
      setFilteredThemes(filtered);
      if (!filter.themeId && filtered.length > 0) {
        themeSelect(filtered[0].id);
      }
    }
  }, [filter, colId]);

  function sizeSelect(value) {
    const filtered = themes.filter(
      (theme) =>
        theme.size === value &&
        (theme.code.toLowerCase().trim() === colId.toLowerCase().trim() ||
          theme.code.toLowerCase().trim() === 'generic')
    );

    setFilter({
      size: value,
      themeId: filtered.length > 0 ? filtered[0].id : '',
    });

    if (filtered.length > 0 && themeUpdated) {
      themeUpdated(filtered[0]);
    } else {
      themeUpdated(null);
    }
  }

  function themeSelect(value) {
    setFilter({ size: filter.size, themeId: value });
    themeUpdated(themes.find((theme) => theme.id === value));
  }

  return (
    <div className='max-w-max mx-auto'>
      <div className='w-full text-tiny md:text-sm'>
        <div className=''>
          <ul className='flex flex-wrap justify-center tablet:justify-start -mb-px font-medium text-center text-white'>
            <li className=''>
              <a
                onClick={() => sizeSelect('twitter_banner')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'twitter_banner'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Twitter
              </a>
            </li>
            <li className=''>
              <a
                onClick={() => sizeSelect('facebook_banner')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'facebook_banner'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Facebook
              </a>
            </li>
            <li className=''>
              <a
                onClick={() => sizeSelect('opensea_banner')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'opensea_banner'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Opensea
              </a>
            </li>
            <li className=''>
              <a
                onClick={() => sizeSelect('square')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'square'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                {' '}
                Square (1:1)
              </a>
            </li>
            <li>
              <a
                onClick={() => sizeSelect('tower')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'tower'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Phone
              </a>
            </li>
            <li>
              <a
                onClick={() => sizeSelect('pillar')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'pillar'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Poster
              </a>
            </li>
            {/* <li>
              <a
                onClick={() => sizeSelect('twitter_banner')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'twitter_banner'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Poster (2:3)
              </a>
            </li>
            <li>
              <a
                onClick={() => sizeSelect('twitter_banner')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'twitter_banner'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Landscape (4:3)
              </a>
            </li>
            <li>
              <a
                onClick={() => sizeSelect('twitter_banner')}
                className={`inline-flex p-4 rounded-t-lg border-b-2 text-white hover:border-b-sj-yellow hover:text-sj-yellow cursor-pointer ${
                  filter.size === 'twitter_banner'
                    ? 'border-b-sj-yellow text-sj-yellow'
                    : ''
                }`}
              >
                Desktop (16:9)
              </a>
            </li> */}
          </ul>
        </div>

        <div className='relative mt-2 text-center tablet:text-left'>
          {filteredThemes.map((theme) => (
            <span
              className={`inline-block px-2 py-1 mt-2 rounded-sm mr-2 hover:bg-sj-blue hover:text-white cursor-pointer ${
                filter.themeId === theme.id
                  ? 'bg-sj-blue text-white'
                  : 'bg-white text-black'
              }`}
              key={theme.id}
              onClick={() => themeSelect(theme.id)}
            >
              {theme.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutSelector;
