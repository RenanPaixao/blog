<template>
  <nav class="w-100 py-3 pr-2 bg-indigo-500">
    <ul class="w-100 flex justify-end items-center">
      <li v-for="[title, path] in navLinks" :key="path" class="mx-2">
        <NuxtLink class="text-slate-300" :to="path">
          {{ title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

const navLinks = [
  ['Home', '/'],
  ['Posts', '/posts'],
  ['Projects', '/projects']
]
</script>

<style lang="scss" scoped>

</style>
