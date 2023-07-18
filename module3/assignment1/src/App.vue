<script setup>
  import TopNav from './components/TopNav.vue';
  import Home from './components/Home.vue';
  import AppFooter from './components/Footer.vue';
</script>

<template>
  <div id="app" class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <top-nav></top-nav>
    <home></home>
    <app-footer></app-footer>
  </div>
</template>

<style scoped>

</style>
