import '../globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GARASA Consultores',
  description: 'Consultores y Asesores GARASA, S. de R.L. de C.V.',
  applicationName: 'GARASA',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'garasa',
    'consultores',
    'impuestos',
    'contabilidad',
    'fiscal',
    'declaración',
    'adminsitración',
    'empresa',
  ],
  authors: [{ name: 'garavito666' }],
  colorScheme: 'dark',
  creator: 'Gerardo Garavito',
  publisher: 'Gerardo Garavito',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta property='og:title' content='garasa' />
        <meta
          property='og:description'
          content='Consultores y Asesores GARASA, S. de R.L. de C.V.'
        />
        <meta property='og:image' content='/photos/website.png' />
        <meta property='og:url' content='URL_de_tu_página' />
        <meta property='og:type' content='website' />
        {/* TWIITER */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garasa' />
        <meta name='twitter:title' content='garasa' />
        <meta
          name='twitter:description'
          content='Consultores y Asesores GARASA, S. de R.L. de C.V.'
        />
        <meta name='twitter:image' content='/photos/website.png' />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
