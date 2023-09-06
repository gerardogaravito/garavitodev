/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NotFoundPage: FC = () => {
  const router = useRouter();

  const imgs: string[] = [
    'gummo',
    'me',
    '2001',
    'climax',
    'dogtooth',
    'la_haine',
    'hereditary',
    'holy_mountain',
    'kevin',
    'killbill',
    'love',
    'pink_flamingos_',
    'steveo',
    'strobeck',
    'trump',
  ];

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, []);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '350px',
          height: '400px',
          objectFit: 'contain',
          position: 'relative',
        }}
      >
        <Image
          src={`/notFoundImg/${imgs[randomIntFromInterval(0, 14)]}.jpg`}
          alt={`movie:${imgs[randomIntFromInterval(0, 14)]}`}
          fill
          style={{ filter: 'grayscale(1)', objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </section>
  );
};

export default NotFoundPage;
