<template>
  <footer class="footer-container">
    <div class="maxwidth footer-content">
      <div class="footer-links">
        <NuxtLink to="/" class="footer-link">Home</NuxtLink>
        <NuxtLink to="/projects/iks" class="footer-link">Projects</NuxtLink>
        <NuxtLink to="/about" class="footer-link">How I Think</NuxtLink>
        <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
        <NuxtLink to="/impressum" class="footer-link">Impressum</NuxtLink>
        <NuxtLink to="/datenschutz" class="footer-link">Datenschutz</NuxtLink>
      </div>
      <div class="footer-copyright">
        <p>&copy; {{ new Date().getFullYear() }} Jannik Fauser. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// No additional logic needed for footer
</script>

<style>
.footer-container {
  width: 100%;
  padding: 3rem 0;
  background-color: #f0f0f3;
  margin-top: 6rem;
}

.footer-content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.footer-link {
  margin: 0 1.5rem;
  font-size: 0.9rem;
  color: #555;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #000;
  transform: translateY(-2px);
}

.footer-copyright {
  font-size: 0.8rem;
  color: #888;
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-link {
    margin: 0.5rem 0;
  }
}
</style>