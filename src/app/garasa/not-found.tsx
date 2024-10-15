/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NotFoundPage: FC = () => {
  const router = useRouter();
  const [indexValue, setIndexValue] = useState<number>(0);
  const [indexLoaded, setIndexLoaded] = useState<boolean>(false);

  const imgs: string[] = [
    'steveo',
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
    'strobeck',
    'trump',
  ];

  useEffect(() => {
    const randomIntFromInterval = () => {
      return Math.floor(Math.random() * imgs.length);
    };

    const asignImg = async () => {
      const indexValue = randomIntFromInterval();
      setIndexValue(indexValue);

      await Promise.resolve();

      setIndexLoaded(true);

      const timeout = setTimeout(() => {
        router.push('/');
      }, 2000);

      return () => clearTimeout(timeout);
    };

    asignImg();
  }, []);

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
        {indexLoaded && (
          <Image
            src={`/notFoundImg/${imgs[indexValue]}.jpg`}
            alt={`movie:${imgs[indexValue ?? 0]}`}
            fill
            style={{ filter: 'grayscale(1)', objectFit: 'cover' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        )}
      </div>
    </section>
  );
};

export default NotFoundPage;
