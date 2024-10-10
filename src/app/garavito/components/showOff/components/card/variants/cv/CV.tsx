import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

interface ICV {}

const CV: FC<ICV> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Image
      src={'/icons/cv_bigger_.png'}
      alt='CV icon'
      width={windowWidth <= 768 ? 85 : 124}
      height={windowWidth <= 768 ? 100 : 156}
      style={{ userSelect: 'none', gridArea: '1 / 1 / 2 / 2', zIndex: 1 }}
    />
  );
};

export default CV;
