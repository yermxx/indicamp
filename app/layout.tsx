import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import Footer from '@/components/ui/footer';
import Navigation from '@/components/ui/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <header className='fixed w-full z-50'>
          <Navigation />
        </header>
        <main className='pt-20 containerx'>
          <SessionProvider>{children}</SessionProvider>
        </main>
        <footer className='bottom-0 w-full'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
