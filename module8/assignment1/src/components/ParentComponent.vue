<script setup>
import { defineProps, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const emittedMessage = ref({ message: 'Default message from parent' });

const handleMessageEmitted = (message) => {
  emittedMessage.message = message;
};
</script>
<template>
  <section class="mx-auto container">
  <h1 class="my-10">Parent Component</h1>
  <p class="my-5">
    <h2 class="text-xl">Message in Parent</h2>
    Emitted Message: {{ emittedMessage.message }}
    
  </p>

  <ChildComponent v-model:message="emittedMessage.message" @messageEmitted="handleMessageEmitted" />
  </section>
</template>
