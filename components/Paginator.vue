<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    totalResults: {
        type: Number,
        required: true
    },
    limit: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    },
    totalPages:{
        type: Number,
        required: true
    }

});
defineEmits(['onPaginate']);

</script>

<template>
    <div class="paginator rounded-sm" v-if="totalResults > 0 && totalPages > 1">
        <ul class="">
            <li @click="$emit('onPaginate', currentPage > 1 ? currentPage - 1 : currentPage)"
                class="border border-border hover:bg-blue-100 hover:text-white inline p-2 md:p-4 cursor-pointer text-md">
                <i class="pi pi-angle-double-left"></i>
            </li>
            <li class="border border-border hover:bg-blue-100 hover:text-white inline p-2 md:p-4 cursor-pointer text-md"
                :class="{ disabled: num == currentPage }" v-for="num in totalPages" :key="num"
                @click="$emit('onPaginate', num)">{{ num }}</li>
            <li @click="$emit('onPaginate', currentPage < totalPages ? currentPage + 1 : totalPages)"
                class="border border-border hover:bg-blue-100 hover:text-white inline p-2 md:p-4 cursor-pointer text-md">
                <i class="pi pi-angle-double-right"></i>
            </li>
        </ul>
    </div>
</template>