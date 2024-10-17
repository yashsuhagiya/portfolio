export const prerender = true;

import type { Artist } from "@utils/spotify";
import { ActionError, defineAction } from "astro:actions";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "astro:env/server";
import { Buffer } from "node:buffer";

export const server = {
  spotify: {
    playing: defineAction({
      handler: async (_) => {
        const refresh_token = SPOTIFY_REFRESH_TOKEN;
        const client_id = SPOTIFY_CLIENT_ID;
        const client_secret = SPOTIFY_CLIENT_SECRET;

        const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
          "base64"
        );
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
              refresh_token,
            }),
          });

          const token = (await responseAccessToken.json()) as {
            access_token: string;
          };

          const response = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
              headers: {
                Authorization: `Bearer ${token.access_token}`,
              },
            }
          );

          if (response.status === 204) {
            return {
              message: "No track currently playing",
            };
          }

          const { item } = await response.json();

          const track = {
            isPlaying: true,
            title: item.name,
            artist: item.artists
              .map((_artist: Artist) => _artist.name)
              .join(", "),
            url: item.external_urls.spotify,
            img: item.album.images[0].url,
          };

          return {
            spotifyData: track,
          };
        } catch {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: "Error fetching data from Spotify",
          });
        }
      },
    }),
  },
};
