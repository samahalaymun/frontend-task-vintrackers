<script setup>
import BookFormInput from '~/components/ui/BookFormInput.vue';
import Button from './ui/Button.vue';
import { reactive, onMounted, defineProps } from 'vue';
import { useBookStore } from "~/stores/BookStore";
import { storeToRefs } from "pinia";
import Spinner from '~/components/ui/Spinner.vue';
import { z } from 'zod';

const schema = z.object({
    title: z.string().trim().min(3, 'Must be at least 3 characters'),
    author: z.string().trim().min(1, "author is required"),
    genre: z.string().trim().min(1, "genre is required"),
    year: z.number().min(1, "year is required"),
    coverImage: z.string().trim().min(1, "cover image is required")
})

const router = useRouter();
const bookStore = useBookStore();
const { isLoadingUpdate } = storeToRefs(bookStore);
const props = defineProps({
    book: {
        type: Object
    }
});
const { book } = props;

const form = reactive({
    title: '',
    author: '',
    genre: '',
    year: 1990,
    coverImage: '',
    isFavorite: false,

});

const handleSubmit = async () => {
    const updatedBookData = {
        title: form.title,
        author: form.author,
        genre: form.genre,
        year: form.year,
        coverImage: form.coverImage,
        isFavorite: form.isFavorite
    };
    if (book !== undefined) {
        bookStore.updateBook(updatedBookData, book.id)
    } else {
        bookStore.addBook(updatedBookData)
    }

    router.push("/");
};

onMounted(async () => {
    form.title = book?.title || ""
    form.author = book?.author || ""
    form.genre = book?.genre || ""
    form.year = book?.year || 1990
    form.coverImage = book?.coverImage || ""
    form.isFavorite = book?.isFavorite || false

});

</script>
<template>
    <section class="w-full ">
        <div class=" md:max-w-2xl md:mx-auto md:m-0">
            <UCard class="px-4 py-8 mb-4 shadow-sm rounded-md">
            <h1 class="h3-bold w-full text-center mb-6">{{ book ? "Update" : "Add New" }} Book</h1>
            <div v-if="isLoadingUpdate" class="text-center w-full h-full">
                <Spinner class="spinner" />
            </div>
            <UForm :schema="schema" :state="form" v-else class="flex flex-col gap-6" @submit.prevent="handleSubmit">
                <BookFormInput inputLabel="Book Title" inputType="text" inputName="title" inputId="title"
                    v-model="form.title" inputPlaceholder="book title..." required />

                <BookFormInput inputLabel="Book author" inputType="text" inputName="author" inputId="author"
                    v-model="form.author" inputPlaceholder="Book author..." required />

                <BookFormInput inputLabel="Book genre" inputType="text" inputName="genre" inputId="genre"
                    v-model="form.genre" inputPlaceholder="Book genre..." required />

                <BookFormInput inputLabel="Year" inputType="number" inputName="year" inputId="year" v-model="form.year"
                    inputPlaceholder="Book year..." required="true" />
                <BookFormInput inputLabel="Cover image" inputType="text" inputName="coverImage" inputId="coverImage"
                    v-model="form.coverImage" inputPlaceholder="Book cover image (Url)..." required />

                <div>
                    <UCheckbox v-model="form.isFavorite" name="isFavorite"
                        label="Is Favorite" color="blue-100" />

                </div>

                <Button size="xl" block  variant="solid" type="submit" :loading="isLoadingUpdate"
                     :title="`${book ? 'Update' : 'Add'} Book`" />
            </UForm>
        </UCard>
        </div>
    </section>
</template>