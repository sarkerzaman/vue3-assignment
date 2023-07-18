<script setup>
    import { ref } from 'vue';
    import { appData } from '../data/data.js';
    const menuItems = ref(appData.menuItems);
    const logoImage = "/images/tech-ninja-logo.png"
    
</script>

<template>
    <div class="max-w-xl flex items-start justify-between">
      <div class="w-1/3 h-80">
        <a href="/">
            <img :src="logoImage" alt="Logo" class="w-200">
        </a>
      </div>
      <nav class="w-2/3 h-80 text-center">
        <ul class="flex justify-end space-x-2 pt-2">
          <li v-for="menuItem in menuItems" :key="menuItem.id">
            <a :href="menuItem.link">{{ menuItem.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
</template>
  
<style scoped>
 
</style>
  