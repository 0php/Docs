'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsNavOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setIsNavOpen(false);
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isNavOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isNavOpen]);

  return (
    <header className='w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md'>
      <div className='flex justify-between items-center px-4 py-6 w-full max-w-[1224px] mx-auto relative'>
        <div className='text-white relative text-2xl font-medium font-space-grotesk'>
          <Link href="/">
            ZeroPHP
          </Link>
        </div>
        <nav className='hidden lg:flex items-center gap-6'>
          <Link
            href='/#features'
            className='text-white text font-space-grotesk underline hover:text-zerophp-purple transition-colors'
          >
            Features
          </Link>
          <Link
            href='/installation'
            className='text-white text font-space-grotesk underline hover:text-zerophp-purple transition-colors'
          >
            Installation
          </Link>
          <Link
            href='/docs'
            className='text-white text font-space-grotesk underline hover:text-zerophp-purple transition-colors'
          >
            Documentations
          </Link>
          <a
            href='https://github.com/0php/Zero/'
            target='_blank'
            className='text-white hover:text-zerophp-purple transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-github w-6 h-6'
              aria-hidden='true'
            >
              <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
              <path d='M9 18c-4.51 2-5-2-7-2' />
            </svg>
          </a>
        </nav>
        <button
          type='button'
          onClick={() => setIsNavOpen((prev) => !prev)}
          className='lg:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5972E5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E0E] rounded-md p-1'
          aria-expanded={isNavOpen}
          aria-controls='mobile-nav'
          aria-label='Toggle navigation'
        >
          {isNavOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>

        {isNavOpen && (
          <nav
            id='mobile-nav'
            className='lg:hidden fixed inset-0 z-50 flex flex-col gap-6 px-6 pt-16 pb-12 w-screen h-screen bg-[#0E0E0E] text-white font-space-grotesk text-lg overflow-y-auto'
          >
            <div className='flex justify-end mb-6'>
              <button
                type='button'
                onClick={() => setIsNavOpen(false)}
                className='p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5972E5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E0E]'
                aria-label='Close navigation'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Link
              href='/#features'
              className='underline underline-offset-2'
              onClick={() => setIsNavOpen(false)}
            >
              Features
            </Link>
            <Link
              href='/installation'
              className='underline underline-offset-2'
              onClick={() => setIsNavOpen(false)}
            >
              Installations
            </Link>
            <Link
              href='/docs'
              className='underline underline-offset-2'
              onClick={() => setIsNavOpen(false)}
            >
              Documentations
            </Link>
            <Link
              href='https://github.com/0php/Zero/'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 underline underline-offset-2'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                <path d='M9 18c-4.51 2-5-2-7-2' />
              </svg>
              GitHub
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
