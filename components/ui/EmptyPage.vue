<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String,
    content:String,
    link:String,
    linkName:String
});
</script>


<template>
    <div  class="w-full h-[600px]  justify-center items-center p-10 flex flex-col gap-3">
        <h3 class="base-semibold ">{{ title }}</h3>
        <p>{{ content }}</p>
        <NuxtLink :to="link" class="text-blue-100 underline">
            {{ linkName }}
        </NuxtLink>
    </div>

</template>