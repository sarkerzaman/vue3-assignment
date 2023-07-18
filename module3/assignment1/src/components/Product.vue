<script setup>
import { ref, onMounted } from 'vue';

  props: {
    products: {
      type: Array,
      required: true
    }
  },

const activeProductId = ref(0);

// Automatically cycle through products every 3 seconds
onMounted(() => {
    setInterval(() => {
    activeProductId.value = (activeProductId.value + 1) % props.products.length;
    }, 3000);
});

</script>

<template>
    <div class="product-slide">
      <div v-for="product in products" :key="product.id" class="product-item" :class="{ active: product.id === activeProductId }">
        <img :src="product.image" :alt="product.name" class="product-image">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
</template>
  
<style scoped>
  .product-slide {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .product-item {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out;
  }
  
  .product-item.active {
    opacity: 1;
    visibility: visible;
  }
  
  .product-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  
  .product-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .product-description {
    margin-top: 5px;
    color: #666;
  }
</style>
  