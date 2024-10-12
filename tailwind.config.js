module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ['"Grotesk"', "Arial", "cursive"],
    },
    extend: {
      colors: {
        primary: "#5471b6",
        secondary: "#48cfc4",
        accent: "#48cfc4",
      },
      backgroundImage: {
        "blue-green-gradient":
          "linear-gradient(247.23deg, #48cfc4 0%, #48cfc4 100%)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
