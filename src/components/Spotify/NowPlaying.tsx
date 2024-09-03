import { animate } from "framer-motion";
import type { NowPlayingTrackResponse } from "@utils/spotify";

export const NowPlaying = ({ props }: { props: NowPlayingTrackResponse }) => {
  const onMouseEnterNowPlaying = (e: any) => {
    e.stopPropagation();
    animate([
      [
        "#first",
        { y: 0, x: 40, rotateZ: 0, opacity: 1 },
        { type: "spring", bounce: 0.5, duration: 0.5 },
      ],
    ]);
  };

  const onMouseLeaveNowPlaying = (e: any) => {
    e.stopPropagation();
    animate([
      ["#first", { y: 0, x: 0, rotateZ: 0, opacity: 0 }, { duration: 0.25 }],
    ]);
  };

  return (
    <span
      onMouseEnter={onMouseEnterNowPlaying}
      onMouseLeave={onMouseLeaveNowPlaying}
      className="relative w-fit cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="text-neon-green"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5">
          <animate
            attributeName="points"
            values="11 5 6 9 2 9 2 15 6 15 11 19 11 5; 12 6 7 10 3 10 3 16 7 16 12 20 12 6"
            dur="2s"
            repeatCount="indefinite"
          />
        </polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07">
          <animate
            attributeName="stroke"
            values="#48cfc4; #5471b6; #48cfc4"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14">
          <animate
            attributeName="stroke"
            values="#5471b6; #48cfc4; #5471b6"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <a
        id="first"
        href={props.url}
        className="absolute -top-0 hidden transform -translate-y-1/2 z-50 whitespace-nowrap items-center text-sm text-neutral-200 opacity-0 hover:text-neon-green shadow-sm md:flex md:text-base"
        aria-label={`Listen to ${props.title} by ${props.artist}`}
      >
        <div className="relative p-4 bg-neutral-700 rounded-lg shadow-md flex flex-col">
          {/* Spotify Logo */}
          <img
            src="/spotify-logo.png"
            alt="Spotify logo"
            className="absolute top-3 right-3 w-4 h-4"
          />

          {/* Album Cover */}
          <img
            src={props.img}
            alt={`${props.title} album cover`}
            className="w-24 h-24 rounded-sm shadow-lg"
          />

          {/* Title and Artists */}
          <div className="mt-4">
            <p className="text-base font-semibold text-white leading-tight">
              {props.title}
            </p>
            <p className="text-sm text-neutral-300 leading-snug">
              {props.artist}
            </p>
          </div>
        </div>
      </a>
    </span>
  );
};
