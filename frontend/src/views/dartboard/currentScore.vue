<template>
    <input
      :type="type"
      style="width: 50%; font-size: 80px;"
      :name="text"
      :required ="required"
      :placeholder = "label" 
      v-model="value"
      />
  </template>
  
  <script>
      export default {
          name: "TextField",
          props: {
          type: String,
          text: String,
          color: String,
          id: String,
          label:String,
          required:Boolean,
          value:Number,
        },
      }
  </script>
  
  <style scoped>
  
  </style>