/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, FC } from 'react';
import Link from 'next/link';
import styles from './hero.module.scss';
import { handleMouseMove, validate420 } from './utils';

const Hero: FC = ({}) => {
  const [distance, setDistance] = useState(250);
  const divSize = 250; // Tamaño del div en píxeles

  const borderRadius = (distance / divSize) * 150;

  const d = new Date();

  const [currentTime, setCurrentTime] = useState([
    d.getHours().toString().padStart(2, '0'),
    d.getMinutes().toString().padStart(2, '0'),
    d.getSeconds().toString().padStart(2, '0'),
  ]);

  React.useLayoutEffect(() => {
    const dateHours = d.getHours().toString().padStart(2, '0');
    const dateMinutes = d.getMinutes().toString().padStart(2, '0');
    const dateSeconds = d.getSeconds().toString().padStart(2, '0');

    const timer = setInterval(() => {
      setCurrentTime([dateHours, dateMinutes, dateSeconds]);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  return (
    <section
      className={styles.container}
      onMouseMove={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleMouseMove(event, setDistance)
      }
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <div
            className={styles.square}
            style={{
              height: divSize,
              minHeight: divSize,
              borderRadius: distance > 50 ? `${borderRadius}%` : '0%',
            }}
          />
          <Link
            href='https://www.instagram.com/garavito666/'
            target='_blank'
            className={styles.at}
          >
            @garavito666
          </Link>
        </div>
        <div className={styles.texts}>
          <p className={styles.title}>Gerardo Garavito</p>
          <div>
            <p className={styles.engineer}>software engineer</p>
            <p className={styles.mexico}>
              / M<span className={styles.letter_e}>E</span>XICO
            </p>
          </div>
        </div>
      </div>
      <p
        className={styles.clock}
        style={{ color: validate420(currentTime) ? '#2ef514' : '#fff' }}
      >
        イマ
        <span className={styles.clock__numbers}>
          ＠{currentTime[0]}
          <span className={styles.clock__divider}>:</span>
          {currentTime[1]}
          <span className={styles.clock__divider}>:</span>
          {currentTime[2]}
        </span>
      </p>
    </section>
  );
};

export default Hero;
