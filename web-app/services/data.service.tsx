import { Nft } from '../model/Nft';

export const getNftPlaceholders = (number) => {
  let defaultNfts: Nft[] = [];

  for (let i = 0; i < number; i++) {
    defaultNfts.push({
      code: 'ERC721_SJ',
      standard: 'ERC721',
      id: `-${i.toString()}`,
      image_url:
        'https://image.shutterstock.com/image-vector/chess-board-monochrome-image-square-600w-364734542.jpg',
    });
  }

  return defaultNfts;
};
