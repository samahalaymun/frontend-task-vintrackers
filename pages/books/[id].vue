<script setup>
import BookForm from '~/components/BookForm.vue';
import { useBookStore } from "~/stores/BookStore";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { storeToRefs } from "pinia";

const { id } = useRoute().params;
const bookStore = useBookStore();
const { currentBook } = storeToRefs(bookStore);
await bookStore.getCurrentBook(id)
useHead({
    title: `${currentBook?.value.title}`,
    meta: [
        {
            name: 'description',
            content: 'update book page'
        },
        {
            name: 'og:description',
            content: 'update book page'
        },
        {
            name: 'og:title',
            content: `${currentBook?.value.title}`
        }
    ]
});

</script>

<template>
    <div>
        <BookForm  :book="currentBook" />
    </div>
</template>

