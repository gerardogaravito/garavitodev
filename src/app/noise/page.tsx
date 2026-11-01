import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

import { releaseLinks } from './constants/release';
import { sections, Work } from './constants/works';

function renderWork(work: Work) {
  switch (work.type) {
    case 'image':
      return (
        <figure key={work.file} className={styles.work}>
          <Image
            src={work.src}
            width={work.width}
            height={work.height}
            alt={work.file}
            className={styles.work__media}
            sizes='(max-width: 600px) 100vw, 560px'
          />
          <figcaption className={styles.work__caption}>{work.file}</figcaption>
        </figure>
      );
    case 'video':
      return (
        <figure key={work.file} className={styles.work}>
          <video
            src={work.src}
            poster={work.poster}
            className={styles.work__media}
            controls
            playsInline
            preload='none'
          />
          <figcaption className={styles.work__caption}>{work.file}</figcaption>
        </figure>
      );
    case 'youtube':
      return (
        <figure key={work.id} className={styles.work}>
          <iframe
            className={styles.work__youtube}
            src={`https://www.youtube-nocookie.com/embed/${work.id}`}
            title={work.caption}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            loading='lazy'
            allowFullScreen
          />
          <figcaption className={styles.work__caption}>{work.caption}</figcaption>
        </figure>
      );
  }
}

function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.header__name}>
          {/* hand-drawn calligraphy, black on transparent; tinted gray in CSS */}
          <Image
            src='/noise/garavito_logo.png'
            width={1280}
            height={209}
            alt='Garavito'
            className={styles.header__logo}
            priority
          />
        </h1>
        <a
          className={styles.header__contact}
          href='https://www.instagram.com/garavito666'
          target='_blank'
          rel='noopener noreferrer'
        >
          instagram.com/garavito666
        </a>
        <a
          className={styles.header__contact}
          href='https://garavito666.bandcamp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          garavito666.bandcamp.com
        </a>
      </header>

      <section className={styles.release}>
        <Image
          src='/noise/garavito_portada.jpg'
          width={1600}
          height={1600}
          alt='Portada Garavito'
          className={styles.release__cover}
          sizes='280px'
          priority
        />
        <h2 className={styles.release__title}>
          garavito <span className={styles.release__at}>@</span>
        </h2>
        <div className={styles.release__links}>
          {releaseLinks.map((link) => (
            <a
              key={link.title}
              className={styles.release__link}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.title}
            </a>
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2 className={styles.section__title}>{section.title}</h2>
          {section.works.map(renderWork)}
        </section>
      ))}
    </main>
  );
}

export default Home;
