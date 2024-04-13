<template>
    <input
      :type="type"
      class="block border border-grey-light w-full rounded"
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