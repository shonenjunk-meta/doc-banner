import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';

export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={currentRoute === '/' ? styles.active : ''}>Create</a>
      </Link>
      <Link href='/downloads'>
        <a className={currentRoute === '/downloads' ? styles.active : ''}>
          Downloads
        </a>
      </Link>
    </nav>
  );
}
