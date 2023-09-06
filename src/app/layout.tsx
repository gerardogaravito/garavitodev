import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'garavito666',
  description: 'gerardo garavito web',
};

const PP_Mori = localFont({
  src: [
    {
      path: '../../public/fonts/PPMori-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-ExtralightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPMori-SemiBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-SemiBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--ppmori',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={PP_Mori.className}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
