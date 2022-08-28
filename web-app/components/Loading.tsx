import styles from './Loading.module.scss';
import loadingAnimation from '../public/loading.svg';

type Props = {
  show: boolean;
};

export default function Loading({ show }: Props) {
  return (
    <div className={`${styles.loading} ${show ? '' : styles.hide}`}>
      <img src={loadingAnimation.src} alt='Please wait...'></img>
      <h4>Please wait</h4>
    </div>
  );
}
