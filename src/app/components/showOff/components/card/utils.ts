import { EnumCardVariants } from '../../cardsInfo';

type CoordsType = React.MutableRefObject<{
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
}>;

const toggleScroll = (enableScroll: boolean) => {
  if (enableScroll) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

export const dimensionsController = (variant: EnumCardVariants | undefined) => {
  // [width, height]

  switch (variant) {
    case EnumCardVariants.cv:
      return [124, 156];

    case EnumCardVariants.albumCover:
      return [200, 200];

    default:
      return [300, 125];
  }
};

export const onMouseDown = (
  isClicked: React.MutableRefObject<boolean>,
  coords: CoordsType,
  e: MouseEvent
) => {
  isClicked.current = true;
  coords.current.startX = e.clientX;
  coords.current.startY = e.clientY;
};

export const onMouseUp = (
  isClicked: React.MutableRefObject<boolean>,
  coords: CoordsType,
  card: HTMLDivElement
) => {
  isClicked.current = false;
  coords.current.lastX = card.offsetLeft;
  coords.current.lastY = card.offsetTop;
};

export const onMouseMove = (
  isClicked: React.MutableRefObject<boolean>,
  coords: CoordsType,
  card: HTMLDivElement,
  e: MouseEvent
) => {
  if (!isClicked.current) return;

  const nextX = e.clientX - coords.current.startX + coords.current.lastX;
  const nextY = e.clientY - coords.current.startY + coords.current.lastY;

  card.style.top = `${nextY}px`;
  card.style.left = `${nextX}px`;
};

export const onTouchStart = (
  isClicked: React.MutableRefObject<boolean>,
  coords: CoordsType,
  e: TouchEvent
) => {
  isClicked.current = true;
  const touch = e.touches[0];
  coords.current.startX = touch.clientX;
  coords.current.startY = touch.clientY;
  toggleScroll(false);
};

export const onTouchMove = (
  isClicked: React.MutableRefObject<boolean>,
  coords: CoordsType,
  card: HTMLDivElement,
  e: TouchEvent
) => {
  if (!isClicked.current) return;

  const touch = e.touches[0];
  const nextX = touch.clientX - coords.current.startX + coords.current.lastX;
  const nextY = touch.clientY - coords.current.startY + coords.current.lastY;

  card.style.top = `${nextY}px`;
  card.style.left = `${nextX}px`;
};

export const onTouchEnd = (
  isClicked: React.MutableRefObject<boolean>,
  coords: CoordsType,
  card: HTMLDivElement
) => {
  isClicked.current = false;
  coords.current.lastX = card.offsetLeft;
  coords.current.lastY = card.offsetTop;
  toggleScroll(true);
};

// css unit tranform handlers
export const vhToPixels = (vh: number) => {
  return Math.round(window.innerHeight / (100 / vh));
};

export const vwToPixels = (vw: number) => {
  return Math.round(window.innerWidth / (100 / vw));
};
