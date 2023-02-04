<template>
  <main class="prose prose-headings:opacity-95 prose-gray prose-h1:pl-5 dark:prose-invert mx-auto pt-10">
    <NuxtLayout :name="currentLayout">
      <ContentDoc tag="section">
        <template #not-found>
          <DocumentDrivenNotFound />
        </template>
      </ContentDoc>
    </NuxtLayout>
  </main>
</template>
<script setup lang="ts">
import { computed, useRoute } from '#imports'
import { DocumentDrivenNotFound } from '#components'

const route = useRoute()

const currentLayout = computed(() => {
  return route.path.match(/posts\/.+/) ? 'post-layout' : ''
})
</script>
