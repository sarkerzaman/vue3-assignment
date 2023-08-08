<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

let username = '';
let password = '';

const login = () => {
  // Get stored user data from local storage
  const storedUserData = localStorage.getItem('userData');
  if (!storedUserData) {
    alert('User not found. Please register.');
    return;
  }

  const userData = JSON.parse(storedUserData);
  if (userData.username === username && userData.password === password) {
    // Redirect to welcome page on successful login
    router.push('/welcome');
  } else {
    alert('Invalid username or password.');
  }
};
</script>

<template>
    <section class="flex h-screen w-full">
        <div class="w-1/2" style="background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80); background-repeat: no-repeat; background-size: cover;">
        <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Tech Ninja</h1>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
        <h2 class="mb-5 text-xl">Login Form</h2>
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
                </label>
                <input type="text" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
                </label>
                <input type="password" v-model="password" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
            </div>
            <div class="flex items-center justify-between">
                <button @click="login" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
                </button>
                <!-- <a class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#"> -->
                    <router-link to="/register" class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800">Register</router-link>
                <!-- </a> -->
            </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
            &copy;2020 Tech Ninja. All rights reserved.
            </p>
        </div>
        </div>
    </section>
  </template>
  
  