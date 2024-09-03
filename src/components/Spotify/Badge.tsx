import { type FC, useEffect, useState } from 'react'
import type { NowPlayingTrackResponse } from '@utils/spotify'
import { NotPlaying } from './NotPlaying'
import { NowPlaying } from './NowPlaying'

export const SpotifyNowPlaying: FC = () => {
  const [spotifyData, setSpotifyData] = useState<NowPlayingTrackResponse>();
  useEffect(() => {
    fetch("/spotify.json") // Fetch the Spotify data from ~/pages/api/spotify.ts
      .then((res) => res.json())
      .then((data) => setSpotifyData(data));
  }, []);
  return (
    <li className="hidden md:block">
      {spotifyData?.isPlaying ? (
        <NowPlaying props={spotifyData} />
      ) : (
        <NotPlaying />
      )}
    </li>
  );
}
