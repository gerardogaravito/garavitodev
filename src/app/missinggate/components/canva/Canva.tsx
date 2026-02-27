import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import styles from './canva.module.scss';

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
        height={55}
        alt='placeholder_text'
      />
      <div className={styles.portada}>
        <Image
          src="/photos/missinggate/portada_inopia.jpg"
          width={800}
          height={500}
          alt="Portada Inopia"
          className={styles.portadaImage}
        />
      </div>

      <div className={styles.links}>
        <h3 className={styles.links__title}>inopia <span className={styles.links__span}>@</span></h3>
        <div className={styles.links__container}>
          <a className={styles.links__item} href="https://music.apple.com/mx/album/inopia/1878212528" target="_blank" rel="noopener noreferrer">
            apple music
          </a>
          <a className={styles.links__item} href="https://open.spotify.com/intl-es/album/0YUmndCLW6RxmpeicI2K2p?si=Q_6rkVNIQUOsLD6pi4I6MQ" target="_blank" rel="noopener noreferrer">
            spotify
          </a>
          <a className={styles.links__item} href="https://placeholder-mx.bandcamp.com/album/inopia" target="_blank" rel="noopener noreferrer">
            bandcamp
          </a>
          <a className={styles.links__item} href="https://www.youtube.com/watch?v=t0ijyI8sqZE&list=OLAK5uy_mu99QQ0SUlFxYe7xqO06wEwac_tvFLn3A" target="_blank" rel="noopener noreferrer">
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
          href="https://placeholder-mx.bandcamp.com/follow_me"
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
          src="https://www.youtube.com/embed/NtCGG6f0-cE?si=doAYNWskPH6Ri7bY"
          title="Placeholder Las Dunas Records"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/O8-7-GtSM84?si=hgSpwXiiP9aD0Vip"
          title="Placeholder YouTube Musica de Inteligentes"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/ajvFbJhbuQ4?si=k_zMGCT_AdApJfRc"
          title="Placeholder YouTube Insomnio Granular"
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
