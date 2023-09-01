<template>
    <div class="card">
        <div v-if="post">
            <img class="card-img-top" :src="post.img" />
            <div class="card-body">
                <h2 class="card-title text-start">{{ post.title }}</h2>
                <p class="card-text text-start">{{ post.content }}</p>
                <p class="text-start">
                    <router-link to="/" class="btn btn-primary">Back to Home</router-link>
                </p>
            </div>
        </div>
        <div v-else>
            <p>Post details not found</p>
            <p class="text-start">
                <router-link to="/" class="btn btn-primary">Back to Home</router-link>
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
  const post = ref({});
  
  onMounted(async () => {
    try {
        const response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${postId.value}`);
                
        if(response.data.postDetails !== null){
            post.value = {
                title: response.data.postDetails.title,
                content: response.data.postDetails.content,          
                img: response.data.postDetails.img,
            };
        }else{
            post.value = null
        }

    } catch (error) {
        console.error('Error fetching post:', error);
    }
  });
  </script>
  
  <style scoped>
  
  </style>
  