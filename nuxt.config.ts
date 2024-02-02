// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    }
  },
  devtools: { enabled: true },
  routeRules: {
    '/': { ssr: true },
    '/csr': { ssr: false },
    '/ssr': { ssr: true },
    '/ssr2': { ssr: true },
    '/ssg': { prerender: true },
    '/isr': { swr: 3600 },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  alias: {
    '@/*': './*'
  }
})