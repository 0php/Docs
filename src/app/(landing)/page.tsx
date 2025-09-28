'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
            'Invoke-WebRequest -Uri "https://github.com/0php/Zero/archive/refs/heads/main.zip" -OutFile "main.zip";',
            'Expand-Archive -Path "main.zip" -DestinationPath "." -Force;',
            'Remove-Item "main.zip";',
            'Rename-Item "Zero-main" "my-project";',
            'Set-Location "my-project";',
            'Remove-Item -Recurse -Force docs, todo.md, readme.md; ',
            'Copy-Item ".env.example" ".env";',
            'php zero key:generate',
          ]
        : [
            'curl -L -o main.zip https://github.com/0php/Zero/archive/refs/heads/main.zip \\',
            '&& unzip -q main.zip \\',
            '&& rm main.zip \\',
            '&& mv Zero-main my-project \\',
            '&& cd my-project \\',
            '&& rm -rf docs todo.md readme.md .git \\',
            '&& cp .env.example .env \\',
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

  return (
    <>
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
                  <div className='text-white font-bold text-pretty'>
                    <p className='break-all leading-loose'>
                      {commandOutputs[selectedCommand].map((line, idx, arr) => (
                        <>
                          {idx === 0 && (
                            <span className='text-[#5972E5] font-bold'>
                              {prompt}
                            </span>
                          )}
                          {line}
                          {idx !== arr.length - 1 && <br />}
                        </>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
