<script setup>
import Button from './ui/Button.vue';
import Modal from './ui/Modal.vue';
import { useBookStore } from "~/stores/BookStore";
import { ref } from "vue";

const bookStore = useBookStore();
const showModal = ref(false);
const props = defineProps({
    book: Object,
});
const isFavorite = ref(props.book.isFavorite)

const showDeleteModal = () => {
    showModal.value = !showModal.value
};

const hideDeleteModal = () => {
    showModal.value = false;
}
const deleteCurrentBook = async () => {
    await bookStore.deleteBook(props.book.id);
    showModal.value = false;
};

async function toggleFavoriteBook() {
    isFavorite.value = !isFavorite.value;
}

watch(isFavorite, () => {
    const toggleFavBook = {
        isFavorite: isFavorite.value
    }
    bookStore.updateBook(toggleFavBook, props.book.id)
});
</script>

<template>
    <div class="rounded-md shadow-sm hover:shadow-md relative">
        <Modal v-if="showModal" modalTitle="Delete Book" @hide-modal="hideDeleteModal"
            @confirm-action="deleteCurrentBook" :modalContent="`Are you sure you want to delete <strong>${book.title}</strong> Book`" />
        <NuxtLink class="rounded-md" :to="'/books/' + book.id">
            <img alt="book-img" :src="book.coverImage" class="rounded-t-md w-full" />
            <div class="p-2">
                <div class=" border-b border-border pb-2">
                    <h1 class="base-bold">{{ book.title }}</h1>
                    <h4 class="small-regular mt-3 ">By {{ book.author }}</h4>
                </div>
            </div>
            <div class="flex justify-between p-2">
                <span>{{ book.year }}</span>

                <div class="flex items-center gap-2">
                    <Button variant="ghost"  icon="pi pi-trash text-text-secondary"
                        @click.prevent="showDeleteModal()">
                    </Button>
                    <Button variant="ghost" @click.prevent="toggleFavoriteBook()" 
                        :icon="isFavorite ? 'text-red-500 pi pi-heart-fill' : 'pi pi-heart text-text-secondary'" />
                </div>
            </div>
        </NuxtLink>
        <span class="absolute left-2 top-2 text-white small-regular py-1 px-2 bg-dark-3 rounded-md">{{ book.genre
            }}</span>
    </div>
</template>