import { ITheme } from '../model/Theme';
import styles from './Themes.module.scss';

export const themes: ITheme[] = [
  /**
   * Shonen Junk Theme
   * */
  {
    id: 'erc721_sj_1',
    name: 'SJ 3 Man Team',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      imageClassName: 'bg-wfnh',
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--80 top--10 left--5',
        shape: 'chevron-left',
      },
      {
        classNames: 'height--80 top--10 left--26',
        shape: 'chevron-left',
      },
      {
        classNames: 'height--80 top--10 left--47',
        shape: 'chevron-left',
      },
    ],
  },
  {
    id: 'erc721_sj_2',
    name: 'SJ 3 Man Team',
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      imageClassName: 'bg-wfnh',
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--80 top--10 left--5',
        shape: 'chevron-left',
      },
      {
        classNames: 'height--80 top--10 left--26',
        shape: 'chevron-left',
      },
      {
        classNames: 'height--80 top--10 left--47',
        shape: 'chevron-left',
      },
    ],
  },
  {
    id: 'erc721_sj_3',
    name: 'SJ 3 Man Team',
    size: 'opensea_banner',
    classNames: 'opensea-banner',
    backdrop: {
      imageClassName: 'bg-wfnh',
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--80 top--10 left--5',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--80 top--10 left--21',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--80 top--10 left--37',
        shape: 'chevron-right',
      },
    ],
  },
  {
    id: 'erc721_sj_4',
    name: 'SJ 4x3',
    size: 'square',
    classNames: `square`,
    backdrop: {
      imageClassName: 'bg-grad-1',
    },
    nfts: [
      {
        classNames: 'height--30 top--5 left--2',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--5 left--24',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--5 left--46',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--5 left--68',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--35 left--2',
        shape: 'parallelogram-left',
      },
      {
        classNames: 'height--30 top--35 left--24',
        shape: 'parallelogram-left',
      },
      {
        classNames: 'height--30 top--35 left--46',
        shape: 'parallelogram-left',
      },
      {
        classNames: 'height--30 top--35 left--68',
        shape: 'parallelogram-left',
      },
      {
        classNames: 'height--30 top--65 left--2',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--65 left--24',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--65 left--46',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--30 top--65 left--68',
        shape: 'parallelogram-right',
      },
    ],
  },
  {
    id: 'erc721_sj_5',
    name: 'SJ Split',
    size: 'square',
    classNames: `square`,
    backdrop: {
      imageClassName: 'bg-sj-thinrays-blend',
    },
    nfts: [
      {
        classNames: `height--80 top--10 left--10 ${styles.split_1_of_2}`,
        shape: 'circle',
      },
      {
        classNames: `height--80 top--10 left--50 ${styles.split_2_of_2}`,
        shape: 'circle',
      },
    ],
  },
  /**
   * Wize Fellaz Theme
   * */
];
