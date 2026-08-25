import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className='flex flex-col min-h-screen overflow-x-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-red-500/20 selection:text-red-700 dark:selection:text-red-300'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

