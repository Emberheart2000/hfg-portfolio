<template>
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

<style scoped>
.project-gallery {
  width: 100%;
  padding: 2rem 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
}

.project-card {
  position: relative;
  height: 100%;
}

.neo-card {
  background-color: #F0F0F3;
  border-radius: 15px;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    -10px -10px 30px 0 #FFFFFF,
    10px 10px 30px 0 rgba(174, 174, 192, 0.4);
}

.neo-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    -15px -15px 30px 0 #FFFFFF,
    15px 15px 35px 0 rgba(174, 174, 192, 0.5);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.neo-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.neo-card:hover .project-overlay {
  opacity: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  background-color: #F0F0F3;
  color: #333;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  box-shadow: inset 2px 2px 5px rgba(174, 174, 192, 0.25), inset -2px -2px 5px #FFFFFF;
}

.project-coworkers {
  color: white;
  font-size: 0.9rem;
}

.project-coworkers p {
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.project-info {
  padding: 1.5rem;
  background-color: #F0F0F3;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.project-subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-block;
  background-color: #F0F0F3;
  color: #333;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 
    -5px -5px 10px #FFFFFF,
    5px 5px 10px rgba(174, 174, 192, 0.4);
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 
    -7px -7px 14px #FFFFFF,
    7px 7px 14px rgba(174, 174, 192, 0.5);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}
</style>