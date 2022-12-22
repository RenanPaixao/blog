<template>
  <article
    class="border border-2 rounded-lg mb-5 pb-2 hover:cursor-pointer"
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
