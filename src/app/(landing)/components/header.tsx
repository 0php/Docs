'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (!isNavOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isNavOpen]);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'CLI Tools', href: '/#cli' },
    { name: 'Architecture', href: '/#architecture' },
    { name: 'Installation', href: '/installation' },
    { name: 'Documentation', href: '/docs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* Brand Logo */}
        <Link
          href='/'
          className='flex flex-col transition-opacity hover:opacity-90'
        >
          <div className='text-lg font-bold font-space-grotesk tracking-tight text-neutral-900 dark:text-white flex items-center gap-1 leading-none'>
            Zero<span className='text-blue-600 dark:text-blue-500'>PHP</span>
          </div>
          <span className='text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-medium mt-1'>
            Zero Dependencies
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className='hidden lg:flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-900/80 p-1 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-space-grotesk transition-all duration-150 ${
                  isActive
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className='hidden lg:flex items-center gap-2.5'>
          <a
            href='https://github.com/0php/Zero'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold font-space-grotesk text-neutral-700 dark:text-neutral-300 bg-neutral-100 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 transition-colors'
          >
            <GithubIcon className='size-3.5' />
            <span>GitHub</span>
          </a>

          <Link
            href='/installation'
            className='inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold font-space-grotesk bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-colors shadow-xs'
          >
            <span>Get Started</span>
            <ArrowRight className='size-3.5' />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type='button'
          onClick={() => setIsNavOpen((prev) => !prev)}
          className='lg:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 focus:outline-none transition-colors'
          aria-expanded={isNavOpen}
          aria-controls='mobile-nav'
          aria-label='Toggle navigation'
        >
          {isNavOpen ? <X className='size-5' /> : <Menu className='size-5' />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isNavOpen && (
        <div
          id='mobile-nav'
          className='lg:hidden fixed inset-0 top-[60px] z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 border-t border-neutral-200 dark:border-neutral-800'
        >
          <div className='flex flex-col gap-2'>
            <span className='text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2'>
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className='flex items-center justify-between p-3 rounded-xl text-base font-semibold font-space-grotesk text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors'
              >
                <span>{link.name}</span>
                <ArrowRight className='size-4 text-neutral-400' />
              </Link>
            ))}
          </div>

          <div className='pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3'>
            <Link
              href='/installation'
              onClick={() => setIsNavOpen(false)}
              className='w-full py-3.5 px-4 rounded-xl text-center font-bold text-sm font-space-grotesk bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center gap-2 shadow-md'
            >
              <Terminal className='size-4' />
              <span>Install ZeroPHP</span>
            </Link>
            <a
              href='https://github.com/0php/Zero'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full py-3 px-4 rounded-xl text-center font-semibold text-sm font-space-grotesk bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center gap-2'
            >
              <GithubIcon className='size-4' />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
