<template>
    <div class="maxwidth">
        <NuxtLink :to="url">
            <div class="projectcard neo-card">
                <div class="description">
                    <h2 class="title">{{ title }}</h2>
                    <h3 class="subtitle teal-text">{{ subtitle }}</h3>
                    <h4 class="project-desc">{{ description }}</h4>
                </div>
                <div class="coverimage">
                    <img :src="image" alt="">
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    subtitle: String,
    image: String,
    url: String,
    description: String,
})
</script>

<style>
.teal-text {
  color: var(--neo-accent-color) !important;
}

.projectcard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 1rem;
    color: var(--neo-text-color);
    background-color: var(--neo-bg-color);
    margin-bottom: 2rem;
    overflow: hidden;
    box-shadow: 
        10px 10px 20px var(--neo-shadow-dark), 
        -10px -10px 20px var(--neo-shadow-light);
}

.projectcard:hover {
    transform: translateY(-5px);
    box-shadow: 
        15px 15px 30px var(--neo-shadow-dark), 
        -15px -15px 30px var(--neo-shadow-light);
}

.coverimage {
    width: 65%;
    padding-bottom: 0;
    object-fit: cover;
    overflow: hidden;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

.coverimage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
}

.projectcard:hover .coverimage img {
    transform: scale(1.05);
}

.description {
    width: 35%;
    padding: 2rem;
}

.title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--neo-text-color);
}

.subtitle {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
}

.project-desc {
    font-size: 1.1rem;
    font-weight: 400;
    color: #555;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .projectcard {
        flex-direction: column-reverse;
    }
    
    .description, .coverimage {
        width: 100%;
    }
    
    .coverimage {
        height: 250px;
        border-radius: 1rem 1rem 0 0;
    }
    
    .coverimage img {
        border-radius: 1rem 1rem 0 0;
    }
}
</style>