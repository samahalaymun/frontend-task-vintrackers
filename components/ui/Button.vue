<script setup>
const props = defineProps({
    className: String,
    title: String,
    icon: String,
    type: String,
    loading: Boolean,
    variant: String,
    color: String,
    block: Boolean,
    size: String
});
</script>
<template>
    <UButton :label="title" :ui="{strategy:'override'}" :loading="loading" :class="`relative ${className}`" @click="$emit('clickButton')" :type="type" :size="size"
        :block="block" :color="color" :variant="variant">
        <i v-if="icon" :class="icon"></i>
    </UButton>
</template>
