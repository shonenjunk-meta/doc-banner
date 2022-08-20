import { NFT } from '../services/local-storage.service';

export type OutputProps = {
  data: NFT[];
  onAvatarClick?: (index: number) => void;
};
