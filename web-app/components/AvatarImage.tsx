import { Nft } from '../model/Nft';

type Props = {
  data: Nft[];
  index: number;
  classes?: string;
};

export default function AvatarImage({ data, index, classes = '' }: Props) {
  return (
    <img
      key={index}
      data-index={index}
      className={`nft ${classes}`}
      src={data[index].image_url}
    ></img>
  );
}
