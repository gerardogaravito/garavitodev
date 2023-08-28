export const handleScroll = (
  pivot: string,
  setTransformValue: (value: React.SetStateAction<number>) => void
) => {
  const tvSeguns = document.querySelector(`.${pivot}`);
  if (tvSeguns) {
    const { top, height } = tvSeguns.getBoundingClientRect();
    const centerY = window.innerHeight / 2;

    const newTransformValue = Math.min(
      12,
      Math.abs(centerY - (top + height / 2)) / 15
    );
    setTransformValue(newTransformValue);
  }
};

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
