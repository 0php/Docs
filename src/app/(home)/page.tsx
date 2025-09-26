'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './page.css';

const useOS = () => {
  const [os, setOs] = useState<'mac' | 'windows' | 'linux'>('linux');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) {
      setOs('mac');
    } else if (userAgent.includes('win')) {
      setOs('windows');
    } else {
      setOs('linux');
    }
  }, []);

  return os;
};

const features = [
  {
    title: 'Dependency-Free',
    description:
      'ZeroPHP is a PHP framework with zero external dependencies. ZeroPHP keeps your applications lean, independent, no packages, no bloat.',
  },
  {
    title: 'Zero CLI',
    description:
      'Zero CLI is the command-line interface included with ZeroPHP. It provides a set of helpful commands to assist you while building your application.',
  },
  {
    title: 'DBML',
    description:
      'Writing raw SQL queries can be painful. We built DBML to help you interact with your database without the hassle. It supports MySQL, PostgreSQL, and SQLite.',
  },
  {
    title: 'Routing',
    description:
      'Our routing system is simple, well-structured, and easy to maintain. It helps keep your apps long-lasting, free from dependencies, and effortless to manage.',
  },
  {
    title: 'Database Migration',
    description:
      'DB Migration makes it easy to version and manage your database schema. It provides simple commands to create, modify, and roll back tables, ensuring your database stays consistent across all environments.',
  },
  {
    title: 'Middleware',
    description:
      "Middleware allows you to filter and process HTTP requests before they reach your application. It's a simple way to handle tasks like authentication, logging, or modifying requests and responses.",
  },
  {
    title: 'SMTP',
    description:
      'SMTP and Mail make sending emails from your application simple. ZeroPHP provides a clean API to send messages through any SMTP server, with support for plain text, HTML, and attachments, no external bloat.',
  },
  {
    title: 'Template System',
    description:
      'The Templating System helps you separate logic from presentation, making your views clean and easy to manage. It supports layouts, partials, and simple syntax to build dynamic pages with minimal effort.',
  },
];

const commands = [
  'Create Project',
  'Create Model',
  'Create Migration',
  'Create Seeder',
  'Create Controller',
  'Create Helper',
  'Update ZeroPHP',
];

