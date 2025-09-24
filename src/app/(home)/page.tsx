import Link from 'next/link';
import './page.css';
import { Fragment } from 'react';

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

const installationSteps = [
  'Create Model',
  'Create Migration',
  'Create Seeder',
  'Create Controller',
  'Create Helper',
  'Update ZeroPHP',
];

const linuxInstallation = `&& unzip -q main.zip \

&& rm main.zip \

&& mv Zero-main my-project \

&& cd my-project \

&& rm -rf docs todo.md readme.md .git \

&& php zero key:generate`;

export default function HomePage() {
  return (
    <main className='bg-[#0E0E0E]'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#AD90FF] opacity-50 blur-[10vw] rotate-[105deg] top-[15vh] left-[15vw]' />
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#AD90FF] opacity-50 blur-[10vw] rotate-[105deg] top-[90vh] right-[12vw]' />
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#AD90FF] opacity-50 blur-[10vw] rotate-[105deg] top-[155vh] left-[12vw]' />
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[92deg] top-[95vh] left-[35vw]' />
        <div className='absolute w-[50vw] h-[45vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[38deg] top-[10vh] right-[15vw]' />
        <div className='absolute w-[22vw] h-[36vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[38deg] top-[34vh] left-[55vw]' />
        <div className='absolute w-[36vw] h-[36vh] rounded-full bg-[#0554CB] opacity-50 blur-[10vw] rotate-[38deg] bottom-[34vh] right-[25vw]' />
      </div>

      <div className='min-h-screen relative overflow-hidden z-20'>
        {/* Header */}

        <header className='flex justify-between items-center px-6 lg:px-[108px] py-8'>
          <div className='text-white relative text-2xl font-medium font-space-grotesk'>
            ZeroPHP
          </div>
          <nav className='hidden lg:flex items-center gap-6'>
            <a
              href='#'
              className='text-white text-lg font-space-grotesk underline hover:text-zerophp-purple transition-colors'
            >
              Features
            </a>
            <a
              href='#'
              className='text-white text-lg font-space-grotesk underline hover:text-zerophp-purple transition-colors'
            >
              Installation
            </a>
            <a
              href='#'
              className='text-white text-lg font-space-grotesk underline hover:text-zerophp-purple transition-colors'
            >
              Documentation
            </a>
            <a
              href='#'
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
          <button className='lg:hidden text-white'>
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
          </button>
        </header>
        {/* Hero Section */}
        <section className='px-6 lg:px-[155px] py-16 lg:py-24 text-center'>
          <div className='max-w-[1131px] mx-auto'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6 leading-tight'>
              <span className='text-white'>ZeroPHP is</span>
              <br />
              <span className='bg-[linear-gradient(94deg,#0554CB_16.78%,#AD90FF_53.33%)] bg-clip-text text-transparent'>
                Dependency-Free Framework
              </span>
            </h1>
            <p className='text-white text-xl lg:text-2xl font-space-grotesk max-w-[1131px] mx-auto mb-12 leading-relaxed'>
              It's designed to be simple — no need to install or maintain
              third-party packages. With ZeroPHP, your applications stay lean,
              independent, no packages, no bloat.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12'>
              <div className='relative'>
                <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[190px] h-[42px] bg-blue/40 blur-[32px] rounded-full' />
                <button className='inline-flex text-black items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-white text-zerophp-dark font-space-grotesk px-6 py-2 rounded-[14px] hover:bg-white/90 relative z-10'>
                  Installation Guides
                </button>
              </div>
              <a
                href='#'
                className='text-white font-space-grotesk underline hover:text-zerophp-purple transition-colors'
              >
                Read Documentation
              </a>
            </div>
          </div>
        </section>
        {/* ... previous sections ... */}
        {/* Features Section */}
        <section className='px-6 lg:px-[108px] py-16 lg:py-24'>
          <div className='max-w-[1224px] mx-auto'>
            <h2 className='text-center text-3xl lg:text-4xl font-bold font-space-grotesk bg-[linear-gradient(94deg,#0554CB_16.78%,#AD90FF_53.33%)] bg-clip-text text-transparent mb-12'>
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
        {/* Installation Section */}
        <section className='px-6 lg:px-[108px] py-16 lg:py-24'>
          <div className='flex flex-col lg:flex-row gap-12 max-w-[1224px] mx-auto'>
            <div className='lg:w-[264px]'>
              <div className='space-y-4'>
                <h3 className='text-2xl font-bold font-space-grotesk bg-[linear-gradient(94deg,#0554CB_16.78%,#AD90FF_53.33%)] bg-clip-text text-transparent'>
                  Install ZeroPHP
                </h3>
                <div className='space-y-3 text-white font-space-grotesk text-xl lg:text-2xl font-bold'>
                  {installationSteps.map((step, index) => (
                    <div key={index}>{step}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex-1 rounded-[20px] border border-[#2D2D4C] bg-[linear-gradient(120deg,rgba(22,27,38,0.10)_2.43%,rgba(14,14,14,0.20)_99.14%)]'>
              <div className='glass-card rounded-[20px] p-8 lg:max-w-[832px]'>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>

                <div className='space-y-1 font-space-grotesk text-base'>
                  <div>
                    <span className='text-[#5972E5] font-bold'>
                      syntac@zero ~ %{' '}
                    </span>
                    <span className='text-white font-bold'>
                      curl -L -o main.zip
                      https://github.com/0php/Zero/archive/refs/heads/main.zip
                    </span>
                    <span className='text-white font-bold'>
                      <pre className='leading-relaxed'>{linuxInstallation}</pre>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer className='px-6 lg:px-[108px] py-8'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1224px] mx-auto'>
            <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-2 text-white font-space-grotesk text-lg font-bold'>
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
                BeteLogic
              </a>
            </div>

            <div className='flex flex-wrap justify-center gap-6 text-sm text-white font-space-grotesk'>
              <Link href='#' className='hover:text-[#5972E5] transition-colors'>
                License
              </Link>
              <Link href='#' className='hover:text-[#5972E5] transition-colors'>
                Term of Services
              </Link>
              <Link href='#' className='hover:text-[#5972E5] transition-colors'>
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
