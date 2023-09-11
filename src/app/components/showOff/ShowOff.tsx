'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './showOff.module.scss';
import {
  handleScroll,
  createZIndexMutableList,
  zIndexMutaleListType,
} from './utils';
import { Card } from './components';
import { cardsInfo, cardsInfoType } from './cardsInfo';

const ShowOff: FC = () => {
  // video playing on the TV => https://vimeo.com/user25403232
  const foregroundRef = useRef<HTMLDivElement>(null);

  const [transformValue, setTransformValue] = useState<number>(12);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [zIndexMutableList, setZIndexMutableList] = useState<
    zIndexMutaleListType[]
  >(createZIndexMutableList(cardsInfo));

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', () =>
      handleScroll(styles.tv__seguns, setTransformValue)
    );
    window.addEventListener('resize', handleResize);

    const cleanup = () => {
      window.removeEventListener('scroll', () =>
        handleScroll(styles.tv__seguns, setTransformValue)
      );
      window.removeEventListener('resize', handleResize);
    };

    return cleanup;
  }, []);

  return (
    <div className={styles.layout}>
      <section className={styles.background}>
        <div className={styles.tv}>
          <Image
            src={'/photos/chicago_tv.jpg'}
            alt='tv exposed at the Museum of Contemporary Art of Chicago, playing her video titled Vieja Gloria 2003'
            width={windowWidth <= 390 ? 125 : windowWidth <= 768 ? 175 : 250}
            height={
              windowWidth <= 390 ? 166.67 : windowWidth <= 768 ? 233.33 : 333.33
            }
            className={styles.tv__primis}
            style={{
              transform: `translate(-${12 - transformValue}px, -${
                12 - transformValue
              }px)`,
            }}
          />
          <Image
            src={'/photos/chicago_tv.jpg'}
            alt='tv exposed at the Museum of Contemporary Art of Chicago, playing her video titled Vieja Gloria 2003'
            width={windowWidth <= 390 ? 125 : windowWidth <= 768 ? 175 : 250}
            height={
              windowWidth <= 390 ? 166.67 : windowWidth <= 768 ? 233.33 : 333.33
            }
            className={styles.tv__seguns}
          />
          <Image
            src={'/photos/chicago_tv.jpg'}
            alt='tv exposed at the Museum of Contemporary Art of Chicago, playing her video titled Vieja Gloria 2003'
            width={windowWidth <= 390 ? 125 : windowWidth <= 768 ? 175 : 250}
            height={
              windowWidth <= 390 ? 166.67 : windowWidth <= 768 ? 233.33 : 333.33
            }
            className={styles.tv__tercis}
            style={{
              transform: `translate(${12 - transformValue}px, ${
                12 - transformValue
              }px)`,
            }}
          />
        </div>
      </section>
      <section ref={foregroundRef} className={styles.foreground}>
        <div className={styles.dir}>
          <p className={styles.dir__title}>web developer</p>
          <a
            className={styles.dir__item}
            href='https://github.com/gerardogaravito'
            target='_blank'
          >
            / <span>github</span>
          </a>
          <a
            className={styles.dir__item}
            href='https://soundcloud.com/garavito666'
            target='_blank'
          >
            / <span>soundcloud</span>
          </a>
          <a
            className={styles.dir__item}
            href='https://www.instagram.com/garavito666/?hl=es-la'
            target='_blank'
          >
            / <span>instagram</span>
          </a>
          <a
            className={styles.dir__item}
            href='https://www.last.fm/user/garavito666'
            target='_blank'
          >
            /{' '}
            <span>
              last.<span className={styles.dir__item__italic}>fm</span>
            </span>
          </a>
        </div>
        {cardsInfo.map((item: cardsInfoType, index: number) => {
          return (
            <Card
              foregroundRef={foregroundRef}
              title={item.title}
              tabName={item.tabName}
              dates={item.dates}
              url={item.url}
              isFromMiddle={item.isFromMiddle}
              isFromRight={item.isFromRight}
              position={
                windowWidth <= 768 ? item.position.mobile : item.position.normal
              }
              key={item.title}
              zIndex={index}
              variant={item.variant}
              zIndexMutableList={zIndexMutableList}
              setZIndexMutableList={setZIndexMutableList}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ShowOff;
