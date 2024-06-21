<template>
  <div class="list">
    <ContentList v-slot="{ list: projectList }" path="/projects">
      <template v-for="(project, index) in projectList" :key="project._path">
        <ProjectItem
          v-if="index !== 0"
          :key="project._path"
          v-bind="project"
        />
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
