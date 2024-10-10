/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import styles from './page.module.scss';

function Home() {

  return (
    <main className={styles.main}>
      PLACEHOLDER placeholder
      <p className={styles['test-main']}>
        placeholder PLACEHOLDER
      </p>
    </main>
  );
}

export default Home;
