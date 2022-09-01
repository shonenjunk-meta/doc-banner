import { ITheme } from '../model/Theme';
import { ERC721_SJ_THEMES } from './themes/erc721-sj-theme';
import { ERC721_WFNH_BE_THEMES } from './themes/erc721-wfnh-be-theme';
import { GENERIC_THEMES } from './themes/generic-theme';

export const themes: ITheme[] = [
  ...GENERIC_THEMES,
  ...ERC721_SJ_THEMES,
  ...ERC721_WFNH_BE_THEMES,
];
