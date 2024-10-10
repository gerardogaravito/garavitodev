export enum EnumCardVariants {
  cv = 'cv',
  albumCover = 'albumCover',
}

export type cardsInfoType = {
  title: string;
  tabName: string;
  dates: string;
  url: string;
  isFromRight: boolean;
  isFromMiddle: boolean;
  position: {
    normal: { x: number; y: number };
    mobile: { x: number; y: number };
  };
  variant?: EnumCardVariants;
};

export const cardsInfo: cardsInfoType[] = [
  // personal projects
  {
    title: 'gggraph',
    tabName: '',
    dates: '',
    url: 'https://gggraph.garavito.dev/',
    isFromRight: false,
    isFromMiddle: false,
    position: {
      normal: { x: 150, y: 100 },
      mobile: { x: 24, y: 0 },
    },
  },
  //vitau
  {
    title: 'mobile app',
    tabName: '',
    dates: '',
    url: 'https://apps.apple.com/mx/app/vitau-farmacia-digital/id1560696284',
    isFromRight: false,
    isFromMiddle: true,
    position: {
      normal: { x: 124, y: 24 },
      mobile: { x: 32, y: 136 },
    },
  },
  {
    title: 'vita-mobile-ui',
    tabName: '',
    dates: '',
    url: 'https://www.npmjs.com/package/vita-mobile-ui?activeTab=readme',
    isFromRight: false,
    isFromMiddle: true,
    position: {
      normal: { x: 112, y: 12 },
      mobile: { x: 20, y: 104 },
    },
  },
  {
    title: 'vitau',
    tabName: 'Y Combinator',
    dates: 'feb2021 - still',
    url: 'https://vitau.mx/',
    isFromRight: false,
    isFromMiddle: true,
    position: {
      normal: { x: 100, y: 0 },
      mobile: { x: 8, y: 72 },
    },
  },
  // efevoo group
  {
    title: 'wirebit',
    tabName: '',
    dates: '',
    url: 'https://wirebit.com/',
    isFromRight: true,
    isFromMiddle: true,
    position: {
      normal: { x: 138, y: 212 },
      mobile: { x: 6, y: 268 },
    },
  },
  {
    title: 'efevoo',
    tabName: '',
    dates: 'ene2023 - oct2023',
    url: 'https://efevoopay.com/',
    isFromRight: true,
    isFromMiddle: true,
    position: {
      normal: { x: 150, y: 200 },
      mobile: { x: 18, y: 236 },
    },
  },
  // CV
  {
    title: 'CV',
    tabName: '',
    dates: '',
    url: '',
    isFromRight: false,
    isFromMiddle: true,
    position: {
      normal: { x: 450, y: 200 },
      mobile: { x: 25, y: 275 },
    },
    variant: EnumCardVariants.cv,
  },
  // album cover
  {
    title: 'album cover',
    tabName: '',
    dates: '',
    url: '',
    isFromRight: true,
    isFromMiddle: false,
    position: {
      normal: { x: 175, y: 50 },
      mobile: { x: 24, y: 48 },
    },
    variant: EnumCardVariants.albumCover,
  },
  // Platzi
  {
    title: 'platzi master',
    tabName: 'Y Combinator',
    dates: 'jun2020 - may2022',
    url: 'https://www.youtube.com/watch?v=eVRFnytvDHE&t=1s',
    isFromRight: true,
    isFromMiddle: true,
    position: {
      normal: { x: 50, y: -50 },
      mobile: { x: 150, y: -125 },
    },
  },
];
