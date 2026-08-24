import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://silvestrinigor.github.io',
  base: '/igor-silvestrin-about',

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
})