import { Nft } from '../model/Nft';

type Props = {
  data: Nft[];
  index: number;
  rounded?: boolean;
};

export default function AvatarImage({ data, index, rounded = false }: Props) {
  return (
    <img
      key={index}
      data-index={index}
      className={`nft ${rounded ? 'rounded' : ''}`}
      src={data[index].image_url}
    ></img>
  );
}
