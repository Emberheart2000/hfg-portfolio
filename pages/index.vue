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
                <div class="nav2">
                    <div id="navtext" class="link text-base font-light text-gray-500">NAVIGATION</div>
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
                <p>I am a passionate interaction-design student. Specifically i am interested in the connection between
                    technics and nature. Since i love to explore i am always down to improve the usability of products
                    to improve them and get happier clients as a result.</p>

            </div>
            <div class="image"><img src="/images/jannik.jpg" alt="Jannik Fauser"></div>
        </div>
        <div id="projects"class="mywork maxwidth">
            <div class="separating-line"></div>
            <h5>RECENT PROJECTS</h5>
            <div class="projects">
                <ProjectCard title="FOCAL" subtitle="INVENTION DESIGN" image="/images/invention_cover.png"
                    url="/projects/invention"
                    description="Verlierst du beim Arbeiten am Laptop oft den Überblick über deine geöffneten Apps? Focal bringt Ordnung in dein digitales Arbeitsumfeld, indem Anwendungen räumlich anordnet werden können – direkt an den Wänden um dich herum. Mit verschiedenen Gesten kannst du Apps zu dir ziehen und so nahtlos zwischen drei verschiedenen Informationsstufen wechseln. So entsteht eine neue, strukturierte Art des digitalen Arbeitens, die sich an deine Bedürfnisse anpasst. Focal ist ein innovatives Mixed-Reality-Interaktionskonzept, entwickelt im Rahmen von Invention Design 1." />
                <ProjectCard title="NERVOUS SYSTEM" subtitle="Interactive Communication" image="/images/ics_cover.png"
                    url="/projects/iks" description="blubliblibbibliblub" />
                <ProjectCard title="Invention" subtitle="Innovative Kommunikationsstrategien" image=""
                    url="/projects/invention" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
/* SECTION HEADER */
.header {
    display: flex;
    top: 0;
    left: 0;
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
    height: 1px;
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