<script setup>
  import { ref } from 'vue';
  import { appData } from '../data/data.js';
  
  const footerText = ref(appData.footerText);  
  
</script>

<template>
    <div class="max-w-xl flex items-center justify-between bg-gray-100">
        <div class="mt-5">
            <span v-html="footerText"></span>
        </div>
    </div>
</template>
   
<style scoped>

</style>
  