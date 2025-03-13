<template>
  <div>
    <!-- <Header /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio of Jannik',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

useSeoMeta({
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '/og-image.png',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '/og-image.png',
  twitterCard: 'summary'
});
</script>