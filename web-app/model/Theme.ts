import { StaticImageData } from 'next/image';

export type ThemeSize =
  | 'twitter_banner'
  | 'facebook_banner'
  | 'opensea_banner'
  | 'square'
  | 'pillar'
  | 'tower';

export interface IThemeImage {
  src?: StaticImageData;
  classNames?: string;
  shape?: string;
}

export interface IThemeNft {
  classNames?: string;
  shape?: string;
}

export interface IThemeSpeech {
  dialogue: string;
  classNames?: string;
}

export interface ITheme {
  id: string;
  name: string;
  classNames: string;
  size: ThemeSize;
  backdrop: IThemeImage;
  nfts: IThemeNft[];

  bgStickers?: IThemeImage[];
  fgStickers?: IThemeImage[];
  speech?: IThemeSpeech[];
}
