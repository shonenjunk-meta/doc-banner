import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';
import sjLogo from '../public/shonen-junk-logo.svg';

export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>PFP Blender</h1>
      </div>

      <Link href='/'>
        <a className={currentRoute === '/' ? styles.active : ''}>Create</a>
      </Link>
      <Link href='/history'>
        <a className={currentRoute === '/history' ? styles.active : ''}>
          HISTORY
        </a>
      </Link>
    </nav>
  );
}
