import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  devToolbar: {
    enabled: false,
  },
  site: "https://cskskvku.vercel.app",
  output: "static",
  cacheDir: "./cacheDir",
  integrations:[mdx()]
})
