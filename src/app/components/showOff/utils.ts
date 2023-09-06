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
