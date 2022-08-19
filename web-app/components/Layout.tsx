import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
