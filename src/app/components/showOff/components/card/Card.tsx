import React, { FC, useEffect, useRef } from 'react';
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
import Image from 'next/image';

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
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);

  const CARD_WIDTH = dimensionsController(variant)[0];
  const CARD_HEIGHT = dimensionsController(variant)[1];

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

  useEffect(() => {
    if (!cardRef.current || !foregroundRef.current) return;

    const card = cardRef.current;
    const foreground = foregroundRef.current;

    // desktop
    card.addEventListener('mousedown', (event) =>
      onMouseDown(isClicked, coords, event)
    );
    card.addEventListener('mouseup', (event) =>
      onMouseUp(isClicked, coords, card)
    );
    foreground.addEventListener('mousemove', (event) =>
      onMouseMove(isClicked, coords, card, event)
    );
    foreground.addEventListener('mouseleave', (event) =>
      onMouseUp(isClicked, coords, card)
    );

    // mobile
    card.addEventListener('touchstart', (event) =>
      onTouchStart(isClicked, coords, event)
    );
    card.addEventListener('touchmove', (event) =>
      onTouchMove(isClicked, coords, card, event)
    );
    foreground.addEventListener('touchend', () =>
      onTouchEnd(isClicked, coords, card)
    );
    foreground.addEventListener('touchcancel', () =>
      onTouchEnd(isClicked, coords, card)
    );

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
      card.removeEventListener('touchstart', (event) =>
        onTouchStart(isClicked, coords, event)
      );
      card.removeEventListener('touchmove', (event) =>
        onTouchMove(isClicked, coords, card, event)
      );
      foreground.removeEventListener('touchend', () =>
        onTouchEnd(isClicked, coords, card)
      );
      foreground.removeEventListener('touchcancel', () =>
        onTouchEnd(isClicked, coords, card)
      );
    };

    return cleanup;
  });

  switch (variant) {
    case EnumCardVariants.cv:
      return (
        <div
          ref={cardRef}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            display: 'grid',
            gridTemplate: '1 / 1',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
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
              onClick={() => window.open('/CV_GerardoGaravito.pdf', '_blank')}
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
          style={{
            position: 'absolute',
            cursor: 'pointer',
            display: 'grid',
            gridTemplate: '1 / 1',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
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
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        zIndex: 10 + zIndex,
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
        <a target='_blank' href={url} className={styles.body__title}>
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
