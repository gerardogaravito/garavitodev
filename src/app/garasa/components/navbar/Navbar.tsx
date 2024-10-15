import React, { FC } from 'react';
import styles from './navbar.module.scss'

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

  return (
    <section className={styles.navbar}>
      <p className={styles.navbar__text}>
        garasa Navbar
      </p>
    </section>
  )
}

export default Navbar