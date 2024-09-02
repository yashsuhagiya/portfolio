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
      className="relative flex justify-center w-full cursor-pointer"
    >
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        className="heartbeat"
      >
        <path
          d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
          fill="#48cfc4"
        />
      </svg>
      <a
        id="first"
        href={props.url}
        className="absolute left-1 hidden transform -translate-y-1/2 z-50 items-center whitespace-nowrap text-sm text-neutral-200 opacity-0 hover:text-neon-green shadow-sm md:block md:text-base"
        aria-label={`Listen to ${props.title} by ${props.artist}`}
      >
        <div className="flex flex-row px-4 py-4 rounded-xl">
          <img
            src={props.img}
            alt={`${props.title} album cover`}
            className="w-20 h-20 rounded-md"
          />
          <div className="ml-4 py-2 pl-2 pr-6 rounded-lg bg-neutral-500">
            <p className="text-lg font-semibold text-white">{props.title}</p>
            <p className="text-sm text-gray-300">{props.artist}</p>
          </div>
        </div>
      </a>
    </span>
  );
};
