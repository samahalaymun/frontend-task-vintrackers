<script setup>
import Logo from "@/components/Logo.vue"
import Search from "@/components/Search.vue"
</script>

<template>
    <header class="bg-background shadow-sm">
        <UContainer class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-24 items-center gap-4  md:justify-between">
                <NuxtLink to="/">
                    <Logo />
                </NuxtLink>
                <div class="flex  items-center gap-4 flex-1 md:flex-initial">
                    <Search />
                    <NuxtLink to="/books/add" class="flex gap-2 items-center body-medium">
                        <i class="pi pi-plus text-blue-100"></i>
                        <span class="hidden md:block">Add Book</span>
                    </NuxtLink>
                </div>
            </div>
        </UContainer>
    </header>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-text;
}
</style>