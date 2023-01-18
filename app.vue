<template>
  <div v-cloak class="bg-primary dark:bg-primary-dark min-h-screen">
    <Nav />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#imports'

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>
<style lang="scss">
// Avoid flickering on page load
[v-cloak] > * { display:none }
</style>
