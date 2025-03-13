<template>
  <!-- <ProjectCard title="bwegt" subtitle="application" image="images/monstera.avif" url="projects/bwegt"/>
      <ProjectCard title="ICS" subtitle="exhibition" image="images/ics_cover.png" url="projects/ics"/>
      <ProjectCard title="Interface" subtitle="prototype" image="images/interface_cover.png" url="projects/interface"/> -->
  <!-- <div>
    <div class="herosection pr-10 pl-10 w-full h-screen">
      <div class="herowrap max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div id="left-column" class="space-y-10">
          <div id="navbox">
            <div id="nav" class="flex flex-row items-center h-full space-x-10">
              <div class="text-lg font-light text-gray-500">NAVIGATION</div>
              <NuxtLink to="/" class="text-lg font-bold hover:text-gray-500">HOME</NuxtLink>
              <NuxtLink to="/projects" class="text-lg font-medium hover:text-gray-500">PROJECTS</NuxtLink>
              <NuxtLink to="/about" class="text-lg hover:text-gray-500">HOW I THINK</NuxtLink>
              <NuxtLink to="/contact" class="text-lg hover:text-gray-500">GET IN CONTACT</NuxtLink>
            </div>
            <div id="navline" class="w-full h-0.5 bg-black mt-4"></div>
          </div>
          <div id="textbox">
            <div class="text-lg">HELLO THERE! MY NAME IS</div>
            <div class="text-4xl">Jannik Fauser</div>
            <div>ein Interaktionsdesigner mit einer Leidenschaft für die Verbindung von Technologie und Natur. Als
              Entdeckerfreudiger bin ich stets auf der Suche nach neuen Wegen, um Benutzererlebnisse zu gestalten, die
              sowohl intuitiv als auch inspirierend sind.</div>
          </div>
        </div>
        <div id="right-column" class="flex justify-center items-center">
          <img src="/images/jannik.jpg" alt="Profile Picture" class="w-full h-auto object-cover">
        </div>
      </div>
    </div>
  </div> -->
  <div class="wrapper">
  <div class="container">
    <div class="text">
      <nav>
        <div class="mr-5 text-base font-light text-gray-500">NAVIGATION</div>
        <NuxtLink to="/" class="mr-5 text-base font-bold hover:text-gray-500">HOME</NuxtLink>
        <NuxtLink to="/pages/projects/ics" class="mr-5 text-base font-medium hover:text-gray-500">PROJECTS</NuxtLink>
        <NuxtLink to="/about" class="mr-5 text-base font-medium hover:text-gray-500">HOW I THINK</NuxtLink>
        <NuxtLink to="/contact" class="mr-5 text-base font-medium hover:text-gray-500">GET IN CONTACT</NuxtLink>
      </nav>
            <h5>HELLO THERE! MY NAME IS</h5>
            <h1>Jannik Fauser</h1>
            <p>Ein Interaktionsdesigner mit einer Leidenschaft für die Verbindung von Technologie und Natur. Als Entdeckerfreudiger bin ich stets auf der Suche nach neuen Wegen, um Benutzererlebnisse zu gestalten, die sowohl intuitiv als auch inspirierend sind.</p>
        </div>
        <div class="image">
            <img src="/images/jannik.jpg" alt="Jannik Fauser">
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
        .wrapper {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #fff;
        }
        .container {
            display: flex;
            max-width: 1300px;
            /* align-items: center; */
        }
        .text {
            width: 50%;
            padding-right: min(1rem,5%)
        }
        .text h1 {
            font-size: clamp(1.8rem, calc(1.8rem + 2vw), 4rem);
            font-weight: 550;
            left: -0.5vw;
        }
        .text p {
            font-size: 16px;
            color: #333;
        }
        .text h5 {
            font-size: 16px;
            color: #333;
        }
        .image {
            width: 50%;
        }
        .image img {
            max-width: 100%;
            border-radius: 10px;
        }
        nav {
            position: relative;
            margin-bottom: 100px;
            display: flex;
            flex-direction: row;
            white-space: nowrap;
        }
    </style>