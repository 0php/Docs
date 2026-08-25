import Link from 'next/link';
import { Heart, Sparkles, Terminal, BookOpen, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer className='border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/30 dark:bg-neutral-950/30 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-200/60 dark:border-neutral-800/60'>
          {/* Brand & Description (2 cols on large screen) */}
          <div className='lg:col-span-2 space-y-4'>
            <Link href='/' className='inline-block'>
              <div className='text-xl font-bold font-space-grotesk tracking-tight text-neutral-900 dark:text-white'>
                Zero<span className='text-red-600 dark:text-red-500'>PHP</span>
              </div>
            </Link>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-sm leading-relaxed'>
              The lightweight, high-performance PHP framework built from the ground up with zero external dependencies. Build resilient, long-lasting apps.
            </p>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800'>
              <span className='size-1.5 rounded-full bg-red-500'></span>
              <span>100% Standalone • PHP 8.2+</span>
            </div>
          </div>

          {/* Column 1: Core Framework */}
          <div className='space-y-3'>
            <h4 className='text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100'>
              Framework
            </h4>
            <ul className='space-y-2 text-sm font-sans'>
              <li>
                <Link
                  href='/#features'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Features Overview
                </Link>
              </li>
              <li>
                <Link
                  href='/#cli'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Zero CLI Toolbelt
                </Link>
              </li>
              <li>
                <Link
                  href='/docs/dbml'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  DBML ORM
                </Link>
              </li>
              <li>
                <Link
                  href='/docs/router'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Routing Engine
                </Link>
              </li>
              <li>
                <Link
                  href='/docs/migrations'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Database Migrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Documentation */}
          <div className='space-y-3'>
            <h4 className='text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100'>
              Documentation
            </h4>
            <ul className='space-y-2 text-sm font-sans'>
              <li>
                <Link
                  href='/installation'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  href='/docs'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href='/docs/controllers'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Controllers & Views
                </Link>
              </li>
              <li>
                <Link
                  href='/docs/auth'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  Authentication & Guards
                </Link>
              </li>
              <li>
                <Link
                  href='/docs/mail'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  SMTP & Mailer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Creators */}
          <div className='space-y-3'>
            <h4 className='text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100'>
              Community & Creators
            </h4>
            <ul className='space-y-2 text-sm font-sans'>
              <li>
                <a
                  href='https://github.com/0php/Zero'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight className='size-3.5 opacity-60' />
                </a>
              </li>
              <li>
                <a
                  href='https://syntac.co'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  <span>Syntac</span>
                  <ArrowUpRight className='size-3.5 opacity-60' />
                </a>
              </li>
              <li>
                <a
                  href='https://bytelogic.me'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  <span>ByteLogic</span>
                  <ArrowUpRight className='size-3.5 opacity-60' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/0php/Zero/blob/main/LICENSE'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors'
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500 dark:text-neutral-400'>
          <div className='flex items-center gap-2'>
            <span>© {new Date().getFullYear()} ZeroPHP. All rights reserved.</span>
            <span>•</span>
            <span>
              Built with precision by{' '}
              <a
                href='https://syntac.co'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-neutral-800 dark:text-neutral-200 hover:underline'
              >
                Syntac
              </a>{' '}
              &amp;{' '}
              <a
                href='https://bytelogic.me'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-neutral-800 dark:text-neutral-200 hover:underline'
              >
                ByteLogic
              </a>
            </span>
          </div>

          <div className='flex items-center gap-4 font-mono text-[11px]'>
            <span className='text-neutral-400'>Open Source</span>
            <span>•</span>
            <a
              href='mailto:hello@syntac.co'
              className='hover:text-neutral-900 dark:hover:text-white transition-colors'
            >
              hello@syntac.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
