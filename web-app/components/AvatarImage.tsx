import { Nft } from '../model/Nft';

type Props = {
  data: Nft[];
  index: number;
  classes?: string;
  onAvatarClick?: (index: number) => void;
};

export default function AvatarImage({
  data,
  index,
  classes = '',
  onAvatarClick,
}: Props) {
  return (
    <img
      key={index}
      data-index={index}
      className={`nft ${classes}`}
      src={data[index].image_url}
      onClick={() => onAvatarClick(index)}
    ></img>
  );
}
