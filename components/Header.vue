<template>
  <header class="neo-header">
    <div class="header-container maxwidth">
      <div class="logo">
        <NuxtLink to="/">JF</NuxtLink>
      </div>
      <nav class="neo-nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/projects/iks" class="nav-link">Projects</NuxtLink>
        <NuxtLink to="/about" class="nav-link">How I Think</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
// No additional logic needed
</script>

<style>
.neo-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--neo-bg-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
}

.logo a {
  color: var(--neo-text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 
    5px 5px 10px var(--neo-shadow-dark), 
    -5px -5px 10px var(--neo-shadow-light);
  transition: all 0.3s ease;
}

.logo a:hover {
  box-shadow: 
    7px 7px 14px var(--neo-shadow-dark), 
    -7px -7px 14px var(--neo-shadow-light);
}

.nav-link {
  position: relative;
  color: var(--neo-text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--neo-accent-color);
}

.nav-link.router-link-exact-active {
  color: var(--neo-accent-color);
  box-shadow: 
    inset 3px 3px 6px var(--neo-shadow-dark), 
    inset -3px -3px 6px var(--neo-shadow-light);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .neo-nav {
    width: 100%;
    justify-content: space-between;
  }
}
</style>