import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(landing)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className='font-bold text-base tracking-tight font-space-grotesk text-neutral-900 dark:text-white'>
          Zero<span className='text-red-600 dark:text-red-500'>PHP</span>
        </span>
      ),
    },
    links: [
      {
        text: 'Home',
        url: '/',
        active: 'nested-url',
      },
      {
        text: 'Installation',
        url: '/installation',
        active: 'nested-url',
      },
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
    githubUrl: 'https://github.com/0php/Zero',
  };
}

