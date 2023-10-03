<template>
  <button @click="toggleColorMode">
    <icon name="mdi:theme-light-dark" size="2rem" />
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

function toggleColorMode():void {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped>

</style>
