import { ITheme } from '../model/Theme';
import { StickerProvider } from './image.service';
import styles from './Themes.module.scss';

export const themes: ITheme[] = [
  /**
   * Generic
   */
  {
    id: 'generic_1',
    code: 'GENERIC',
    name: 'Full Poster (5x8)',
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
    id: 'generic_2',
    code: 'GENERIC',
    name: 'Full Poster (3x6)',
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
  {
    id: 'generic_3',
    code: 'GENERIC',
    name: 'Bordered Poster Centerpiece (4x4)',
    size: 'square',
    classNames: 'square',
    backdrop: {
      classNames: `${styles.generic_3_4x4}`,
    },
    nfts: [
      {
        classNames: `${styles.firstRow} ${styles.firstCol} left--2 top--2`,
      },
      {
        classNames: `$${styles.firstRow} ${styles.secondCol} top--2`,
      },
      {
        classNames: `${styles.firstRow} ${styles.thirdCol} top--2`,
      },
      {
        classNames: `${styles.firstRow} ${styles.fourthCol} top--2`,
      },
      {
        classNames: `${styles.secondRow} ${styles.firstCol} left--2`,
      },
      {
        classNames: `${styles.secondRow} ${styles.secondCol}`,
      },
      {
        classNames: `${styles.secondRow} ${styles.thirdCol}`,
      },
      {
        classNames: `${styles.secondRow} ${styles.fourthCol}`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.firstCol} left--2`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.secondCol}`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.thirdCol}`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.fourthCol}`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.firstCol} left--2`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.secondCol}`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.thirdCol}`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.fourthCol}`,
      },
    ],
  },
  /**
   * Shonen Junk Theme
   * */
  {
    id: 'erc721_sj_tb_mirror',
    code: 'ERC721_SJ',
    name: 'SJ Twitter-B Mirror-3',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.erc721_sj_banner_black_mirror}`,
    },
    fgStickers: [
      {
        classNames: `height--40 top--30 left--64 ${styles.logo}`,
        shape: '',
        src: StickerProvider.sjLogoBlue,
      },
    ],
    nfts: [
      {
        classNames: `height--65 top--14 left--1 ${styles.card} ${styles.card2}`,
        shape: '',
      },
      {
        classNames: `height--65 top--14 left--47 ${styles.card} ${styles.card3}`,
        shape: '',
      },
      {
        classNames: `height--70 top--12 left--23 ${styles.card}`,
        shape: '',
      },
    ],
  },
  {
    id: 'erc721_sj_fb_mirror',
    code: 'ERC721_SJ',
    name: 'SJ Facebook-B Mirror-3',
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `${styles.erc721_sj_banner_black_mirror}`,
    },
    fgStickers: [
      {
        classNames: `height--40 top--30 left--64 ${styles.logo}`,
        shape: '',
        src: StickerProvider.sjLogoBlue,
      },
    ],
    nfts: [
      {
        classNames: `height--65 top--14 left--1 ${styles.card} ${styles.card2}`,
        shape: '',
      },
      {
        classNames: `height--65 top--14 left--47 ${styles.card} ${styles.card3}`,
        shape: '',
      },
      {
        classNames: `height--70 top--12 left--23 ${styles.card}`,
        shape: '',
      },
    ],
  },
  {
    id: 'erc721_sj_osb_mirror',
    code: 'ERC721_SJ',
    name: 'SJ Opensea-B Mirror-3',
    size: 'opensea_banner',
    classNames: 'opensea-banner',
    backdrop: {
      classNames: `${styles.erc721_sj_banner_black_mirror}`,
    },
    fgStickers: [
      {
        classNames: `height--40 top--30 left--64 ${styles.logo}`,
        shape: '',
        src: StickerProvider.sjLogoBlue,
      },
    ],
    nfts: [
      {
        classNames: `height--65 top--14 left--15 ${styles.card} ${styles.card2}`,
        shape: '',
      },
      {
        classNames: `height--65 top--14 left--52 ${styles.card} ${styles.card3}`,
        shape: '',
      },
      {
        classNames: `height--70 top--12 left--33 ${styles.card}`,
        shape: '',
      },
    ],
  },
  {
    id: 'erc721_sj_tb_1',
    code: 'ERC721_SJ',
    name: 'SJ Twitter-B Gen-4',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--100 top--0 left---3 ',
        shape: 'point-right',
      },
      {
        classNames: 'height--100 top--0 left--21',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--45',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--69',
        shape: 'point-cave-left',
      },
    ],
  },
  {
    id: 'erc721_sj_2',
    code: 'ERC721_SJ',
    name: 'SJ Facebook-B Gen-4',
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: 'bg-wfnh bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--100 top--0 left---3 ',
        shape: 'point-right',
      },
      {
        classNames: 'height--100 top--0 left--21',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--45',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--69',
        shape: 'point-cave-left',
      },
    ],
  },
  {
    id: 'erc721_sj_3',
    code: 'ERC721_SJ',
    name: 'SJ Opensea-B Gen-6',
    size: 'opensea_banner',
    classNames: 'opensea-banner',
    backdrop: {
      classNames: 'bg-wfnh bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--100 top--0 left---7',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--11',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--29',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--47',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--65',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--83',
        shape: 'parallelogram-right',
      },
    ],
  },
  {
    id: 'erc721_sj_4',
    code: 'ERC721_SJ',
    name: 'SJ Poster NFTNYC (2x2)',
    size: 'square',
    classNames: `square`,
    backdrop: {
      classNames: 'bg-grad-1',
    },
    nfts: [
      {
        classNames: 'height--46 top--2 left--2',
        shape: 'circle',
      },
      {
        classNames: 'height--46 top--2 left--52',
        shape: 'circle',
      },
      {
        classNames: 'height--46 top--52 left--2',
        shape: 'circle',
      },
      {
        classNames: 'height--46 top--52 left--52',
        shape: 'circle',
      },
    ],
    fgStickers: [
      {
        classNames: 'height--33 top--33 left--33 rotate--329',
        shape: 'circle',
        src: StickerProvider.sjNftNyc2022Poap,
      },
    ],
  },
  {
    id: 'erc721_sj_5',
    code: 'ERC721_SJ',
    name: 'SJ PFP Split (2)',
    size: 'square',
    classNames: `square`,
    backdrop: {
      classNames: 'bg-sj-thinrays-blend',
    },
    nfts: [
      {
        classNames: `height--90 top--5 left--5 ${styles.split_1_of_2}`,
        shape: 'circle',
      },
      {
        classNames: `height--90 top--5 left--5 ${styles.split_2_of_2}`,
        shape: 'circle',
      },
    ],
  },
  {
    id: 'erc721_sj_6',
    code: 'ERC721_SJ',
    name: 'SJ Poster Chikyuu Sentai (5)',
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
    code: 'ERC721_WFNH-BE',
    name: 'WF Twitter-B Lobby',
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
    code: 'ERC721_WFNH-BE',
    name: 'WF Poster Shakey (2x2)',
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
