<template>
    <div class="wrapper">
        <div class="hero-section maxwidth">
            <div class="hero-content">
                <h5 class="subtitle-text">HELLO THERE! MY NAME IS</h5>
                <h1 class="neo-title">Jannik Fauser</h1>
                <p class="hero-description">I'm a passionate interaction design student who likes to design and test ideas. I really like to explore new problems and test if my solution could fit the problem. I'm really into smart home and plants, but I haven't found a good way to connect them together yet.</p>
                <div class="hero-buttons">
                    <a href="#projects" class="neo-button">View Projects</a>
                    <a href="/contact" class="neo-button outline">Get in Touch</a>
                </div>
            </div>
            <div class="hero-image neo-card">
                <img src="/images/IMG_4643.JPG" alt="Jannik Fauser">
            </div>
        </div>

        <div id="projects" class="projects-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text">RECENT PROJECTS</h5>
            </div>

            <div class="projects-grid">
                <ProjectCard title="FOCAL" 
                    subtitle="INVENTION DESIGN" 
                    image="/images/invention_cover.png"
                    url="/projects/invention"
                    description="Verlierst du beim Arbeiten am Laptop oft den Überblick über deine geöffneten Apps? Focal bringt Ordnung in dein digitales Arbeitsumfeld, indem Anwendungen räumlich anordnet werden können – direkt an den Wänden um dich herum." />
                    
                <ProjectCard title="NERVOUS SYSTEM" 
                    subtitle="INTERACTIVE COMMUNICATION" 
                    image="/images/ics_cover.png"
                    url="/projects/iks" 
                    description="An interactive exhibition piece that explores the connection between technology and human nervous systems." />
                    
                <ProjectCard title="INVENTION" 
                    subtitle="INNOVATIVE KOMMUNIKATIONSSTRATEGIEN" 
                    image="/images/invention_cover.png"
                    url="/projects/invention"
                    description="Exploring new ways of communication through innovative design concepts and strategies." />
            </div>
        </div>

        <div class="project-gallery">
            <div class="gallery-grid">
                <div v-for="(project, index) in projects" :key="index" class="project-card">
                    <div class="neo-card">
                        <div class="project-image-container">
                            <img :src="project.coverImage" :alt="project.title" class="project-image" />
                            <div class="project-overlay">
                                <div class="project-tags">
                                    <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="project-tag">
                                        {{ tag }}
                                    </span>
                                </div>
                                <div class="project-coworkers">
                                    <p>mit:</p>
                                    <span v-for="(coworker, coworkerIndex) in project.coworkers" :key="coworkerIndex">
                                        {{ coworker }}{{ coworkerIndex < project.coworkers.length - 1 ? ', ' : '' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <p class="project-subtitle">{{ project.subtitle }}</p>
                            <NuxtLink :to="project.url" class="project-link">Details anzeigen</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => [],
  }
});
</script>

<style>
/* Hero Section */
.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
    padding: 2rem 0;
}

.hero-content {
    width: 50%;
    padding-right: 4rem;
}

.subtitle-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: #888;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.neo-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    color: var(--neo-text-color);
}

.hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
}

.neo-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--neo-text-color);
    background-color: var(--neo-bg-color);
    border-radius: 0.8rem;
    text-decoration: none;
    box-shadow: 
        8px 8px 16px var(--neo-shadow-dark), 
        -8px -8px 16px var(--neo-shadow-light);
    transition: all 0.3s ease;
}

.neo-button:hover {
    transform: translateY(-3px);
    box-shadow: 
        10px 10px 20px var(--neo-shadow-dark), 
        -10px -10px 20px var(--neo-shadow-light);
}

.neo-button:active {
    transform: translateY(0);
    box-shadow: 
        inset 5px 5px 10px var(--neo-shadow-dark), 
        inset -5px -5px 10px var(--neo-shadow-light);
}

.neo-button.outline {
    background-color: transparent;
    box-shadow: none;
    position: relative;
    border: 2px solid var(--neo-shadow-dark);
}

.neo-button.outline:hover {
    background-color: var(--neo-bg-color);
    box-shadow: 
        5px 5px 10px var(--neo-shadow-dark), 
        -5px -5px 10px var(--neo-shadow-light);
}

.hero-image {
    width: 45%;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 
        15px 15px 30px var(--neo-shadow-dark), 
        -15px -15px 30px var(--neo-shadow-light);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Projects Section */
.projects-section {
    padding: 4rem 0;
}

.section-header {
    margin-bottom: 4rem;
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

/* Media Queries */
@media (max-width: 1024px) {
    .hero-section {
        flex-direction: column;
    }
    
    .hero-content, .hero-image {
        width: 100%;
    }
    
    .hero-content {
        padding-right: 0;
        margin-bottom: 3rem;
    }
}
</style>
