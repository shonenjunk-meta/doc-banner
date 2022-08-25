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
  imageClassNames = '',
  shape = '',
  onAvatarClick,
}: Props) {
  return (
    <div key={index} className={`absolute ${classNames ?? ''}`}>
      <img
        key={index}
        data-index={index}
        className={`nft ${imageClassNames ?? ''} ${shape ?? ''}`}
        src={data[index].image_url}
        onClick={() => onAvatarClick(index)}
      />
    </div>
  );
}
