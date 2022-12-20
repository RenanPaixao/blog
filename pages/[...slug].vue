<template>
  <main class="prose prose-slate dark:prose-invert">
    <ContentDoc>
      <template #not-found>
        <DocumentDrivenNotFound />
      </template>
    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
import { DocumentDrivenNotFound } from '#components'
</script>
