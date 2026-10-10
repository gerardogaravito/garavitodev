export type Work =
  | { type: 'image'; file: string; src: string; width: number; height: number }
  | { type: 'video'; file: string; src: string; poster: string }
  | { type: 'youtube'; id: string; caption: string };

export interface Section {
  title: string;
  works: Work[];
}

// `file` is the original filename shown as caption; `src` is the web-converted asset
export const sections: Section[] = [
  {
    title: 'audio',
    works: [
      { type: 'image', file: 'garavito_sonora.JPG', src: '/noise/garavito_sonora.jpg', width: 1600, height: 2000 },
      { type: 'image', file: 'garavito_sonora_noise_01.heic', src: '/noise/garavito_sonora_noise_01.jpg', width: 2000, height: 2000 },
      { type: 'image', file: 'garavito_sonora_noise_02.heic', src: '/noise/garavito_sonora_noise_02.jpg', width: 2000, height: 2000 },
      { type: 'video', file: 'garavito_sonora_noise_03.MOV', src: '/noise/garavito_sonora_noise_03.mp4', poster: '/noise/garavito_sonora_noise_03.poster.jpg' },
      { type: 'youtube', id: 'TNnZe0J8pYo', caption: 'noise set en Cd. Obregón, Sonora' },
      { type: 'image', file: 'garavito_leebar_mty.JPG', src: '/noise/garavito_leebar_mty.jpg', width: 1499, height: 2000 },
      { type: 'youtube', id: 'xydGz2OTLTo', caption: 'placeholder en LEEBAR MONTERREY' },
      { type: 'image', file: 'garavito_noise_room.JPG', src: '/noise/garavito_noise_room.jpg', width: 1600, height: 2000 },
      { type: 'image', file: 'garavito_saltillo_02.jpg', src: '/noise/garavito_saltillo_02.jpg', width: 1500, height: 2000 },
      { type: 'image', file: 'placeholder_festival_arido.JPG', src: '/noise/placeholder_festival_arido.jpg', width: 1600, height: 2000 },
      { type: 'image', file: 'placeholder_inopia_01.heic', src: '/noise/placeholder_inopia_01.jpg', width: 2000, height: 2000 },
      { type: 'image', file: 'placeholder_inopia_02.HEIC', src: '/noise/placeholder_inopia_02.jpg', width: 2000, height: 1500 },
      { type: 'youtube', id: 'JX4XRa4hLM0', caption: 'selección de discos en LAS DUNAS' },
    ],
  },
  {
    title: 'dibujo',
    works: [
      { type: 'image', file: 'garavito_dibujo_01.heic', src: '/noise/garavito_dibujo_01.jpg', width: 1599, height: 2000 },
      { type: 'image', file: 'garavito_dibujo_02.HEIC', src: '/noise/garavito_dibujo_02.jpg', width: 2000, height: 1500 },
      { type: 'image', file: 'garavito_dibujo_03.JPG', src: '/noise/garavito_dibujo_03.jpg', width: 2000, height: 1500 },
      { type: 'image', file: 'garavito_dibujo_04.jpg', src: '/noise/garavito_dibujo_04.jpg', width: 1500, height: 2000 },
      { type: 'image', file: 'garavito_dibujo_05.jpg', src: '/noise/garavito_dibujo_05.jpg', width: 1499, height: 2000 },
      { type: 'image', file: 'garavito_dibujo_06.JPG', src: '/noise/garavito_dibujo_06.jpg', width: 1500, height: 2000 },
      { type: 'image', file: 'garavito_dibujo_07.jpg', src: '/noise/garavito_dibujo_07.jpg', width: 2000, height: 2000 },
    ],
  },
];
