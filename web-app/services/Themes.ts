import { ITheme } from '../model/Theme';
import { StickerProvider } from './image.service';
import styles from './Themes.module.scss';

export const themes: ITheme[] = [
  /**
   * Generic
   */
  {
    id: 'generic_5x8',
    name: 'Full 5 x 8',
    size: 'pillar',
    classNames: 'pillar',
    backdrop: {
      classNames: `${styles.generic_5x8}`,
    },
    nfts: [
      {
        classNames: 'top--0 left--0',
      },
      {
        classNames: 'top--0 left--20',
      },
      {
        classNames: 'top--0 left--40',
      },
      {
        classNames: 'top--0 left--60',
      },
      {
        classNames: 'top--0 left--80',
      },
      {
        classNames: `${styles.secondRow} left--0`,
      },
      {
        classNames: `${styles.secondRow} left--20`,
      },
      {
        classNames: `${styles.secondRow} left--40`,
      },
      {
        classNames: `${styles.secondRow} left--60`,
      },
      {
        classNames: `${styles.secondRow} left--80`,
      },
      {
        classNames: `${styles.thirdRow} left--0`,
      },
      {
        classNames: `${styles.thirdRow} left--20`,
      },
      {
        classNames: `${styles.thirdRow} left--40`,
      },
      {
        classNames: `${styles.thirdRow} left--60`,
      },
      {
        classNames: `${styles.thirdRow} left--80`,
      },
      {
        classNames: `${styles.fourthRow} left--0`,
      },
      {
        classNames: `${styles.fourthRow} left--20`,
      },
      {
        classNames: `${styles.fourthRow} left--40`,
      },
      {
        classNames: `${styles.fourthRow} left--60`,
      },
      {
        classNames: `${styles.fourthRow} left--80`,
      },
      {
        classNames: `${styles.fifthRow} left--0`,
      },
      {
        classNames: `${styles.fifthRow} left--20`,
      },
      {
        classNames: `${styles.fifthRow} left--40`,
      },
      {
        classNames: `${styles.fifthRow} left--60`,
      },
      {
        classNames: `${styles.fifthRow} left--80`,
      },
      {
        classNames: `${styles.sixthRow} left--0`,
      },
      {
        classNames: `${styles.sixthRow} left--20`,
      },
      {
        classNames: `${styles.sixthRow} left--40`,
      },
      {
        classNames: `${styles.sixthRow} left--60`,
      },
      {
        classNames: `${styles.sixthRow} left--80`,
      },
      {
        classNames: `${styles.seventhRow} left--0`,
      },
      {
        classNames: `${styles.seventhRow} left--20`,
      },
      {
        classNames: `${styles.seventhRow} left--40`,
      },
      {
        classNames: `${styles.seventhRow} left--60`,
      },
      {
        classNames: `${styles.seventhRow} left--80`,
      },
      {
        classNames: `${styles.eigthRow} left--0`,
      },
      {
        classNames: `${styles.eigthRow} left--20`,
      },
      {
        classNames: `${styles.eigthRow} left--40`,
      },
      {
        classNames: `${styles.eigthRow} left--60`,
      },
      {
        classNames: `${styles.eigthRow} left--80`,
      },
    ],
  },
  {
    id: 'generic_3x6',
    name: 'Full 3 x 6',
    size: 'tower',
    classNames: 'tower',
    backdrop: {
      classNames: `${styles.generic_3x6}`,
    },
    nfts: [
      {
        classNames: `left--0 top--0 ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.secondRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.thirdRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.fourthRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.fifthRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.sixthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} top--0 ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.secondRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.thirdRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.fourthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.fifthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.sixthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} top--0 ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.secondRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.thirdRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.fourthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.fifthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.sixthRow} ${styles.cNft}`,
      },
    ],
  },
  /**
   * Shonen Junk Theme
   * */
  {
    id: 'erc721_sj_1',
    name: 'SJ 3 Man Team',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: 'bg-wfnh bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    // bgStickers: [
    //   {
    //     classNames: 'height--50 top--30 left--60 rotate--35',
    //     shape: 'circle',
    //     src: StickerProvider.sjNftLa2022Poap,
    //   },
    // ],
    nfts: [
      {
        classNames: 'height--80 top--10 left--5 ',
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
    // fgStickers: [
    //   {
    //     classNames: 'height--50 top---10 left--33 rotate--68',
    //     shape: 'circle',
    //     src: StickerProvider.sjNftLa2022Poap,
    //   },
    //   {
    //     classNames: 'height--50 top--35 left---5 rotate--329',
    //     shape: 'circle',
    //     src: StickerProvider.sjNftNyc2022Poap,
    //   },
    // ],
  },
  {
    id: 'erc721_sj_2',
    name: 'SJ 3 Man Team',
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: 'bg-wfnh bg-size--cover bg-pos-y--bottom bg-pos-x--left',
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
      classNames: 'bg-wfnh bg-size--cover bg-pos-y--bottom bg-pos-x--left',
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
      classNames: 'bg-grad-1',
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
      classNames: 'bg-sj-thinrays-blend',
    },
    nfts: [
      {
        classNames: `height--80 top--10 left--10 ${styles.split_1_of_2}`,
        shape: 'circle',
      },
      {
        classNames: `height--80 top--10 left--10 ${styles.split_2_of_2}`,
        shape: 'circle',
      },
    ],
  },
  {
    id: 'erc721_sj_6',
    name: 'SJ Chikyuu Sentai',
    size: 'square',
    classNames: `square`,
    backdrop: {
      classNames: `bg-sj-thinrays-blend ${styles.sj_chikyuu_sentai}`,
    },
    nfts: [
      {
        classNames: `height--100 top--0 left---40 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left---20 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left--0 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left--20 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left--40 ${styles.split_3_of_5}`,
        shape: '',
      },
    ],
  },
  /**
   * Wize Fellaz Theme
   * */
  {
    id: 'erc721_wf_1',
    name: 'WF Lobby',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: 'bg-wflobby bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },

    nfts: [
      {
        classNames: 'height--23 top--21 left--24 ',
      },
      {
        classNames: 'height--41 top--13 left--43',
      },
      {
        classNames: 'height--23 top--21 left--68',
      },
    ],
  },
  {
    id: 'erc721_wf_2',
    name: 'WF 2x2',
    size: 'square',
    classNames: 'square',
    backdrop: {
      classNames: `${styles.wf_2x2}`,
    },
    nfts: [
      {
        classNames: `${styles.first} height--50 top--0 left--0 `,
      },
      {
        classNames: `${styles.second} height--50 top--0 left--50`,
      },
      {
        classNames: `${styles.third} height--50 top--46 left--0`,
      },
      {
        classNames: `${styles.fourth} height--50 top--43 left--50`,
      },
    ],
  },
];
