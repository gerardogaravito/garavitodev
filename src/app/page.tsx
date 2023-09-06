/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./components/hero/Hero'), { ssr: false });
const ShowOff = dynamic(() => import('./components/showOff/ShowOff'), {
  ssr: false,
});
const Photos = dynamic(() => import('./components/photos/Photos'), {
  ssr: false,
});
const Email = dynamic(() => import('./components/contact/Email'), {
  ssr: false,
});

function Home() {
  const [heroRendered, setHeroRendered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // router.push('/');
    setHeroRendered(true);
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      {heroRendered && (
        <>
          <ShowOff />
          <Photos />
          <Email />
        </>
      )}
    </main>
  );
}

export default Home;
