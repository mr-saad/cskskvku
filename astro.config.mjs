import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [],
  experimental: {
    contentCollectionCache: true
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true
  },
  devToolbar: {
    enabled: false
  },
  site: "https://cskskvku.vercel.app",
  output: "static"
})
