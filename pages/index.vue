<template>
  <div class="wrapper">
  <div class="container">
    <div class="text">
      <nav>
        <div class="mr-5 text-base font-light text-gray-500">NAVIGATION</div>
        <NuxtLink to="/" class="mr-5 text-base font-bold hover:text-gray-500">HOME</NuxtLink>
        <NuxtLink to="/projects/iks" class="mr-5 text-base font-medium hover:text-gray-500">PROJECTS</NuxtLink>
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