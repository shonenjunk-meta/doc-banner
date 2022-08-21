import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';

export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className={styles.nav}>
      <Link className={currentRoute === '/' ? styles.active : ''} href='/'>
        Create
      </Link>
      <Link
        className={currentRoute === '/history' ? styles.active : ''}
        href='/history'
      >
        History
      </Link>
    </nav>
  );
}
