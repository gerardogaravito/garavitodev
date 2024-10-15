/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import styles from './page.module.scss';

import { Canva } from './components';

function Home() {

  return (
    <main className={styles.main}>
      <Canva />
      {/* <p className={styles['test-main']}>
        placeholder PLACEHOLDER
      </p> */}
    </main>
  );
}

export default Home;
