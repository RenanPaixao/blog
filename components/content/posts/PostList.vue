<template>
  <section class="px-4">
    <Post v-for="post in posts" :key="post._id" :post="post" />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, queryContent } from '#imports'
import Post from '%/posts/Post.vue'

const posts = ref([])

onMounted(async() => {
  posts.value = await queryContent('posts').find()
})

</script>
