<template>
    <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
      <!-- <ProjectCard title="bwegt" subtitle="application" image="images/monstera.avif" url="projects/bwegt"/>
      <ProjectCard title="ICS" subtitle="exhibition" image="images/ics_cover.png" url="projects/ics"/>
      <ProjectCard title="Interface" subtitle="prototype" image="images/interface_cover.png" url="projects/interface"/> -->
      <div id="navbox" class="col-span-1 md:col-start-2 md:col-span-3 lg:col-start-3 lg:col-span-5">
        <div id="nav"class="flex flex-row items-center h-full space-x-10">
          <div class="text-lg font-light text-gray-500">NAVIGATION</div>
          <NuxtLink to="/" class="text-lg font-bold hover:text-gray-500">HOME</NuxtLink>
          <NuxtLink to="/projects/ics" class="text-lg font-medium hover:text-gray-500">PROJECTS</NuxtLink>
          <NuxtLink to="/about" class="text-lg hover:text-gray-500">HOW I THINK</NuxtLink>
          <NuxtLink to="/contact" class="text-lg hover:text-gray-500">GET IN CONTACT</NuxtLink>
        </div>
        <div id="navline"class="w-full h-0.5 bg-black mt-4"></div>
      </div>
      <div id="textbox" class="col-span-1 md:col-start-2 md:col-span-3 lg:col-start-3 lg:col-span-5">
        <div class="text-lg">HELLO THERE! MY NAME IS</div>
        <div class="text-4xl">Jannik Fauser</div>
        <div>ein Interaktionsdesigner mit einer Leidenschaft für die Verbindung von Technologie und Natur. Als Entdeckerfreudiger bin ich stets auf der Suche nach neuen Wegen, um Benutzererlebnisse zu gestalten, die sowohl intuitiv als auch inspirierend sind.</div>
      </div>
      <div id="profilepicture" class="col-span-1 md:col-start-3 md:col-span-2 lg:col-start-5 lg:col-span-5 flex justify-center mt-8">
        <img src="/images/jannik.jpg" alt="Profile Picture" class="w-100 h-130 object-cover">
      </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>