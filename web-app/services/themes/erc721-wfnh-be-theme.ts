import { ITheme } from '../../model/Theme';
import styles from './erc721-wfnh-be-theme.module.scss';

const squarePosters: ITheme[] = [
  //WF Poster Shakey (2x2)
  {
    id: 'QIN9vaxrQg2C7zg',
    code: 'ERC721_WFNH-BE',
    name: 'WF Poster Shakey (2x2)',
    size: 'square',
    classNames: 'square',
    backdrop: {
      classNames: ``,
    },
    nfts: [
      {
        classNames: `rotate--20 height--50 top--0 left--0 `,
      },
      {
        classNames: `rotate--340 height--50 top--0 left--50`,
      },
      {
        classNames: `rotate--350 height--50 top--46 left--0`,
      },
      {
        classNames: `rotate--20 height--50 top--43 left--50`,
      },
    ],
  },
];

export const ERC721_WFNH_BE_THEMES: ITheme[] = [...squarePosters];
