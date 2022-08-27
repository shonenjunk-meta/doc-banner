import { Nft } from '../model/Nft';

type Props = {
  data: Nft[];
  index: number;
  classNames?: string;
  imageClassNames?: string;
  shape?: string;
  onAvatarClick?: (index: number) => void;
};

export default function AvatarImage({
  data,
  index,
  classNames = '',
  shape = '',
  onAvatarClick,
}: Props) {
  return (
    <img
      key={index}
      data-index={index}
      className={`nft ${classNames ?? ''} ${shape ?? ''}`}
      src={data[index].image_url}
      onClick={() => onAvatarClick(index)}
    />
  );
}
