import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='px-6 lg:px-[108px] py-8'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1224px] mx-auto'>
        <div className='flex items-center gap-1 text-[#222] font-space-grotesk'>
          <span>Developed by</span>
          <a
            href='https://syntac.co'
            className='underline hover:no-underline hover:text-[#555] transition-colors'
          >
            Syntac
          </a>{' '}
          &amp;
          <a
            href='https://bytelogic.me'
            className='underline hover:no-underline hover:text-[#555] transition-colors'
          >
            ByteLogic
          </a>
        </div>

        <div className='flex flex-wrap justify-center gap-6 text-sm text-[#222] font-space-grotesk'>
          <a
            href='https://github.com/0php/Zero/blob/main/LICENSE'
            target='_blank'
            className='underline hover:no-underline hover:text-[#555] transition-colors'
          >
            License
          </a>
          <Link href='#' className='underline hover:no-underline hover:text-[#555] transition-colors'>
            Term of Services
          </Link>
          <a
            href='mailto:hello@syntac.co'
            className='underline hover:no-underline hover:text-[#555] transition-colors'
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
