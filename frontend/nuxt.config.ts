// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:8000',
    }
  },
  modules: [

  ],
  css: ['~/assets/css/main.css'],
}

export default config