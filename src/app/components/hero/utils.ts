export const handleMouseMove = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setDistance: React.Dispatch<React.SetStateAction<number>>
) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const centerX = rect.left - 125 + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;
  const newDistance = Math.sqrt(deltaX ** 2 + deltaY ** 2) - 50;

  setDistance(newDistance);
};

// writing this method drinking iced vanilla latte at AMOBA, listening volar volar by cartel de santa
export const validate420 = (currentTime: string[]) => {
  return (
    (currentTime[0] === '04' || currentTime[0] === '16') &&
    currentTime[1] === '20'
  );
};
