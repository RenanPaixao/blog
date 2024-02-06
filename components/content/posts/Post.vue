<template>
  <article
    class="
      border-2 bg-[#DBCEF3] dark:bg-[#19074B] rounded-lg mb-3 pb-2 pt-1 pl-2 hover:cursor-pointer
    hover:scale-105 transform transition duration-200 ease-in-out"
    @click="navigateToPost"
  >
    <header class="px-3">
      <h2 class="mt-2 mb-3">
        {{ props.post.title }}
      </h2>
      <p class="mb-0 opacity-90 dark:opacity-95">
        {{ props.post.description || 'No description' }}
      </p>
      <small>
        <time class="opacity-90">{{ props.post.readTime }}</time>
      </small>
    </header>
  </article>
</template>

<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
import { navigateTo } from '#app'

interface Post extends MarkdownParsedContent{
	readTime?: number
}

const props = defineProps<{
	post: Post
}>()

function navigateToPost():void {
  navigateTo(props.post._path)
}

</script>
