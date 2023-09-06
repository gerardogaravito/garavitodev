import { NextResponse } from 'next/server';

export type AlbumType = {
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
  image: {
    size: 'small' | 'medium' | 'large' | 'extralarge';
    '#text': string;
  }[];
  mbid: string;
  url: string;
  playcount: string;
  '@attr': {
    rank: string;
  };
  name: string;
};

export type LastFmResponseType = {
  topalbums: {
    album: AlbumType[];
  };
};

export async function GET(request: Request) {
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=21`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data: LastFmResponseType = await res.json();

  return NextResponse.json({ data });
}
