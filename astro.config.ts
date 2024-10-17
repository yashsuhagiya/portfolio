import { defineConfig, envField } from "astro/config";
import { remarkReadingTime } from "./src/utils/readingTime.js";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "min-light",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: "shiki",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
    prefetch(),
    react(),
  ],
  site: "https://yashsuhagiya.com/",
  experimental: {
    serverIslands: true,
    env: {
      schema: {
        SPOTIFY_CLIENT_ID: envField.string({
          context: "server",
          access: "secret",
          default: "",
        }),
        SPOTIFY_CLIENT_SECRET: envField.string({
          context: "server",
          access: "secret",
          default: "",
        }),
        SPOTIFY_REFRESH_TOKEN: envField.string({
          context: "server",
          access: "secret",
          default: "",
        }),
      },
    },
  },
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
