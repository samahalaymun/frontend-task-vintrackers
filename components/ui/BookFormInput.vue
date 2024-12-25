<script setup>
import { defineProps, defineOptions, defineEmits } from 'vue';

defineOptions({
    inheritAttrs: false
});

defineProps({
    inputType: {
        type: String
    },
    className: {
        type: String
    },
    inputName: {
        type: String
    },
    inputPlaceholder: {
        type: String
    },
    inputLabel: {
        type: String
    },
    inputId: {
        type: String
    }, modelValue: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    },

});

const emit = defineEmits(['update:modelValue']);
const $handleInput = (event) => {
    emit('update:modelValue', event.target.value);
};

</script>


<template>
    <UFormGroup :name="inputName" :label="inputLabel" :ui="{ label: { base: 'text-text font-bold mb-2' } }">
        <UInput  padding="xl" :ui="{ strategy: 'override' }" size="xl" variant="none" :model-value="modelValue" @input="$handleInput" :id="inputId"
            :name="inputName"
            :class="className"
            :type="inputType" :placeholder="inputPlaceholder" />
    </UFormGroup>
</template>