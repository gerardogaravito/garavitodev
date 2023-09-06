import React, { FC } from 'react';
import Image from 'next/image';

interface ICV {}

const CV: FC<ICV> = () => {
  return (
    <Image
      src={'/icons/cv_bigger_.png'}
      alt='CV icon'
      width={124}
      height={156}
      style={{ userSelect: 'none', gridArea: '1 / 1 / 2 / 2', zIndex: 1 }}
    />
  );
};

export default CV;
