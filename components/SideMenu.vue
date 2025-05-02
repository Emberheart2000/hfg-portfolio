<template>
    <div :class="['side-menu', { 'side-menu-visible': isVisible }]">
      <nav class="side-nav neo-nav">
        <a href="#home" :class="['side-nav-link', { 'active': currentSection === 'home' }]" @click.prevent="scrollToSection('home')">HOME</a>
        <a href="#projects" :class="['side-nav-link', { 'active': currentSection === 'projects' }]" @click.prevent="scrollToSection('projects')">PROJECTS</a>
        <NuxtLink to="/about" class="side-nav-link">HOW I THINK</NuxtLink>
        <NuxtLink to="/contact" class="side-nav-link">CONTACT</NuxtLink>
      </nav>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { scrollToElement, getCurrentSection } from '~/utils/scroll';
  
  const isVisible = ref(false);
  const scrollThreshold = 100;
  const currentSection = ref('home');
  const sectionIds = ['home', 'projects'];
  
  const checkScroll = () => {
    isVisible.value = window.scrollY > scrollThreshold;
    
    // Update current section
    const activeSection = getCurrentSection(sectionIds, 200);
    if (activeSection) {
      currentSection.value = activeSection;
    }
  };
  
  const scrollToSection = (sectionId) => {
    scrollToElement(sectionId, 100);
  };
  
  onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    // Check initial scroll position
    checkScroll();
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
  });
  </script>
  
  <style>
  .side-menu {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 1.5rem 1rem;
    background-color: var(--neo-bg-color);
    border-radius: 0 1rem 1rem 0;
    box-shadow: 
      8px 8px 16px var(--neo-shadow-dark), 
      -5px -5px 10px var(--neo-shadow-light);
    z-index: 90;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    transform: translateY(-50%) translateX(-100%);
  }
  
  .side-menu-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }
  
  .side-nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .side-nav-link {
    position: relative;
    color: var(--neo-text-color);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 0.5rem;
    white-space: nowrap;
    transition: all 0.3s ease;
    border-radius: 0.5rem;
  }
  
  .side-nav-link:hover {
    color: var(--neo-accent-color);
    transform: translateX(3px);
  }
  
  .side-nav-link.active {
    color: var(--neo-accent-color);
    box-shadow: 
      inset 3px 3px 6px var(--neo-shadow-dark), 
      inset -3px -3px 6px var(--neo-shadow-light);
  }
  
  /* Hide on smaller screens */
  @media (max-width: 768px) {
    .side-menu {
      display: none;
    }
  }
  </style>