<template>
    <div class="wrapper">
        <div class="header maxwidth">
            <div class="text">
                <nav>
                    <div id="navtext" class="link text-base font-light text-gray-500">NAVIGATION</div>
                    <NuxtLink to="/" class="link text-base font-bold hover:text-gray-500">HOME</NuxtLink>
                    <NuxtLink to="/projects/iks" class="link text-base font-medium hover:text-gray-500">PROJECTS
                    </NuxtLink>
                    <NuxtLink to="/about" class="link text-base font-medium hover:text-gray-500">HOW I THINK</NuxtLink>
                    <NuxtLink to="/contact" class="link text-base font-medium hover:text-gray-500">GET IN CONTACT
                    </NuxtLink>
                </nav>
                <div :class="['nav2', { 'scrolled-nav2': scrollPosition > 100 }]">
                    <NuxtLink to="#" class="link text-base font-bold hover:text-gray-500">HOME</NuxtLink>
                    <NuxtLink to="#projects" class="link text-base font-medium hover:text-gray-500">PROJECTS
                    </NuxtLink>
                    <NuxtLink to="#about" class="link text-base font-medium hover:text-gray-500">HOW I THINK</NuxtLink>
                    <NuxtLink to="#contact" class="link text-base font-medium hover:text-gray-500">GET IN CONTACT
                    </NuxtLink>
                </div>
                <div class="line"></div>
                <h5>HELLO THERE! MY NAME IS</h5>
                <h1>Jannik Fauser</h1>
                <!-- <p>Ich bin ein Interaktionsdesigner mit einer Leidenschaft für die Verbindung von Technologie und Natur. Als Entdeckerfreudiger bin ich stets auf der Suche nach neuen Wegen, um Benutzererlebnisse zu gestalten, die sowohl intuitiv als auch inspirierend sind.</p> -->
                <p>Im a passionate interaction design student who likes to design and test ideas. I really like to explore new problems and test if my solution could fit the problem. Im really into smart home and plants, but i havent found a good way to connect them together yet.</p>

            </div>
            <div class="image"><img src="/images/IMG_4643.JPG" alt="Jannik Fauser"></div>
        </div>
        <div id="projects" class="mywork maxwidth">
            <div class="separating-line"></div>
            <h5>RECENT PROJECTS</h5>
            <ProjectGallery :projects="projectsList" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPosition = ref(0);

const updateScroll = () => {
    scrollPosition.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll);
});

// Projektdaten
const projectsList = [
    {
        title: "FOCAL",
        subtitle: "INVENTION DESIGN",
        coverImage: "/images/invention_cover.png",
        url: "/projects/invention",
        coworkers: ["Max Mustermann", "Lisa Schmidt"],
        tags: ["UI/UX", "AR", "Mixed Reality"],
        description: "Verlierst du beim Arbeiten am Laptop oft den Überblick über deine geöffneten Apps? Focal bringt Ordnung in dein digitales Arbeitsumfeld."
    },
    {
        title: "NERVOUS SYSTEM",
        subtitle: "INTERACTIVE COMMUNICATION",
        coverImage: "/images/ics_cover.png",
        url: "/projects/iks",
        coworkers: ["Anna Müller", "David Jung"],
        tags: ["Interactive", "Installation", "IoT"],
        description: "Eine interaktive Installation, die auf Bewegungen reagiert."
    },
    {
        title: "BOTANIFY",
        subtitle: "APP DESIGN",
        coverImage: "/images/botanify_cover.jpg",
        url: "/projects/botanify",
        coworkers: ["Laura Weber", "Tim Holz"],
        tags: ["Mobile", "UI Design", "Plants"],
        description: "Eine App zur Pflanzenpflege mit intelligenter Erkennung."
    },
    {
        title: "SOUNDSCAPE",
        subtitle: "AUDIO EXPERIENCE",
        coverImage: "/images/soundscape_cover.jpg",
        url: "/projects/soundscape",
        coworkers: ["Michael Keller"],
        tags: ["Audio", "Experience", "Interactive"],
        description: "Ein immersives Audioerlebnis, das auf die Umgebung reagiert."
    },
    {
        title: "CITYPLANNER",
        subtitle: "DATA VISUALIZATION",
        coverImage: "/images/cityplanner_cover.jpg",
        url: "/projects/cityplanner",
        coworkers: ["Sarah Becker", "Jan Wolf", "Petra Meier"],
        tags: ["Data Viz", "Urban", "Planning"],
        description: "Visualisierung urbaner Daten für die Stadtplanung."
    },
    {
        title: "ECOTRACKER",
        subtitle: "SUSTAINABLE DESIGN",
        coverImage: "/images/ecotracker_cover.jpg",
        url: "/projects/ecotracker",
        coworkers: ["Mark Johnson"],
        tags: ["Sustainability", "Tracking", "App"],
        description: "Eine Anwendung zur Verfolgung des persönlichen ökologischen Fußabdrucks."
    }
];
</script>

<style>
/* SECTION HEADER */
.header {
  display: flex;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.text {
    width: 50%;
    padding-right: 2rem
}

.text h1 {
    font-size: clamp(1.8rem, calc(1.8rem + 2vw), 4rem);
    left: -0.5vw;
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-family: 'PP Neue Corp Normal';
    font-size: 3.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.text p {
    margin-top: 0rem;
    font-size: 1.2rem;
    line-height: 2;
    max-width: 80%;

}

.text h5 {
    font-size: 0.8rem;
    font-weight: 600;
}

.link {
    margin-right: calc(0.5rem + 1vw);
}

.image {
    width: 50%;
    padding-bottom: 6rem;
}

.image img {
    max-width: 100%;
    border-radius: 1rem;
}

nav {
    position: relative;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
}

.nav2{
    /* display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 50vh;
    height: 100vh;
    padding: 1rem;
    z-index: 10; */
    display: none;
}

.scrolled-nav2 {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 50vh;
    height: 100vh;
    padding: 1rem;
    z-index: 10;
}

.line {
    width: 100%;
    flex-wrap: wrap;
    height: 0.8px;
    margin-bottom: 100px;
    background-color: #333;
}

/* /SECTION HEADER */
/* Projects */
.separating-line {
    width: 100%;
    height: 1px;
    background-color: #333;
    margin-bottom: 2rem;
}

.mywork h5 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8rem;
}

.projectcard {
    margin-bottom: 1rem;
    padding: 0;
}

/* /Projects */
/* MEDIA QUERIES */
@media (max-width: 1600px) {
  .nav2 {
    display: none;
  }
}

@media (max-width: 1400px) {
    #navtext {
        display: none;
    }
}

@media (max-width: 1000px) {
    .image {
        display: none;
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;
        position: absolute;
    }

    .text {
        width: 100%;
        padding: 0;
        padding-left: calc(8rem, 5vw);
        padding-bottom: 6rem;
    }

    .text p {
        max-width: 70%;
    }
    .description h4{
        display: none;
    }
}

@media (max-width: 600px) {

    nav {
        display: none;
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;
        position: absolute;
    }

    .text p {
        max-width: 80%;
    }

    .line {
        display: none;
    }
}

/* /MEDIA QUERIES */
</style>