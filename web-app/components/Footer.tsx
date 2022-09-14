import Link from 'next/link';
import sjLogo from '../public/shonen-junk-logo.svg';

export default function Footer() {
  return (
    <footer className='text-center mb-8 mt-auto'>
      <h5 className='text-xs mt-20'>Create with</h5>
      <div className='mt-auto flex flex-row justify-center mt-3 '>
        <div>
          <Link href='https://shonenjunk.xyz/'>
            <a target='_blank'>
              <img src={sjLogo.src} className='h-14' />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
