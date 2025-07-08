import { useEffect, useState } from "react";
import { NotPlaying } from "./NotPlaying";
import { NowPlaying } from "./NowPlaying";
import { actions } from "astro:actions";
import type { NowPlayingTrackResponse } from "@utils/spotify";

export const SpotifyNowPlaying = () => {
  const [spotifyData, setSpotifyData] =
    useState<NowPlayingTrackResponse | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchSpotifyData = async () => {
    try {
      const result = await actions.spotify.playing();
      const data = result?.data?.spotifyData;

      if (data) {
        setSpotifyData(data);
        setIsPlaying(data.isPlaying);
      }
    } catch (error) {
      console.error("Failed to fetch Spotify data:", error);
      // Set to null so NotPlaying component is shown
      setSpotifyData(null);
      setIsPlaying(false);
    }
  };

  // Use an effect to periodically update the playing song data
  useEffect(() => {
    // Fetch Spotify data immediately on load
    fetchSpotifyData();

    // Set interval to refresh every 10 seconds
    const intervalId = setInterval(() => {
      fetchSpotifyData();
    }, 100000); // 100000ms = 100 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!spotifyData) {
    return <NotPlaying />;
  }

  return (
    <li className="hidden md:block">
      {isPlaying ? <NowPlaying props={spotifyData} /> : <NotPlaying />}
    </li>
  );
};
