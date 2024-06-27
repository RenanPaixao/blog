export default defineNuxtConfig({
  nitro: {
    static: true,
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      link: [{
        rel: 'icon',
        // @ts-expect-error
        type: 'image/x-icon',
        href: '/favicon.ico'
      }]
    }
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
  '@nuxtjs/plausible', // https://github.com/nuxt/devtools
  '@nuxt/devtools', "@nuxthq/studio"]
})
