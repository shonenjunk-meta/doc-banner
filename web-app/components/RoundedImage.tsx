import { Nft } from '../model/Nft';

type Props = {
  data: Nft[];
  index: number;
};

export default function AvatarRoundedImage({ data, index }: Props) {
  return (
    <img
      key={index}
      data-index={index}
      className='nft rounded'
      src={data[index].image_url}
    ></img>
  );
}
