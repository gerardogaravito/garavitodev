import React, { FC } from 'react';
import styles from './hero.module.scss'
import { Navbar } from '@/app/garasa/components'

interface HeroProps { }

const Hero: FC<HeroProps> = () => {

  return (
    <section className={styles.section}>
      <Navbar />
    </section>
  )
}

export default Hero