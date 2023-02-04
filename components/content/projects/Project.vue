<template>
  <nuxt-link class="no-underline font-normal" :to="link" target="_blank">
    <!--	  TODO: Centralize these colors in a unique place -->
    <div class="bg-[#B7A2F6] dark:bg-[#19074B] hover:scale-105 min-h-[91px] prose-headings:m-0 flex border rounded px-2 pt-2 pb-1 hover:cursor-pointer">
      <icon :name="icon" size="3.4rem" class="mr-3 self-center shrink-0" />
      <div>
        <h3 class="flex items-center font-bold">
          {{ name }}
        </h3>
        <small class="line-clamp-2 opacity-75">{{ description }}</small>
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
