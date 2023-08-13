<template>  
    <h2>Assignment Vue3 Pie Chart</h2>
    <div class="mx-auto" style="width: 500px; height: 400px;">
      <canvas id="chart"></canvas>
    </div> 
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let chart = null

const chartData = {
  labels: ['Red', 'Green', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [100, 180, 250, 100],
      backgroundColor: ['#FF6384', '#00FF00', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#00FF00', '#36A2EB', '#FFCE56'],
    },
  ],
};

const config = {
  type: 'pie',
  data: chartData,
};

// Fetch data for the pie chart on component mount
onMounted(() => {
  const ctx = document.getElementById('chart')
  chart = new Chart(ctx, config)
});

onBeforeUnmount(() => {
  console.log('PieChart component about to be unmounted. Clean up here.');
});
</script>

<style>
.pie-chart {
  text-align: center;
  margin: 20px;
}
</style>