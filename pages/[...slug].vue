<template>
  <main class="prose prose-gray dark:prose-invert mx-auto pt-10">
    <ContentDoc tag="section">
      <template #not-found>
        <DocumentDrivenNotFound />
      </template>
    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
import { DocumentDrivenNotFound } from '#components'
</script>