export default function HomePage() {
  const os = useOS();
  const [selectedCommand, setSelectedCommand] = useState<string>(commands[0]);

  const commandOutputs: Record<string, string[]> = {
    'Create Project':
      os === 'windows'
        ? [
            'Invoke-WebRequest -Uri "https://github.com/0php/Zero/archive/refs/heads/main.zip" -OutFile "main.zip"; `',
            'Expand-Archive -Path "main.zip" -DestinationPath "." -Force; `',
            'Remove-Item "main.zip"; `',
            'Rename-Item "Zero-main" "my-project"; `',
            'Set-Location "my-project"; `',
            'Remove-Item -Recurse -Force docs, todo.md, readme.md; `',
            'php zero key:generate',
          ]
        : [
            'curl -L -o main.zip https://github.com/0php/Zero/archive/refs/heads/main.zip',
            '&& unzip -q main.zip \\',
            '&& rm main.zip \\',
            '&& mv Zero-main my-project \\',
            '&& cd my-project \\',
            '&& rm -rf docs todo.md readme.md .git \\',
            '&& php zero key:generate',
          ],
    'Create Model': ['php zero make:model User'],
    'Create Migration': ['php zero make:migration create_users_table'],
    'Create Seeder': ['php zero make:seeder UsersSeeder'],
    'Create Controller': ['php zero make:controller UserController'],
    'Create Helper': ['php zero make:helper HelperName'],
    'Update ZeroPHP': ['php updater'],
  };

  const isCreateProject = selectedCommand === 'Create Project';
  const prompt =
    os === 'windows'
      ? isCreateProject
        ? 'PS C:\\Users\\Zero\\> '
        : 'PS C:\\Users\\Zero\\my-project> '
      : isCreateProject
      ? 'zero@php ~ % '
      : 'zero@php ~ my-project % ';

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
    <main className='bg-[#0E0E0E]'>
      <div className='md:absolute fixed inset-0 w-screen h-full md:overflow-x-visible overflow-x-hidden'>
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#AD90FF] opacity-50 blur-[10vw] rotate-[105deg] top-[15vh] left-[15vw] pulse-1' />
        <div className='absolute w-[36vw] h-[36vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[38deg] bottom-[34vh] right-[25vw] pulse-2' />
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#AD90FF] opacity-50 blur-[10vw] rotate-[105deg] top-[110vh] right-[12vw] pulse-3' />
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#AD90FF] opacity-50 blur-[10vw] rotate-[105deg] top-[180vh] right-[12vw] pulse-4' />
        <div className='absolute w-[60vw] h-[40vh] rounded-full bg-[#0554CB] opacity-50 blur-[15vw] top-[80vh] right-[35vw] pulse-2' />
        <div className='absolute w-[40vw] h-[40vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[38deg] top-[140vh] left-[10vw] pulse-3' />
        <div className='absolute w-[35vw] h-[36vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[38deg] top-[34vh] left-[55vw] pulse-4' />
      </div>

      <div className='min-h-screen relative overflow-hidden z-20'>
        {/* Header */}

        <header className='w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md'>
          <div className='flex justify-between items-center px-4 py-6 w-full max-w-[1224px] mx-auto relative'>
            <div className='text-white relative text-2xl font-medium font-space-grotesk'>
              ZeroPHP
            </div>
            <nav className='hidden lg:flex items-center gap-6'>
              <a
                href='#features'
                className='text-white text font-space-grotesk underline hover:text-zerophp-purple transition-colors'
              >
                Features
              </a>
              <a
                href='#installation'
                className='text-white text font-space-grotesk underline hover:text-zerophp-purple transition-colors'
              >
                Installations
              </a>
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
                <a
                  href='#features'
                  className='underline underline-offset-2'
                  onClick={() => setIsNavOpen(false)}
                >
                  Features
                </a>
                <a
                  href='#installation'
                  className='underline underline-offset-2'
                  onClick={() => setIsNavOpen(false)}
                >
                  Installations
                </a>
                <Link
                  href='/docs'
                  className='underline underline-offset-2'
                  onClick={() => setIsNavOpen(false)}
                >
                  Documentations
                </Link>
                <a
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
                </a>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className='px-6 lg:px-[155px] pb-40 pt-50 lg:py-[25vh] text-center'>
          <div className='max-w-[1131px] mx-auto'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6 leading-tight'>
              <span className='text-white'>ZeroPHP is</span>
              <br />
              <span className='text-styled'>Dependency-Free Framework</span>
            </h1>
            <p className='text-white text-xl lg:text-2xl font-space-grotesk max-w-[1131px] mx-auto mb-12 leading-relaxed'>
              It's designed to be simple — no need to install or maintain
              third-party packages. With ZeroPHP, your applications stay lean,
              independent, no packages, no bloat.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12'>
              <div className='relative'>
                <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[190px] h-[42px] bg-blue/40 blur-[32px] rounded-full' />
                <a
                  href='#installation'
                  className='inline-flex text-black items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-white text-zerophp-dark font-space-grotesk px-6 py-2 rounded-[14px] hover:bg-white/90 relative z-10'
                >
                  Installation Guides
                </a>
              </div>
              <Link
                href='/docs'
                className='text-white font-space-grotesk underline hover:text-zerophp-purple transition-colors'
              >
                Read Documentations
              </Link>
            </div>
          </div>
        </section>
        {/* ... previous sections ... */}
        {/* Features Section */}
        <section id='features' className='px-6 lg:px-[108px] py-16 lg:py-24'>
          <div className='max-w-[1224px] mx-auto'>
            <h2 className='text-center text-3xl lg:text-4xl font-bold font-space-grotesk text-styled mb-12'>
              Zero Dependencies, Rich Features
            </h2>

            {/* First row of features */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='rounded-[20px] p-4 space-y-1 border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)]'
                >
                  <h3 className='text-white font-space-grotesk text-xl lg:text-[22px] font-bold'>
                    {feature.title}
                  </h3>
                  <p className='text-white font-plus-jakarta text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Zero CLI Section */}
        <section
          id='installation'
          className='px-4 py-16 lg:py-24 max-w-[1224px] mx-auto'
        >
          <h2 className='text-center text-3xl lg:text-4xl font-bold font-space-grotesk mb-12'>
            <span className='text-styled'>Zero CLI</span>
          </h2>
          <div className='flex flex-col lg:flex-row md:gap-12 gap-6 mx-auto'>
            <div className='lg:w-[20%]'>
              <div className='flex flex-row lg:flex-col md:gap-3 gap-5 flex-nowrap overflow-y-auto pb-2'>
                {commands.map((cmd) => (
                  <button
                    key={cmd}
                    type='button'
                    onClick={() => setSelectedCommand(cmd)}
                    className={`text-left cursor-pointer whitespace-nowrap md:text-2xl text-xl font-bold font-space-grotesk transition-colors ${
                      selectedCommand === cmd
                        ? 'text-styled'
                        : 'text-white hover:text-styled'
                    }`}
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            <div className='flex-1 rounded-[20px] border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)]'>
              <div className='rounded-[20px] md:p-8 p-6'>
                <div className='flex w-full justify-between items-center mb-3'>
                  <div className='font-bold text-xl text-white capitalize'>
                    {os}
                  </div>
                  {os === 'windows' ? (
                    <div className='flex items-center gap-3 mb-5'>
                      <span className='w-6 h-6 text-[11px] text-white border border-[#2D2D4C] flex items-center justify-center'>
                        &#9587;
                      </span>
                      <span className='w-6 h-6 text-[12px] border text-white border-[#2D2D4C] flex items-center justify-center'>
                        &#10064;
                      </span>
                      <span className='w-6 h-6 text-[11px] border text-white border-[#2D2D4C] flex items-center justify-center'>
                        &#8212;
                      </span>
                    </div>
                  ) : (
                    <div className='flex items-center gap-3 mb-5'>
                      <div className='w-3 h-3 rounded-full bg-red-500'></div>
                      <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                      <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    </div>
                  )}
                </div>

                <div className='space-y-1 font-space-grotesk text-base'>
                  <div>
                    <div className='text-white font-bold flex flex-col gap-2 text-pretty'>
                      {commandOutputs[selectedCommand].map((line, idx) => (
                        <p key={idx} className='break-all'>
                          {idx === 0 && (
                            <span className='text-[#5972E5] font-bold'>
                              {prompt}
                            </span>
                          )}
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
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
      </div>
    </main>
  );
}
