import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';
import './page.css';

export const metadata: Metadata = {
  title: 'ZeroPHP — Zero Dependencies PHP Framework & Zero CLI',
  description:
    'ZeroPHP is a dependency-free PHP framework with Zero CLI, DBML, routing, migrations, and more.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-white'>
      <div className='min-h-screen relative overflow-hidden z-20'>
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
