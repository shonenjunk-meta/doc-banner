import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Dashboard</Link>
        </li>
        <li>
          <Link href='/collection'>Collection</Link>
        </li>
        <li>
          <Link href='/history'>History</Link>
        </li>
      </ul>
    </nav>
  );
}
