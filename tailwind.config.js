/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#ffc3a0',
        'primary': '#ffafbd',
        'secondary': '#ffc3a0'
      },
      backgroundImage: {
        'blue-green-gradient': 'linear-gradient(247.23deg, #ffafbd 0%, #ffc3a0 100%)',
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  }
}
