export type photoInfoType = {
  src: string;
  alt: string;
  position: {
    rowStart: string;
    rowEnd: string;
    columnStart: string;
    columnEnd: string;
  };
  positionSmaller: {
    rowStart: string;
    rowEnd: string;
    columnStart: string;
    columnEnd: string;
  };
  title?: string;
  date?: string;
  url?: string;
};
