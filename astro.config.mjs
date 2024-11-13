import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true,
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  devToolbar: {
    enabled: false,
  },
  trailingSlash: "always",
  site: "https://cskskvku.vercel.app",
  output: "static",
  cacheDir: "./cacheDir",
})
