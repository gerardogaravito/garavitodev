'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './photos.module.scss';
import Image from 'next/image';
import { photosInfo } from './utils';

interface IPhotos {
  isTouch: boolean;
}

const Photos: FC<IPhotos> = ({ isTouch }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, _] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmall = windowWidth < 1020;

  return (
    <section
      className={styles.container}
      style={{ height: isTouch ? windowHeight : '100vh' }}
    >
      {photosInfo.map((photo) => (
        <div
          key={photo.src}
          className={styles.frame}
          style={
            isSmall
              ? {
                  gridRowStart: photo.positionSmaller.rowStart,
                  gridRowEnd: photo.positionSmaller.rowEnd,
                  gridColumnStart: photo.positionSmaller.columnStart,
                  gridColumnEnd: photo.positionSmaller.columnEnd,
                }
              : {
                  gridRowStart: photo.position.rowStart,
                  gridRowEnd: photo.position.rowEnd,
                  gridColumnStart: photo.position.columnStart,
                  gridColumnEnd: photo.position.columnEnd,
                }
          }
        >
          <div className={styles.frame__text}>
            <p className={styles.frame__text__p}>
              {photo.title ? `${photo.title}, ` : ''}
              <span
                onClick={() => {
                  if (photo.url) {
                    return window.open(
                      'https://soundcloud.com/garavito666/plastilina',
                      '_blank'
                    );
                  }
                }}
                className={
                  photo.url
                    ? styles.frame__text__span__url
                    : styles.frame__text__span
                }
              >
                {' '}
                {photo.date}
              </span>
            </p>
          </div>
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={styles.frame__photo}
          />
        </div>
      ))}
    </section>
  );
};

export default Photos;
