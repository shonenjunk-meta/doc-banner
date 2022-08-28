import Link from 'next/link';
import sjLogo from '../public/shonen-junk-logo.svg';
import wfLogo from '../public/wize-fellaz-logo.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>From the community for the community</h5>
      <div className={styles.footerLogos}>
        <div>
          <Link href='https://shonenjunk.xyz/'>
            <a target='_blank'>
              <img src={sjLogo.src} />
            </a>
          </Link>
        </div>
        <div>
          <h1>X</h1>
        </div>
        <div>
          <Link href='https://www.wizefellaz.com/' target='_blank'>
            <a target='_blank'>
              <img src={wfLogo.src} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
