<template>
  <div class="bg-primary dark:bg-primary-dark min-h-screen">
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
