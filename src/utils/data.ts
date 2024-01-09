import { link } from "fs";

const technologies = [
  {
    name: "Astro",
    imgSrc: "https://bestofjs.org/logos/astro.dark.svg",
    altSrc: "Astro Logo",
    link: "https://astro.build/",
    ariaLink: "Astro Documentation Website",
  },
  {
    name: "JavaScript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
    altSrc: "JavaScript Logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ariaLink: "JavaScript Documentation Website",
  },
  {
    name: "Node.js",
    imgSrc: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
    altSrc: "Node.js Logo",
    link: "https://nodejs.org/en/",
    ariaLink: "Node.js Documentation Website",
  },
  {
    name: "Python",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    altSrc: "Python Logo",
    link: "https://www.python.org/",
    ariaLink: "Python Documentation Website",
  },
  {
    name: "React",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    altSrc: "React Logo",
    link: "https://reactjs.org/",
    ariaLink: "React Documentation Website",
  },
  {
    name: "TypeScript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    altSrc: "TypeScript Logo",
    link: "https://www.typescriptlang.org/",
    ariaLink: "TypeScript Documentation Website",
  },
  {
    name: "Tailwind CSS",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    altSrc: "Tailwind CSS Logo",
    link: "https://tailwindcss.com/",
    ariaLink: "TailwindCSS Documentation Website",
  },
  {
    name: "Next.js",
    imgSrc: "https://static.netify.ai/logos/v/e/r/irepry/icon.png?v=1",
    altSrc: "Next.js Logo",
    link: "https://nextjs.org/",
    ariaLink: "Next.js Documentation Website",
  },
  {
    name: "Planetscale",
    imgSrc: "https://avatars.githubusercontent.com/u/35612527?s=280&v=4",
    altSrc: "Planetscale Logo",
    link: "https://planetscale.com/",
    ariaLink: "Planetscale Documentation Website",
  },
];

const socials = [
  {
    name: "Twitter",
    url: "https://twitter.com/YashSuhagiya",
    imgSrc: "mdi:twitter",
    ariaLabel: "Yash Suhagiya Twitter Profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/yashsuhagiya",
    imgSrc: "mdi:github",
    ariaLabel: "Yash Suhagiya GitHub Profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yashsuhagiiya/",
    imgSrc: "mdi:linkedin",
    ariaLabel: "Yash Suhagiya LinkedIn Profile",
  },
];

const workExperience = [
  {
    company: "SmartNanotubes Technologies",
    designation: "Software Developer, Internship",
    duration: "Sept 2023 – Present",
    link: "https://smart-nanotubes.com/",
  },
  {
    company: "PatentAssist.ai",
    designation: "Principal Engineer, Part-time",
    duration: "June 2023 – Present",
    link: "https://patentassist.ai/",
  },
  {
    company: "Technische Universität Dresden",
    designation: "Student Assistant, IT-Services",
    duration: "Aug 2023 – Sept 2023",
    link: "https://tu-dresden.de/",
  },
  {
    company: "Heaven Designs",
    designation: "Web Developer, Internship",
    duration: "Nov 2020 - Mar 2021",
    link: "https://heavendesigns.in/",
  },
];

const LanguageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Vue: "#2c3e50",
  PHP: "#4F5D95",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  Cpp: "#f34b7d",
  CSharp: "#178600",
  Go: "#00ADD8",
  Ruby: "#701516",
  Dart: "#00B4AB",
  Kotlin: "#F18E33",
  Rust: "#dea584",
  Swift: "#ffac45",
  Scala: "#c22d40",
  Perl: "#0298c3",
  Lua: "#000080",
  Haskell: "#5e5086",
  Elixir: "#6e4a7e",
  Clojure: "#db5855",
  CoffeeScript: "#244776",
  OCaml: "#3be133",
  Erlang: "#B83998",
  R: "#198CE7",
  D: "#ba595e",
  Julia: "#a270ba",
  Crystal: "#000100",
  FSharp: "#b845fc",
  Assembly: "#6E4C13",
  Astro: "#0d1117",
  Node: "#43853d",
  React: "#61dafb",
  MDX: "#f9ac00",
  "Jupyter Notebook": "#DA5B0B",
  Dockerfile: "#384d54",
};


export { technologies, socials, workExperience, LanguageColors };
