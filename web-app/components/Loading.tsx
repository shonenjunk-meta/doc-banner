import styles from './Loading.module.scss';
import loadingAnimation from '../public/loading.svg';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loadingAnimation.src} alt='Please wait...'></img>
      <h4>Please wait</h4>
    </div>
  );
}
