<script  setup>
import { defineProps } from 'vue';
import Button from '~/components/ui/Button.vue';
import Divider from '~/components/ui/Divider.vue';

defineProps({
    className: {
        type: String
    },
    modalTitle: {
        type: String
    },
    modalContent: {
        type: String
    }
});
defineEmits(['hideModal','confirmAction']);
</script>

<template>
    <div
        class="flex items-center justify-center fixed top-0 w-full h-[100vh] left-0 right-0 p-5 z-40 bg-black bg-opacity-70">
        <UCard class="bg-card rounded-md w-[90%] ss:w-[500px]">
            <div class="flex flex-col gap-3 pb-5">
                <h4 class="h4-bold">{{modalTitle}}</h4>
                <p v-html="modalContent"></p>
            </div>
            <Divider />
            <div class="flex gap-3 justify-end pt-5">
                <Button size="xl" color="gray"  variant="outline" title="Cancel" @click="$emit('hideModal')" />
                <Button size="xl"  variant="solid" title="Confirm"
                    @click="$emit('confirmAction')" />
            </div>
        </UCard>
    </div>
</template>