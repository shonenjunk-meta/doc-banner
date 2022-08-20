import { Nft } from '../model/Nft';

export const getNftPlaceholders = (number) => {
  let defaultNfts: Nft[] = [];

  for (let i = 0; i < number; i++) {
    defaultNfts.push({
      code: 'ERC721#SJ',
      standard: 'ERC721',
      id: `-${i.toString()}`,
      image_url:
        'https://i.shinji.xyz/static/shonen-junk/images/silhouette-18.png?v=20220526',
    });
  }

  return defaultNfts;
};
