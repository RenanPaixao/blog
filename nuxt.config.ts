// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    styles: resolve(__dirname, 'assets/styles')
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  content: {
    documentDriven: true
  },

  css: ['styles/reset.scss'],

  tailwindcss: {
    injectPosition: {
      after: 'styles/reset.scss'
    }
  }
})
