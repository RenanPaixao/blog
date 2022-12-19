<template>
  <button @click="toggleColorMode">
    <icon name="mdi:theme-light-dark" size="2rem" />
  </button>
</template>

<script lang="ts" setup>
import { useColorMode } from '#imports'

const colorMode = useColorMode()

function toggleColorMode():void {
  const active = colorMode.value
  colorMode.preference = active === 'dark' ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped>

</style>
