import '../globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '✶missed gǝte',
  description: '®',
  applicationName: 'gerardo garavito: web developer',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'gerardo',
    'garavito',
    'web',
    'developer',
    'software',
    'engineer',
    'garavito666',
    'react',
    'react-native',
    'typescript',
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
        <meta property='og:title' content='garavito666' />
        <meta
          property='og:description'
          content='gerardo garavito: web developer'
        />
        <meta property='og:image' content='/photos/website.png' />
        <meta property='og:url' content='URL_de_tu_página' />
        <meta property='og:type' content='website' />
        {/* TWIITER */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garavito666' />
        <meta name='twitter:title' content='garavito666' />
        <meta
          name='twitter:description'
          content='gerardo garavito: web developer'
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
