import React, { FC, useEffect, useRef } from 'react';
import styles from '../../showOff.module.scss';
import {
  handleScroll,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onTouchMove,
  onTouchStart,
  onTouchEnd,
} from './utils';

interface ICard {
  // cardRef: React.RefObject<HTMLDivElement>;
  foregroundRef: React.RefObject<HTMLDivElement>;
}

const Card: FC<ICard> = ({ foregroundRef }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    // foreground actions

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

  return <div ref={cardRef} className={styles.card}></div>;
};

export default Card;
