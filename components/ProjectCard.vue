<template>
    <div class="maxwidth">
        <NuxtLink :to="url">
            <div class="bg-black text-white shadow-none hover:shadow hover:top-[-2px] rounded-lg p-4 hover:scale-[101%] hover:z-10 transition-all duration">
            <img :src="image" alt="">
            <h3 class="text-2xl mb-2 font-bold">{{ title }}</h3>
            <h4>{{ subtitle }}</h4>
        </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const test="hallo test"
defineProps({
    title: String,
    subtitle: String,
    image: String,
    url: String
})

</script>

<style></style>