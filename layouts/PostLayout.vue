<template>
  <section class="pb-10">
    <slot />
    <div class="flex justify-end">
      <button
        class="text-text-color hover:text-black dark:text-primary dark:hover:text-soft-dark"
        @click="router.back()"
      >
        <icon name="mdi:arrow-left-thin" /> Back
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from '#app'

const router = useRouter()
</script>
