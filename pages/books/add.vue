<script setup>
import BookForm from '~/components/BookForm.vue';

useHead({
    title: 'Add Book',
    meta: [
        {
            name: 'description',
            content: 'add book page'
        },
        {
            name: 'og:description',
            content: 'add book page'
        },
        {
            name: 'og:title',
            content: 'Add Book'
        }
    ]
});

</script>

<template>
    <div>
        <BookForm />
    </div>
</template>

