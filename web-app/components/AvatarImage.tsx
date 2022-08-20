import { Nft } from '../model/Nft';

type Props = {
  data: Nft[];
  index: number;
};

export default function AvatarImage({ data, index }: Props) {
  return (
    <img
      key={index}
      data-index={index}
      className='nft'
      src={data[index].image_url}
    ></img>
  );
}
