/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../card.module.scss';
import { AlbumType } from '@/app/api/route';

interface IAlbumCover {}

const AlbumCover: FC<IAlbumCover> = () => {
  const [albumsData, setAlbumsData] = useState<AlbumType[]>([]);

  const [currentAlbum, setCurrentAlbum] = useState<AlbumType>();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    fetch('/api')
      .then((res) => res.json())
      .then(({ data }) => {
        setAlbumsData(data.topalbums.album);
        setCurrentAlbum(data.topalbums.album[0]);
        setCurrentIndex(0);
      });

    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => (prev >= 20 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentAlbum(albumsData[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.album__container}>
        <span
          onClick={() => window.open(currentAlbum?.url, '_blank')}
          draggable='false'
        >
          {currentAlbum?.playcount ?? 0}
        </span>
        <p
          onClick={() => window.open(currentAlbum?.url, '_blank')}
          draggable='false'
        >
          plays
        </p>
      </div>
      <Image
        src={currentAlbum?.image?.[3]?.['#text'] ?? '/photos/astro_lights.jpg'}
        alt='top 20 last.fm played albums by me'
        width={windowWidth <= 768 ? 100 : 200}
        height={windowWidth <= 768 ? 100 : 200}
        className={styles.album__container__cover}
      />
    </>
  );
};

export default AlbumCover;
