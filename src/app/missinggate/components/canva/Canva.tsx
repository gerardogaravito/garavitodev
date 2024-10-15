import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './canva.module.scss';
import { SdCard } from '@/app/missinggate/components'
import Image from 'next/image';
import { sd_cards } from '../../constants/sd_cards';

const Canva: FC = () => {
  const [imageSrc, setImageSrc] = useState('/icons/placeholder/title_white.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc((prev) =>
        prev === '/icons/placeholder/title_white.png'
          ? '/icons/placeholder/title_red.png'
          : '/icons/placeholder/title_white.png'
      );
    }, 50); // alterna cada 0.5 segundos

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  return (
    <section
      className={styles.container}
      style={{ height: '100vh' }}
    >
      <Image
        src={imageSrc}
        width={200}
        height={100}
        alt='placeholder_text'
      />
      <div className={styles.cards}>
        {
          sd_cards.map((sd) => {
            return <SdCard key={sd.title} {...sd} />
          })
        }
      </div>
    </section>
  )
}

export default Canva