<template>
    <div class="maxwidth">
        <NuxtLink :to="url">
            <div
                class="projectcard bg-white text-black shadow-lg hover:shadow-xl hover:top-[-2px] rounded-lg p-4 hover:scale-[101%] hover:z-10 transition-all duration">
                <div class="description">
                    <h3 class="title mb-2 font-bold">{{ title }}</h3>
                    <h4>{{ subtitle }}</h4>
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
.title{
    font-size: clamp(1rem, calc(1.8rem + 2vw), 4rem);
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
}
</style>