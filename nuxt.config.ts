// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    styles: resolve(__dirname, 'assets/styles')
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    documentDriven: true
  },

  css: ['styles/reset.scss'],
  tailwindcss: {
    exposeConfig: true,
    injectPosition: {
      after: 'styles/reset.scss'
    },
    configPath: 'tailwind.config.ts'
  }
})
