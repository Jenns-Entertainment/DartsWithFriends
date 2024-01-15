<template>
        <router-link class="w-full text-center py-3 rounded text-white focus:outline-none my-1" :style="{background : color}" 
      :to="'/'+link">
        {{ name }}
        </router-link>
</template>
  
  <script>
  export default {
    name: "C_btn_routing",
    props: {
      link: String,
      name: String,
      color: String,
    },
  }
  </script>
  
  <style scoped>
  
  </style>

