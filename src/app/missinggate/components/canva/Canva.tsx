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
      <div className={styles.bandcamp}>
        {/* <iframe
          scrolling="no"
          allowTransparency={true}
          style={{
            border: 0,
            width: '100%',
            height: '50px',
            backgroundColor: 'transparent'
          }}
          src="https://bandcamp.com/band_follow_button_deluxe/2678843765">
        </iframe> */}
        {/* <iframe
          scrolling="no"
          style={{ border: 0, width: '100%', height: '33px' }}
          src="https://bandcamp.com/band_follow_button_classic/2678843765">
        </iframe> */}
      </div>
    </section >
  )
}

export default Canva