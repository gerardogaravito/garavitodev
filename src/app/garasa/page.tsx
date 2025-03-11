/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import styles from './page.module.scss';

import { Hero, Services } from '@/app/garasa/components'

function Home() {

  return (
    <main className={styles.main}>
      <Hero />
      <Services />
    </main>
  );
}

export default Home;
