<script setup>
import { ref, defineEmits } from 'vue';

const { emit } = defineEmits(['messageEmitted']);

const message = ref('');

const emitMessage = () => {
    message.value = 'Custom message from child!';
    emit('messageEmitted', message.value);
};
</script>
<template>
<div class="bg-green p-2 border border-gray-300">
    <h2 class="text-lg font-semibold mb-2">Child Component</h2>
    <p>Received Message: {{ message }}</p>
    <button @click="emitMessage"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click for Emit Message
    </button>
</div>
</template>