<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio of Jannik Fauser',
  meta: [
    { name: 'description', content: 'Interaction Design Portfolio of Jannik Fauser, HfG Schwäbisch Gmünd' }
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
  description: 'Interaction Design Portfolio of Jannik Fauser, HfG Schwäbisch Gmünd',
  ogTitle: 'Portfolio of Jannik Fauser',
  ogDescription: 'Interaction Design Portfolio of Jannik Fauser',
  ogImage: '/og-image.png',
  ogUrl: 'https://jannikfauser.design',
  twitterTitle: 'Portfolio of Jannik Fauser',
  twitterDescription: 'Interaction Design Portfolio of Jannik Fauser',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image'
});
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding-top: 6rem; /* For fixed header */
}
</style>