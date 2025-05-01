import React, { FC, useEffect, useState } from 'react'
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
    >
      <Image
        src={imageSrc}
        width={200}
        height={100}
        alt='placeholder_text'
      />
      <div className={styles.portada}>
        <Image
          src="/photos/missinggate/portada_78741TX.jpg"
          width={800}
          height={500}
          alt="Portada 78741 TX"
          className={styles.portadaImage}
        />
      </div>

      <div className={styles.links}>
        <h3 className={styles.links__title}>78741, tx @</h3>
        <div className={styles.links__container}>
          <a className={styles.links__item} href="" target="_blank" rel="noopener noreferrer">
            apple music
          </a>
          <a className={styles.links__item} href="" target="_blank" rel="noopener noreferrer">
            spotify
          </a>
          <a className={styles.links__item} href="" target="_blank" rel="noopener noreferrer">
            youtube
          </a>
        </div>
      </div>

      {/* <div className={styles.cards}>
        {
          sd_cards.map((sd) => {
            return <SdCard key={sd.title} {...sd} />
          })
        }
      </div> */}

      <div className={styles.bandcamp}>
        <a
          href="https://missinggate.bandcamp.com/follow_me"
          target="_blank"
          className={styles.bandcamp__button}
        >
          <svg width="16" height="12" viewBox="0 0 30 15" className={styles.bandcamp__icon}>
            <polygon fill="#FFFFFF" points="0 15 8.5 0 26.5 0 18 15"></polygon>
          </svg>
          <div className={styles.bandcamp__text}>
            <span className={styles.bandcamp__follow}>Follow on</span>
            <span className={styles.bandcamp__name}>Bandcamp</span>
          </div>
        </a>
      </div>

      <div className={styles.video}>
        {/* <h3>videos</h3> */}
        <iframe
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/PFDMxjC3uyw?si=sbQ1g0NfSnsIBOVE"
          title="Placeholder YouTube jam 002 techno performance"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/EE0nXytSgSo?si=2pFUrKGocwzH-VGR"
          title="Placeholder YouTube Live @ Lee Bar MTY MX"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/SoK4DRo2gQk?si=ABESdvGp4wlF91t6"
          title="Placeholder YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.at}>
        <a href='https://www.instagram.com/placeholder___x' target='_blank'>
          <span className={styles.at__span}>@</span>placeholder___x
        </a>
      </div>

    </section>
  )
}

export default Canva