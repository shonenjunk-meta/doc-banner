import { ITheme } from '../model/Theme';
import bdWfnh from '../public/backdrops/wfnh.png';

export const themes: ITheme[] = [
  /**
   * Shonen Junk Theme
   * */
  {
    id: 'erc721_sj_1',
    name: 'SJ 3 Man Team',
    size: 'twitter_banner',
    classNames: 'twitter',
    backdrop: {
      imageClassName: 'bg-wfnh',
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--80 top--10 left--5',
        imageClassNames: 'chevron-left',
      },
      {
        classNames: 'height--80 top--10 left--26',
        imageClassNames: 'chevron-left',
      },
      {
        classNames: 'height--80 top--10 left--47',
        imageClassNames: 'chevron-left',
      },
    ],
  },
  /**
   * Wize Fellaz Theme
   * */
];
