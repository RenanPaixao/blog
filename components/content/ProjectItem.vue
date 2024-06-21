<template>
  <div :data-content-id="id" class="wrapper">
    <div class="cover">
      <h1>{{ props.title }}</h1>
    </div>
    
    <div class="footer">
      <div>
        <p>{{ props.description }}</p>
        <time>{{ formatDate(props.date) }}</time>
      </div>
      
      <NuxtLink :to="props.link" target="_blank">
        Read more
      </NuxtLink>
    </div>
    
    <div v-if="props.badges">
      <span
        v-for="(badge, index) in props.badges"
        :key="index"
        :style="{
          backgroundColor: badge?.bg || 'rgba(0, 0, 0, 0.3)',
          color: badge?.color || 'white'
        }"
      >
        {{ typeof badge === 'string' ? badge : badge.content }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Project = {
  // eslint-disable-next-line vue/prop-name-casing
  _path: string
  link: string
  title: string
  date: string
  description: string
  badges?: { bg: string, text: string, content: string, color: string }[]
}

const props = defineProps<Project>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const id = computed(() => {
// @ts-ignore
  return (process.dev || useContentPreview()?.isEnabled()) ? props.article?._id : undefined
})
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #f4f4f4;
  }
}

time {
  font-size: 0.8rem;
}

span {
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  p{
    font-size: 0.9rem;
    margin: 0;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    @media (prefers-color-scheme: dark) {
      color: #c4c4c4;
    }
    
    @media (prefers-color-scheme: light) {
      color: #333;
    }
  }
  
  time {
    
    @media (prefers-color-scheme: dark) {
      color: #c4c4c4;
    }
    font-size: 0.8rem;
  }
  
  a {
    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
    text-decoration: none;
    min-width: fit-content;
    margin-left: 1rem;
    
    background-color: var(--color-primary-500);
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    
    @media (prefers-color-scheme: dark) {
      background-color: var(--color-primary-700);
    }
    
    &:hover {
      animation: pulse 1.5s ease-in;
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(179, 241, 255, 0.7);
      }
      70% {
        transform: scale(1.1);
        box-shadow: 0 0 0 10px rgba(179, 241, 255, 0);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(179, 241, 255, 0);
      }
    }
    }
    
  }
  
}
</style>

<!--

    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
    text-decoration: none;
    min-width: fit-content;
    margin-left: 1rem;
    
    background: linear-gradient(190deg, var(--color-primary-100), var(--color-primary-700));
    border: none;
    border-radius: 25px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  
    :hover {
    background-color: #2ecc71;
    color: white;
    }
  }
-->
