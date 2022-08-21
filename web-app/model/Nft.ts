export type standard = 'ERC721';
export type tokenCode = 'ERC721_SJ' | 'ERC721_OCMONK' | 'ERC721_WFNH-BE';

export interface Nft {
  code: tokenCode;
  standard: standard;
  id: string;
  image_url: string;
}
