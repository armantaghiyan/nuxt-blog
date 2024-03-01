<script setup lang="ts">
const modelValue = defineModel()

interface TextInputProps {
    type: 'text' | 'password',
    id: string,
    rules?: string
}

const props = withDefaults(defineProps<TextInputProps>(), {
    type: 'text',
    rules: '',
    id: '',
})
</script>

<template>
    <div class="relative pt-5">
        <input :type="type" :id="id" class="border border-gray-900" v-model="modelValue" :data-rules="rules">
    </div>
</template>