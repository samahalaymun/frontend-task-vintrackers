<script setup>
import Header from "@/components/header";
import Footer from "@/components/Footer";

useHead({
    title: '',
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | BookShop` : 'BookShop';
    },
    meta: [
        {
            name: "description",
            content: "BookShop Home page"
        },
        {
            name: "keywords",
            content: "books, search book, add book"
        },
    ]
});

</script>
<template>
    <div>
        <Header />
        <!------output the page content--------->
        <UContainer class=" min-h-[100vh] container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <slot />
        </UContainer>
        <Footer />
    </div>
</template>