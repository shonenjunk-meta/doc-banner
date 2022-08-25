import AvatarImage from '../AvatarImage';
import { Nft } from '../../model/Nft';
import { ITheme } from '../../model/Theme';

type Props = {
  data: Nft[];
  theme: ITheme;
  onAvatarClick?: (index: number) => void;
};

export default function BannerBase({ data, theme, onAvatarClick }: Props) {
  return (
    <>
      <div className={`main-wrapper ${theme?.classNames}`}>
        <div
          className={`capture backdrop ${theme?.backdrop?.imageClassName} ${theme?.backdrop?.classNames}`}
        >
          {!theme || theme.nfts.length === 0
            ? ''
            : theme.nfts.map((item, index) => (
                <div key={index} className={`absolute ${item.classNames}`}>
                  <AvatarImage
                    data={data}
                    index={index}
                    classes={`${item.imageClassNames}`}
                    onAvatarClick={onAvatarClick}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
