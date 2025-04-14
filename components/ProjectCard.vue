<template>
    <div class="maxwidth">
        <NuxtLink :to="url">
            <div
                class="projectcard bg-white shadow-lg hover:shadow-xl hover:top-[-2px] rounded-lg p-4 hover:scale-[101%] hover:z-10 transition-all duration">
                <div class="description">
                    <h2 class="title mb-2 font-bold">{{ title }}</h2>
                    <h3>{{ subtitle }}</h3>
                    <h4>{{ description }}</h4>
                </div>
                <div class="coverimage"><img :src="image" alt=""></div>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const test = "hallo test"
defineProps({
    title: String,
    subtitle: String,
    image: String,
    url: String,
    description: String,
})

</script>

<style>
/* Benutzerdefinierte Tailwind-Klassen für Schatten */
@layer utilities {
  .bg-custom-gray {
    background-color: #F0F0F3;
  }
  .shadow-custom {
    box-shadow: -10px -10px 30px 0 #FFFFFF, 10px 10px 30px 0 rgba(174, 174, 192, 0.4);
  }
  .shadow-custom-hover {
    box-shadow: -10px -10px 30px 0 #FFFFFF, 10px 10px 30px 0 rgba(174, 174, 192, 0.6);
  }
  .inner-shadow {
    box-shadow: inset -10px -10px 10px 0 rgba(174, 174, 192, 0.25), inset 10px 10px 10px 0 #FFFFFF;
  }
}
.title{
    font-size: 1.5rem;
}
.projectcard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    color: #333
}
.coverimage{
    width: 65%;
    padding-bottom: 0;
    object-fit: cover;
}
.coverimage img{
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
}
.description{
    width: 35%;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
}
.description h3{
    font-size: 0.75rem;
    font-weight: 600;
    color: #AEAEAE;
    margin-bottom: 0.5rem; 
}
.description h4{
    font-size: 1.25rem;
    font-weight: light;
}
</style>