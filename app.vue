<template>
  <div v-cloak class="bg-primary dark:bg-primary-dark min-h-screen">
    <Nav />
    <NuxtPage class="max-sm:px-4" />
  </div>
</template>

<script lang="ts" setup>
// This way of useHead use avoid flickering when get out of the blog and back again.
useAsyncData(async() => {
  await useHead({
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  })
})

</script>
<style lang="scss">
// Avoid flickering on page load
[v-cloak] > * { display:none }

// Remove underline from links inside headings added by typography plugin
// and add a hash before the heading to indicate it's a anchor link
h1, h2, h2, h3, h4, h5, h6{
	a{
		text-decoration-line: none !important;
	}:after{
		content: '#';
		margin-left: 0.5rem;
		visibility: hidden;
	}:hover:after{
		visibility: visible;
		text-decoration-line: underline;
	}
}

 //Override typography color style
.light{
    p, li::marker{
      color: #3D3D4F;
    }
    hr{
    border-color: rgba(61, 61, 79, 0.6);
  }
}
.dark{
    li::marker{
      color: #d1d5db;
    }
  hr{
    border-color: rgba(209, 213, 219, 0.57);
  }
}
</style>
