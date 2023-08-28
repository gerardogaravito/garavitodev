'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './showOff.module.scss';
import {
  handleScroll,
  //   onMouseDown,
  //   onMouseUp,
  //   onMouseMove,
  //   onTouchMove,
  //   onTouchStart,
  //   onTouchEnd,
} from './utils';
import { Card } from './components';

const ShowOff: FC = () => {
  // https://vimeo.com/user25403232
  const [transformValue, setTransformValue] = useState<number>(12);

  const foregroundRef = useRef<HTMLDivElement>(null);
  // const cardRef = useRef<HTMLDivElement>(null);

  // const isClicked = useRef<boolean>(false);

  // const coords = useRef<{
  //   startX: number;
  //   startY: number;
  //   lastX: number;
  //   lastY: number;
  // }>({
  //   startX: 0,
  //   startY: 0,
  //   lastX: 0,
  //   lastY: 0,
  // });

  useEffect(() => {
    // background actions

    window.addEventListener('scroll', () =>
      handleScroll(styles.tv__seguns, setTransformValue)
    );

    // // foreground actions

    // if (!cardRef.current || !foregroundRef.current) return;

    // const card = cardRef.current;
    // const foreground = foregroundRef.current;

    // // desktop
    // card.addEventListener('mousedown', (event) =>
    //   onMouseDown(isClicked, coords, event)
    // );
    // card.addEventListener('mouseup', (event) =>
    //   onMouseUp(isClicked, coords, card)
    // );
    // foreground.addEventListener('mousemove', (event) =>
    //   onMouseMove(isClicked, coords, card, event)
    // );
    // foreground.addEventListener('mouseleave', (event) =>
    //   onMouseUp(isClicked, coords, card)
    // );

    // // mobile
    // card.addEventListener('touchstart', (event) =>
    //   onTouchStart(isClicked, coords, event)
    // );
    // card.addEventListener('touchmove', (event) =>
    //   onTouchMove(isClicked, coords, card, event)
    // );
    // foreground.addEventListener('touchend', () =>
    //   onTouchEnd(isClicked, coords, card)
    // );
    // foreground.addEventListener('touchcancel', () =>
    //   onTouchEnd(isClicked, coords, card)
    // );

    const cleanup = () => {
      // background actions

      window.removeEventListener('scroll', () =>
        handleScroll(styles.tv__seguns, setTransformValue)
      );

      // foreground actions

      // // dekstop
      // card.removeEventListener('mousedown', (event) =>
      //   onMouseDown(isClicked, coords, event)
      // );
      // card.removeEventListener('mouseup', (event) =>
      //   onMouseUp(isClicked, coords, card)
      // );
      // foreground.removeEventListener('mousemove', (event) =>
      //   onMouseMove(isClicked, coords, card, event)
      // );
      // foreground.removeEventListener('mouseleave', (event) =>
      //   onMouseUp(isClicked, coords, card)
      // );

      // // mobile
      // card.removeEventListener('touchstart', (event) =>
      //   onTouchStart(isClicked, coords, event)
      // );
      // card.removeEventListener('touchmove', (event) =>
      //   onTouchMove(isClicked, coords, card, event)
      // );
      // foreground.removeEventListener('touchend', () =>
      //   onTouchEnd(isClicked, coords, card)
      // );
      // foreground.removeEventListener('touchcancel', () =>
      //   onTouchEnd(isClicked, coords, card)
      // );
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
            width={250}
            height={333.33}
            className={styles.tv__primis}
            style={{
              transform: `translate(-${transformValue}px, -${transformValue}px)`,
            }}
          />
          <Image
            src={'/photos/chicago_tv.jpg'}
            alt='tv exposed at the Museum of Contemporary Art of Chicago, playing her video titled Vieja Gloria 2003'
            width={250}
            height={333.33}
            className={styles.tv__seguns}
          />
          <Image
            src={'/photos/chicago_tv.jpg'}
            alt='tv exposed at the Museum of Contemporary Art of Chicago, playing her video titled Vieja Gloria 2003'
            width={250}
            height={333.33}
            className={styles.tv__tercis}
            style={{
              transform: `translate(${transformValue}px, ${transformValue}px)`,
            }}
          />
        </div>
      </section>
      <section ref={foregroundRef} className={styles.foreground}>
        <Card foregroundRef={foregroundRef} />
        <Card foregroundRef={foregroundRef} />
        <Card foregroundRef={foregroundRef} />
      </section>
    </div>
  );
};

export default ShowOff;
