import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

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
        <h1 className={styles.header__name}>Gerardo Garavito</h1>
        <p className={styles.header__subtitle}>audio y dibujo</p>
      </header>

      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2 className={styles.section__title}>{section.title}</h2>
          {section.works.map(renderWork)}
        </section>
      ))}

      <footer className={styles.footer}>
        <a href='https://missinggate.org' target='_blank' rel='noopener noreferrer'>
          missinggate.org
        </a>
        <a href='https://www.instagram.com/placeholder___x' target='_blank' rel='noopener noreferrer'>
          <span className={styles.footer__at}>@</span>placeholder___x
        </a>
      </footer>
    </main>
  );
}

export default Home;
