import { ITheme } from '../model/Theme';

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
  /**
   * Wize Fellaz Theme
   * */
];
