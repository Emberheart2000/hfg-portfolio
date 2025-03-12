<template>
  <div>
    <h1>Home</h1>
    <NuxtLink to="/projects/Ics" class="hover:font-bold">ICS</NuxtLink>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard title="bwegt" subtitle="application" image="images/monstera.avif" url="projects/bwegt"/>
      <ProjectCard title="ICS" subtitle="exhibition" image="images/ics_cover.png" url="projects/ics"/>
      <ProjectCard title="Interface" subtitle="prototype" image="images/interface_cover.png" url="projects/interface"/>
    </div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>