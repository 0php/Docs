import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';
import './page.css';

export const metadata: Metadata = {
  title: 'ZeroPHP — Zero Dependencies PHP Framework & Zero CLI',
  description:
    'ZeroPHP is a high-performance, dependency-free PHP framework with Zero CLI, DBML ORM, routing, migrations, and template engine built-in.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 relative selection:bg-red-500/20 selection:text-red-700 dark:selection:text-red-300'>
      {/* Subtle modern structural grid background */}
      <div className='pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_90%)]' />

      <div className='relative z-10 flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
