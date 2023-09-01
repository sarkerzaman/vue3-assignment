<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>  
    <header>
      <Navigation/>
    </header>
    <main>
      <router-view></router-view>
      <!-- The component associated with the current route will be rendered here -->
    </main>
    <footer>
      <!-- Your footer content can be here -->
    </footer> 
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  margin-top: 20px;
}
</style>
