<template>
  <nuxt-link class="no-underline font-normal" :to="link" target="_blank">
    <!--	  TODO: Centralize these colors in a unique place -->
    <div
      class="
      flex px-2 pt-2 pb-2
      bg-[#B7A2F6] dark:bg-[#19074B]
      prose-headings:m-0
      hover:scale-105 min-h-[91px]
      border border-2 rounded hover:cursor-pointer
			transform transition duration-200 ease-in-out"
    >
      <icon :name="icon" size="3.4rem" class="opacity-90 mr-3 self-center shrink-0" />
      <div>
        <h3 class="opacity-90 flex items-center font-bold">
          {{ name }}
        </h3>
        <small class="line-clamp-2 opacity-70">{{ description }}</small>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>

defineProps<{
	name: string
	description: string
	link: string
	icon: string
}>()
</script>
