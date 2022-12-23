<template>
  <main class="prose prose-gray prose-h1:pl-5 dark:prose-invert mx-auto pt-10">
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
