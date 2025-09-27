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
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
