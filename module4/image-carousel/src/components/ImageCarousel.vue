<script setup>
import {ref} from 'vue'

const images = ref([
    {
        src: "images/image1.png",
        title: "Slide Image1 Title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been will be distracted..."
    },
    {
        src: "images/image2.png",
        title: "Slide Image2 Title",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..."
    },
    {
        src: "images/image3.png",
        title: "Slide Image3 Title",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from..."
    },
    {
        src: "images/image4.png",
        title: "Slide Image4 Title",
        description: "Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetief from..."
    },
    {
        src: "images/image5.png",
        title: "Slide Image5 Title",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from..."
    },
    {
        src: "images/image6.png",
        title: "Slide Image6 Title",
        description: " of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first..."
    },
    {
        src: "images/image7.png",
        title: "Slide Image7 Title",
        description: "f you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle..."
    },
])

// Current slide index
const currentSlide = ref(0);

// Move to the previous slide
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
};

// Move to the next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};
</script>

<template>
<div class="image-carousel">
    <h2>Vue.js 3 Image Carousel</h2>
    <div id="carouselExampleControls" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" :class="['carousel-item', index === currentSlide?'active':'']">
                <img :src="image.src" :alt="image.title" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>{{ image.title }}</h3>
                    <p>{{ image.description }}</p>
                </div>                
            </div>
        </div>
        <button @click="prevSlide" class="carousel-control-prev" type="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click="nextSlide" class="carousel-control-next" type="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>  
</template>

<style scoped>
.carousel-item {
  display: none;
  position: relative;
}
.carousel-item.active {
  display: block;
}
.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 10px 30px 10px;
  color: #fff;
}
.carousel-caption h5,
.carousel-caption p {
    margin: 0;
}
button{
    background-color: #6f09ad;
    margin: 10px;
    color: #fff;
}
button:hover{
    background-color: #4b0378;
}
</style>