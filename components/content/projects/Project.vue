<template>
  <nuxt-link
    class="no-underline font-normal
    hover:scale-105 transform
    transition duration-200
    ease-in-out min-h-[91px]"
    :to="link"
    target="_blank"
  >
    <!--	  TODO: Centralize these colors in a unique place -->
    <div
      class="
      flex px-2 pt-2 pb-2
      bg-[#DBCEF3] dark:bg-[#19074B]
      prose-headings:m-0
      border-2 border-b-0 rounded-t hover:cursor-pointer
			"
    >
      <icon :name="icon" size="3.4rem" class="opacity-90 mr-3 self-center shrink-0" />
      <div>
        <h3 class="opacity-90 flex items-center font-bold">
          {{ name }}
        </h3>
        <small class="line-clamp-2 opacity-70">{{ description }}</small>
      </div>
    </div>
    <div class="border-2 border-t-2 rounded-b">
      <ul class="flex flex-wrap my-2 mx-1 p-0 justify-center">
        <li
          v-for="tag in tags"
          :key="tag"
          class="
          bg-[#DBCEF3] dark:bg-[#19074B]
          text-xs px-2 py-1 mr-2 mb-2
          rounded-full
          opacity-70
          list-none
          "
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>

defineProps<{
	name: string
	description: string
	link: string
	icon: string
  tags: string[]
}>()
</script>
