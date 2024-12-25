<script setup>
import BookCard from '~/components/BookCard.vue';
import Paginator from '~/components/Paginator.vue';
import { useBookStore } from "~/stores/BookStore";
import { storeToRefs } from "pinia";
import Spinner from '~/components/ui/Spinner.vue';
import EmptyPage from '~/components/ui/EmptyPage.vue';

const bookStore = useBookStore();
const router = useRouter();
const route = useRoute();
const { books, isLoading, limit, page } = storeToRefs(bookStore);
await bookStore.getAllBooks();

const handlePaginate = (page) => {
    router.push({
        path: '/',
        query: {
            ...route.query,
            page
        }
    }).then(() => {
        bookStore.setPage(page);
    });
};

</script>

<template>
    <div class="">
        <div v-if="isLoading" class="text-center w-full h-full">
            <Spinner />
        </div>
        <div v-else>
            <div v-if="books.data.length > 0">
                <div class="p-3 border-b border-border mb-3 flex justify-end items-center">
                    <span class="text-text-secondary body-medium">{{ books.meta.total }}&nbsp;</span>
                    <span class="body-medium text-text-secondary"> Books </span>
                </div>
                <div class="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-8">
                    <BookCard v-for="book in books.data" :key="book.id" :book="book" />
                </div>
            </div>
            <EmptyPage v-else title="No books available now..." linkName="Create New Book" link="/books/add"
                content="Go to add page and create new book" />
        </div>
        <div class=" flex justify-center items-center py-5 mt-24">
            <Paginator :current-page="page" :limit="limit" :total-results="books.meta?.total"
                @on-paginate="handlePaginate" :total-pages="books.meta?.total_pages" />
        </div>
    </div>
</template>