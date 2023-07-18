<script setup>
  import { ref } from 'vue';
  import { appData } from '../data/data.js';

  const appIcon = ref(appData.appIcon);
  const welcomeText = ref(appData.welcomeText);
  const description = ref(appData.description);

</script>

<template>
  <main class="max-w-xl p-8 bg-white rounded-lg shadow-md">
    <div class="text-center">
      <img :src="appIcon" alt="App Icon" class="w-32 mx-auto mb-4">
      <h2 class="text-2xl font-bold text-gray-800">{{ welcomeText }}</h2>
      <p class="text-gray-600">{{ description }}</p>
    </div>
    <div class="mt-8">
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Download App
      </button>
    </div>
  </main>
</template>

<style scoped>

</style>
