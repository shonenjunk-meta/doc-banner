export type standard = 'ERC721';
export type tokenCode = 'ERC721#SJ' | 'ERC721#OCMONK' | 'ERC721#WFNH-BE';

export interface Nft {
  code: tokenCode;
  standard: standard;
  id: string;
  image_url: string;
}
