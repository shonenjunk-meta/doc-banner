import Footer from './Footer';
import Nav from './Nav';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.layout}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
