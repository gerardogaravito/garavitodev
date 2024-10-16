import React, { FC } from 'react';
import styles from './hero.module.scss'
import { Navbar } from '@/app/garasa/components'

interface HeroProps { }

const Hero: FC<HeroProps> = () => {

  return (
    <section className={styles.section}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.hero__top} />
        <div className={styles.hero__bottom}>
          <p className={styles.hero__bottom__subtitle}>asesoría</p>
          <h1 className={styles.hero__bottom__title}>ADMINISTRATIVA</h1>
          <h1 className={styles.hero__bottom__title}>CONTABLE</h1>
          <h1 className={styles.hero__bottom__title}>Y FISCAL</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero