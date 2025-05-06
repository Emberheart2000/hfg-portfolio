<template>
  <div class="wrapper">
    <div class="about-container maxwidth">
      <h1 class="neo-title">How I Think</h1>
      
      <div class="neo-container about-content">
        <p>
          Design is an iterative process. The greatest ideas don't come from purely inventing things, it's about developing existing products in specific directions and to rethink if they still match their purpose from time to time.
        </p>
        
        <div class="neo-separator"></div>
        
        <p>
          The biggest enemy of design? Habits. People tend to do things as they are used to do, even if there are better ways to solve a problem. And often habits are good, they protect us from chaos and give us structure, but sometimes we have to reconsider them to achieve our next level.
        </p>
        
        <div class="about-image neo-card">
          <!-- <img src="/images/IMG_4643.JPG" alt="Jannik Fauser"> -->
        </div>
        
        <h2 class="neo-subtitle">My Approach</h2>
        <p>
          I believe in understanding problems deeply before jumping to solutions. This means spending time with users, observing their behaviors, and mapping out the entire experience journey. Only then can we create solutions that truly resonate.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// No additional logic needed
</script>

<style>
.about-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
}

.about-content p {
  margin-bottom: 2rem;
}

.about-image {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin: 3rem 0;
  box-shadow: 
    15px 15px 30px var(--neo-shadow-dark), 
    -15px -15px 30px var(--neo-shadow-light);
}

.about-image img {
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .about-content {
    font-size: 1.1rem;
  }
}
</style>