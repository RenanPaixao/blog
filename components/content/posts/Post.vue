<template>
  <article
    class="
    border border-2 bg-[#B7A2F6] dark:bg-[#19074B] rounded-lg mb-3 pb-2 hover:cursor-pointer
    hover:scale-105 transform transition duration-200 ease-in-out"
  >
    <header class="px-3">
      <h2 class="mt-2 mb-3">
        {{ post.title }}
      </h2>
      <p class="mb-0">
        {{ post.description || 'No description' }}
      </p>
      <small>
        <time>7 min read</time>
      </small>
    </header>
  </article>
</template>

<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface Post extends MarkdownParsedContent{
	_path: string
	_draft: boolean
	_partial: boolean
	title: string
	_id: string
	_source: string
	_file: string,
	_extension: string
}

defineProps<{
	post: Post
}>()

</script>
