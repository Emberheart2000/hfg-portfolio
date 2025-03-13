<template>
    <div class="wrapper">
        <div class="header">
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
                <div class="line"></div>
                <h5>HELLO THERE! MY NAME IS</h5>
                <h1>Jannik Fauser</h1>
                <!-- <p>Ich bin ein Interaktionsdesigner mit einer Leidenschaft für die Verbindung von Technologie und Natur. Als Entdeckerfreudiger bin ich stets auf der Suche nach neuen Wegen, um Benutzererlebnisse zu gestalten, die sowohl intuitiv als auch inspirierend sind.</p> -->
                <p>I am a passionate interaction-design student. Specifically i am interested in the connection between
                    technics and nature. Since i love to explore i am always down to improve the usability of products
                    to improve them and get happier clients as a result.</p>

            </div>
            <div class="image"><img src="/images/jannik.jpg" alt="Jannik Fauser"></div>
        </div>
        <!-- <div class="mywork">
            <h2>MY WORK</h2>
            <div class="projects">
                <ProjectCard title="IKS" subtitle="Innovative Kommunikationsstrategien" image="" url="/projects/iks" />
                <ProjectCard title="Invention" subtitle="Innovative Kommunikationsstrategien" image=""
                    url="/projects/invention" />
            </div>
        </div> -->
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
.wrapper {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: calc(0.5rem + 5vw);
    padding-top: 8rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
    background-color: #fff;
    color: #333;
}

/* SECTION HEADER */
.header {
    display: flex;
    max-width: 1300px;
}

.text {
    width: 50%;
    padding-right: 2rem
}

.text h1 {
    font-size: clamp(1.8rem, calc(1.8rem + 2vw), 4rem);
    font-weight: 550;
    left: -0.5vw;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
}

.text p {
    margin-top: 0.5rem;
    font-size: 16px;
    line-height: 2;
    max-width: 80%;

}

.text h5 {
    font-size: 1rem;
    font-weight: 600;
}

.link {
    margin-right: calc(0.5rem + 1vw);
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
    display: flex;
    flex-direction: row;
    white-space: nowrap;
}

.line {
    width: 100%;
    flex-wrap: wrap;
    height: 1px;
    margin-bottom: 100px;
    background-color: #333;
}

/* /SECTION HEADER */
/* Projects */

/* /Projects */
/* MEDIA QUERIES */
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
        margin-left: calc(8rem, 5vw);
    }

    .text p {
        max-width: 50%;
    }
}

@media (max-width: 600px) {
    .wrapper {
        justify-content: center;
    }

    nav {
        display: none;
    }

    .text p {
        max-width: 80%;
    }
}

/* /MEDIA QUERIES */
</style>