<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">                
                    <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>              
                </li>
                <li class="nav-item" v-for="item in categories" :key="item.id">
                    <router-link :to="`/postlist/${item.id}`" class="nav-link">{{ item.name }}</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const categories = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://basic-blog.teamrabbil.com/api/post-categories');
        categories.value = response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
});
</script>
  