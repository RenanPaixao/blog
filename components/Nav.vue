<template>
  <nav
    class="bg-primary dark:bg-primary-dark"
  >
    <div class="flex justify-between w-100 py-2 pr-4 text-lg pl-6 max-w-screen-2xl mx-auto">
      <NuxtLink to="/">
        <img src="../assets/images/logo-w.png" class="hover:backdrop-brightness-75 dark:hover:backdrop-brightness-200" alt="logo">
      </NuxtLink>
      <ul class="w-100 flex justify-end items-center">
        <li v-for="[title, icon, path] in navLinks" :key="path" class="mx-2">
          <NuxtLink
            class="nav-link flex align-middle justify-center"
            :to="path"
          >
            <span class="sm:hidden">
              <icon :name="icon" size="2rem" />
            </span>
            <span class="hidden sm:inline my-auto">{{ title }}</span>
          </NuxtLink>
        </li>
        <li class="mx-2">
          <DarkModeIcon class="nav-link" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { DarkModeIcon } from '#components'

const navLinks = [
  ['Posts', 'mdi:post-lamp', '/posts'],
  ['Projects', 'mdi:briefcase-variant', '/projects']
]
</script>

<style lang="scss" scoped>
.nav-link{
	@apply text-text-color hover:text-black dark:text-primary dark:hover:text-soft-dark;
}
</style>
