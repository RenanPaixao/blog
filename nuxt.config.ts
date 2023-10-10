// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '%': resolve(__dirname, 'components/content/')
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  routeRules: {
    '/**': { isr: true }
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark'
      }
    }
  },
  tailwindcss: {
    exposeConfig: true,
    configPath: 'tailwind.config.ts'
  }
})
