import React, { FC } from 'react';
import styles from './navbar.module.scss'
import GarasaLogo from '@/app/garasa/assets/svg/garasa_logo.svg'

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

  return (
    <section className={styles.navbar}>
      <div className={styles.navbar__left}>
        <GarasaLogo className={styles.navbar__left__svg} />
        <p className={styles.navbar__left__text}>
          GARASA
        </p>
      </div>
      <div className={styles.navbar__right}>
        <nav>
          <ul className={styles.navbar__links}>
            <li><a href="#servicio">servicio</a></li>
            <li><a href="#contacto">contacto</a></li>
            <li><a href="#quienes-somos">¿quiénes somos?</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Navbar