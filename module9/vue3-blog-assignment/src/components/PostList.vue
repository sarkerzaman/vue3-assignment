<template>
    <div class="card" v-for="post in posts" :key="post.id">
      <img class="card-img-top" :src="post.img" />
      <div class="card-body">
        <h2 class="card-title text-start">{{ post.title }}</h2>
        <p class="card-text text-start">{{ post.short }}</p>
        <p class="text-start">
          <router-link :to="`/post/${post.id}`" class="btn btn-primary">View Details</router-link>
        </p>
      </div>
    </div> 
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const postId = ref(route.params.id);
  const posts = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${postId.value}`);
      posts.value = response.data;

    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  });
  </script>