'use client';
import styles from './page.module.scss';
// components
// import { ShowOff } from './components';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./components/hero/Hero'), { ssr: false });
const ShowOff = dynamic(() => import('./components/showOff/ShowOff'), {
  ssr: false,
});

function Home() {
  // console.log(serverTime);

  return (
    <main className={styles.main}>
      <Hero />
      <ShowOff />
    </main>
  );
}

export default Home;
