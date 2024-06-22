<template>
  <section>
    <ContentList v-slot="{ list: projectList }" path="/projects">
      <template v-for="(projectsByYear) in groupByYear(projectList)" :key="JSON.stringify(projectsByYear)">
        <template v-if="projectsByYear[0]._path !== '/projects'">
          <h2>{{ new Date(projectsByYear[0].date).getFullYear() }}</h2>
          <div class="list">
            <ProjectItem
              v-for="project in projectsByYear"
              :key="project.link"
              v-bind="project"
            />
          </div>
        </template>
      </template>
    </ContentList>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/components/content/ProjectItem.vue'


function groupByYear(list: Project[]) {
  const projectsByYear = list.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(project)
    return acc
  }, {} as Record<string, Project[]>)
  
  // Sort the projects by year in ascending order
  return Object.entries(projectsByYear)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([, projects]) => projects)
}
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  
  margin-bottom: 2rem;
}

h2{
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  color: #333;
  
  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
}

section {
  padding: 1rem;
}

@media (max-width: 600px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>
