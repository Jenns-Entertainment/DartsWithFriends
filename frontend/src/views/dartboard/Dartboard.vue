<template>
  <div class="centered-container">
    <div class="big-circle" @click="handleBigCircleClick">
      <!-- Slices -->
      <div v-for="(slice, index) in slices" :key="index" :style="getSliceStyle(index)" @click="handleSliceClick(index)"></div>
    </div>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.big-circle {
  width: 400px; /* Twice as big */
  height: 400px; /* Twice as big */
  border-radius: 50%;
  background-color: #ecf0f1; /* Grey color */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.big-circle:hover {
  background-color: #d5d8dc; /* Darker grey on hover */
}

.slice {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  clip-path: polygon(50% 50%, 100% 0, 100% 100%);
  cursor: pointer;
  transition: background-color 0.3s;
}

.slice:nth-child(odd) {
  background-color: #3498db; /* Blue color */
}

.slice:nth-child(even) {
  background-color: #e74c3c; /* Red color */
}

.slice:hover {
  background-color: #2ecc71; /* Green color on hover */
}
</style>

<script>
export default {
  data() {
    return {
      slices: Array.from({ length: 20 }, (_, index) => index),
    };
  },
  methods: {
    handleBigCircleClick() {
      console.log("Clicked on the big circle");
      // Implement your logic for handling the click on the big circle
    },
    handleSliceClick(index) {
      console.log(`Clicked on slice ${index}`);
      // Implement your logic for handling the click on a slice
    },
    getSliceStyle(index) {
      const rotation = index * (360 / 20);
      return {
        transform: `rotate(${rotation}deg)`,
      };
    },
  },
};
</script>
