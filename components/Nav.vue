<template>
  <nav class="flex justify-between w-100 py-2 pr-4 pl-6 bg-indigo-500">
    <NuxtLink to="/">
      <img src="../assets/images/logo-w.png" class="hover:backdrop-brightness-75" alt="logo">
    </NuxtLink>
    <ul class="w-100 flex justify-end items-center">
      <li v-for="[title, path] in navLinks" :key="path" class="mx-2">
        <NuxtLink class="text-slate-300 hover:text-slate-50" :to="path">
          {{ title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

const navLinks = [
  ['Posts', '/posts'],
  ['Projects', '/projects']
]
</script>

<style lang="scss" scoped>

</style>
