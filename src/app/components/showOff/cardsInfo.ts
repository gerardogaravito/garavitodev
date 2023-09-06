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
  position: { x: number; y: number };
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
    position: { x: 150, y: 100 },
  },
  //vitau
  {
    title: 'mobile app',
    tabName: '',
    dates: '',
    url: 'https://apps.apple.com/mx/app/vitau-farmacia-digital/id1560696284',
    isFromRight: false,
    isFromMiddle: true,
    position: { x: 124, y: 24 },
  },
  {
    title: 'vita-mobile-ui',
    tabName: '',
    dates: '',
    url: 'https://www.npmjs.com/package/vita-mobile-ui?activeTab=readme',
    isFromRight: false,
    isFromMiddle: true,
    position: { x: 112, y: 12 },
  },
  {
    title: 'vitau',
    tabName: 'Y Combinator',
    dates: 'feb2021 - nov2022',
    url: 'https://vitau.mx/',
    isFromRight: false,
    isFromMiddle: true,
    position: { x: 100, y: 0 },
  },
  // efevoo group
  {
    title: 'wirebit',
    tabName: '',
    dates: '',
    url: 'https://wirebit.com/',
    isFromRight: true,
    isFromMiddle: true,
    position: { x: 138, y: 212 },
  },
  {
    title: 'efevoo',
    tabName: '',
    dates: 'ene2023 _ still',
    url: 'https://efevoopay.com/',
    isFromRight: true,
    isFromMiddle: true,
    position: { x: 150, y: 200 },
  },
  // CV
  {
    title: 'CV',
    tabName: '',
    dates: '',
    url: '',
    isFromRight: false,
    isFromMiddle: true,
    position: { x: 450, y: 200 },
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
    position: { x: 175, y: 50 },
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
    position: { x: 50, y: -50 },
  },
];
