<script setup>
import { useBookStore } from "~/stores/BookStore";
import { storeToRefs } from "pinia";
import { watch } from 'vue';
import {debounce} from 'lodash'

const router = useRouter();
const route = useRoute();
const bookStore = useBookStore();
const {searchQuery, page } = storeToRefs(bookStore);

if (route.query) {
    if (route.query.page) {
        page.value = parseInt(route.query.page);
    }

    if (route.query.q) {
        searchQuery.value = route.query.q;
    }
}

const search = () => {
    page.value = 1;
    bookStore.getAllBooks();
    router.replace({
        path: '/',
        query: { q: searchQuery.value }
    })
};

watch(searchQuery, debounce(()=>{
    search()
},500));

</script>

 
<template>
    <div class="w-full md:w-auto">
        <div class="relative">
            <UInput icon="i-heroicons-magnifying-glass-20-solid" size="xl" color="blue-100" variant="none"
                :trailing="false"
                class="block md:w-[450px] rounded-md w-full outline-none focus:bg-transparent focus:border-b focus:ring-blue-100 focus:border-blue-100"
                type="text" name="q" id="search" v-model="searchQuery" placeholder="Search book by title..." required />
        </div>
    </div>
</template>

<style lang="">
    
</style>