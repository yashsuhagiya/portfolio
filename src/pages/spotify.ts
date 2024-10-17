import { Buffer } from "node:buffer";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "astro:env/server";
import type { Artist } from "@utils/spotify";

export async function GET() {
  const basic = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
  const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

  try {
    const responseAccessToken = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    const { access_token } = await responseAccessToken.json();

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 204) {
      return new Response(
        JSON.stringify({ message: "No track currently playing" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { item } = await response.json();
    const track = {
      isPlaying: true,
      title: item.name,
      artist: item.artists.map((artist: Artist) => artist.name).join(", "),
      url: item.external_urls.spotify,
      img: item.album.images[0].url,
    };

    return new Response(JSON.stringify({ spotifyData: track }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching data from Spotify" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
