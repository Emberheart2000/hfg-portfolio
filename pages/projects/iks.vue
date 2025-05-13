<template>
  <div class="wrapper">
    <div class="project-container maxwidth">
      <div class="project-header">
        <h5 class="subtitle-text teal-text">INTERACTIVE COMMUNICATION</h5>
        <h1 class="neo-title">NERVOUS SYSTEM</h1>
      </div>
      
      <div class="project-hero neo-card">
        <img src="/images/ics/ics_cover.png" alt="ICS Project">
      </div>
      
      <div class="project-content neo-container">
        <div class="project-info">
          <div class="info-item">
            <h3 class="teal-text">Year</h3>
            <p>2024</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Category</h3>
            <p>Interactive Exhibition</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Tools</h3>
            <p>Arduino, Processing, Sensors</p>
          </div>
        </div>
        
        <div class="project-description">
          <h2 class="section-title teal-accent">Project Overview</h2>
          <p>
            The Nervous System project explores the connection between technology and human biology. 
            It creates an interactive experience that simulates how our nervous system responds to external stimuli.
          </p>
          
          <p>
            Visitors can interact with various sensors that trigger visual and auditory responses, 
            creating a dynamic and immersive experience that changes based on their actions.
          </p>
          
          <div class="neo-separator"></div>
          
          <h2 class="section-title teal-accent">Process & Development</h2>
          <p>
            The development process involved extensive research into both neurological science and 
            interactive technologies. Working with a team of three, we explored different ways to 
            translate biological responses into digital interactions.
          </p>
          
          <div class="project-gallery">
            <div class="gallery-item neo-card">
              <img src="/images/ics/ics_cover.png" alt="Process Image 1">
            </div>
            <div class="gallery-item neo-card">
              <img src="/images/ics/ics_cover.png" alt="Process Image 2">
            </div>
          </div>
          
          <div class="neo-separator"></div>
          
          <h2 class="section-title teal-accent">Outcome & Learnings</h2>
          <p>
            The final installation was exhibited at the HfG Schwäbisch Gmünd, where it received positive 
            feedback for its innovative approach to connecting technology with human biology. 
            The project taught us valuable lessons about interactive design and user engagement in 
            exhibition spaces.
          </p>
        </div>
      </div>
      
      <div class="project-navigation">
        <NuxtLink to="/" class="neo-button outline">Back to Home</NuxtLink>
        
        <!-- Show next project button if there is a next project -->
        <NuxtLink 
          v-if="nextProject && !haveVisitedAll" 
          :to="nextProject.url" 
          class="neo-button">
          Next Project
        </NuxtLink>
        
        <!-- Show previous projects button if all projects have been visited -->
        <NuxtLink 
          v-if="haveVisitedAll && prevProject" 
          :to="prevProject.url" 
          class="neo-button">
          Previous Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '~/composables/useProjectsStore';
import { onMounted, computed } from 'vue';

const projectId = 'iks';
const projectsStore = useProjectsStore();

// Get next and previous projects
const nextProject = computed(() => projectsStore.getNextProject(projectId));
const prevProject = computed(() => projectsStore.getPreviousProject(projectId));

// Check if all projects have been visited
const haveVisitedAll = computed(() => projectsStore.hasVisitedAll());

onMounted(() => {
  // Mark this project as visited when the page loads
  projectsStore.markVisited(projectId);
});
</script>

<style>
.project-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.project-header {
  margin-bottom: 3rem;
  text-align: center;
}

.teal-text {
  color: var(--neo-accent-color) !important;
}

.teal-accent {
  color: var(--neo-accent-color);
  font-weight: 600;
}

.project-hero {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 
    15px 15px 30px var(--neo-shadow-dark), 
    -15px -15px 30px var(--neo-shadow-light);
}

.project-hero img {
  width: 100%;
  display: block;
}

.project-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item h3 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-item p {
  font-size: 1.1rem;
  color: var(--neo-text-color);
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--neo-text-color);
}

.project-description p {
  margin-bottom: 1.5rem;
}

.project-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-item {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark), 
    -8px -8px 16px var(--neo-shadow-light);
}

.gallery-item img {
  width: 100%;
  display: block;
}

.project-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.project-navigation .neo-button.outline {
  margin-right: auto;
}

@media (max-width: 768px) {
  .project-content {
    grid-template-columns: 1fr;
  }
  
  .project-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .project-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .project-navigation .neo-button {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 500px) {
  .project-info {
    grid-template-columns: 1fr;
  }
  
  .project-gallery {
    grid-template-columns: 1fr;
  }
}
</style>