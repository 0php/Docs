import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='px-6 lg:px-[108px] py-8'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1224px] mx-auto'>
        <div className='flex items-center gap-1 text-white font-space-grotesk'>
          <span>Developed by</span>
          <a
            href='https://syntac.co'
            className='hover:text-blue transition-colors'
          >
            Syntac
          </a>{' '}
          &amp;
          <a
            href='https://bytelogic.me'
            className='hover:text-blue transition-colors'
          >
            ByteLogic
          </a>
        </div>

        <div className='flex flex-wrap justify-center gap-6 text-sm text-white font-space-grotesk'>
          <a
            href='https://github.com/0php/Zero/blob/main/LICENSE'
            target='_blank'
            className='hover:text-[#5972E5] transition-colors'
          >
            License
          </a>
          <Link href='#' className='hover:text-[#5972E5] transition-colors'>
            Term of Services
          </Link>
          <a
            href='mailto:hello@syntac.co'
            className='hover:text-[#5972E5] transition-colors'
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
