import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './card.module.scss';
import { ICard } from './card.types';
import {
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onTouchMove,
  onTouchStart,
  onTouchEnd,
  vhToPixels,
  vwToPixels,
  dimensionsController,
} from './utils';
import { AlbumCover, CV } from './variants';
import { EnumCardVariants } from '../../cardsInfo';
import { zIndexMutaleListType } from '../../utils';

const Card: FC<ICard> = ({
  foregroundRef,
  position,
  isFromRight = false,
  isFromMiddle = false,
  title,
  tabName,
  dates,
  url,
  variant,
  zIndex,
  zIndexMutableList,
  setZIndexMutableList,
  isTouch,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [zIndexValue, setZIndexValue] = useState<number>(zIndex);

  const cardRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);

  const CARD_WIDTH = dimensionsController(variant, windowWidth)[0];
  const CARD_HEIGHT = dimensionsController(variant, windowWidth)[1];

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: isFromRight
      ? vwToPixels(100) - position.x - CARD_WIDTH
      : position.x,
    startY: Number(vhToPixels(isFromMiddle ? 150 : 100) + position.y),
    lastX: isFromRight ? vwToPixels(100) - position.x - CARD_WIDTH : position.x,
    lastY: Number(vhToPixels(isFromMiddle ? 150 : 100) + position.y),
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!cardRef.current || !foregroundRef.current) return;

    const card = cardRef.current;
    const foreground = foregroundRef.current;

    // desktop
    card.addEventListener('mousedown', (event) =>
      onMouseDown(isClicked, coords, event)
    );
    card.addEventListener('mouseup', (_) => onMouseUp(isClicked, coords, card));
    foreground.addEventListener('mousemove', (event) =>
      onMouseMove(isClicked, coords, card, event)
    );
    foreground.addEventListener('mouseleave', (_) =>
      onMouseUp(isClicked, coords, card)
    );

    // mobile
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
      // dekstop
      card.removeEventListener('mousedown', (event) =>
        onMouseDown(isClicked, coords, event)
      );
      card.removeEventListener('mouseup', (event) =>
        onMouseUp(isClicked, coords, card)
      );
      foreground.removeEventListener('mousemove', (event) =>
        onMouseMove(isClicked, coords, card, event)
      );
      foreground.removeEventListener('mouseleave', (event) =>
        onMouseUp(isClicked, coords, card)
      );

      // mobile
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
  });

  useEffect(() => {
    setZIndexValue(
      zIndexMutableList.find((ele) => ele.title === title)!.zIndex
    );
  }, [title, zIndexMutableList]);

  const handleMouseDown = () => {
    if (isTouch) return;

    setZIndexMutableList(
      zIndexMutableList.map((item: zIndexMutaleListType) => {
        if (item.title == title) {
          return {
            title: item.title,
            zIndex:
              zIndexMutableList.reduce((elementoMaximo, elementoActual) => {
                return elementoActual.zIndex > elementoMaximo.zIndex
                  ? elementoActual
                  : elementoMaximo;
              }, zIndexMutableList[0]).zIndex + 1,
          };
        }

        return {
          title: item.title,
          zIndex: item.zIndex,
        };
      })
    );
  };

  switch (variant) {
    case EnumCardVariants.cv:
      return (
        <div
          ref={cardRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            display: 'grid',
            gridTemplate: '1 / 1',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            zIndex: zIndexValue,
            ...(isFromRight
              ? {
                  top: `calc(${vhToPixels(isFromMiddle ? 150 : 100)}px + ${
                    position.y
                  }px)`,
                  right: `${position.x}px`,
                }
              : {
                  top: `calc(${vhToPixels(isFromMiddle ? 150 : 100)}px + ${
                    position.y
                  }px)`,
                  left: `${position.x}px`,
                }),
          }}
        >
          <div className={styles.cv__container}>
            <span
              onClick={() => window.open('/CV_garavitogerardo.pdf', '_blank')}
              draggable='false'
            >
              cv
            </span>
          </div>
          <CV />
        </div>
      );

    case EnumCardVariants.albumCover:
      return (
        <div
          ref={cardRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            display: 'grid',
            gridTemplate: '1 / 1',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            zIndex: zIndexValue,
            ...(isFromRight
              ? {
                  top: `calc(${vhToPixels(isFromMiddle ? 150 : 100)}px + ${
                    position.y
                  }px)`,
                  right: `${position.x}px`,
                }
              : {
                  top: `calc(${vhToPixels(isFromMiddle ? 150 : 100)}px + ${
                    position.y
                  }px)`,
                  left: `${position.x}px`,
                }),
          }}
        >
          <AlbumCover />
        </div>
      );
  }

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        position: 'absolute',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        zIndex: zIndexValue,
        ...(isFromRight
          ? {
              top: `calc(${vhToPixels(isFromMiddle ? 150 : 100)}px + ${
                position.y
              }px)`,
              right: `${position.x}px`,
            }
          : {
              top: `calc(${vhToPixels(isFromMiddle ? 150 : 100)}px + ${
                position.y
              }px)`,
              left: `${position.x}px`,
            }),
      }}
    >
      <div className={styles.tab}>
        {Boolean(tabName) && <p className={styles.tab__text}>{tabName}</p>}
      </div>
      <div className={styles.body}>
        <a
          target='_blank'
          href={url}
          className={styles.body__title}
          draggable='false'
        >
          {title === 'efevoo' ? (
            <>
              <span>{title}</span>
              <span className={styles.body__title__subtitle}> group</span>
            </>
          ) : (
            title
          )}
        </a>
        <p className={styles.body__dates}>{dates}</p>
      </div>
    </div>
  );
};

export default Card;
