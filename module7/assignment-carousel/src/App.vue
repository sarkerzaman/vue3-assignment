<template>
  <h2>Assignment Vue3 Image Carousel</h2>
  <div class="carousel">
    <button class="btn btn-primary mx-2" @click="previousSlide">Previous</button>
    <img :src="currentImage" alt="Carousel Image" />
    <button class="btn btn-primary mx-2" @click="nextSlide">Next</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const images = [
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
];
const currentIndex = ref(0);
const autoSlideInterval = 3000;

const currentImage = computed(() => images[currentIndex.value]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const previousSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

let autoSlideTimer;

// Initialize carousel with sample images on component mount
onMounted(() => {
  autoSlideTimer = setInterval(nextSlide, autoSlideInterval);
});

// Clean up tasks or ongoing processes before component unmounts
onBeforeUnmount(() => {
  clearInterval(autoSlideTimer);
});
</script>

<style>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

img {
  max-width: 70%;
}
</style>
