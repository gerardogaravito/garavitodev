import '../globals.scss';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://noise.garavito.dev'),
  title: 'Gerardo Garavito — audio y dibujo',
  description: 'audio y dibujo',
  authors: [{ name: 'Gerardo Garavito' }],
  colorScheme: 'dark',
  creator: 'Gerardo Garavito',
  openGraph: {
    title: 'Gerardo Garavito',
    description: 'audio y dibujo',
    url: 'https://noise.garavito.dev',
    images: ['/noise/garavito_sonora_noise_01.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
