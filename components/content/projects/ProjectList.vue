<template>
  <section class="px-4 grid grid-cols-2 max-[500px]:grid-cols-1 gap-4">
    <Project
      v-for="project in projects"
      :key="project.id"
      :name="project.title"
      :description="project.description"
      :link="project.link"
      :icon="project.icon"
    />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, queryContent } from '#imports'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const projects = ref<ParsedContent[]>()
onMounted(async() => {
  // TODO: Get only properties needed for each project
  projects.value = await queryContent('projects')
    .where({ _id: { $ne: 'content:projects:index.md' } }).limit(10).find()
})
</script>

<style lang="scss" scoped>

</style>
