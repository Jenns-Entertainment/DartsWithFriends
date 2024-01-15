<template>
    <label for="{{ name }}" v-if="this.label!=null">{{ label }}</label>
    <input
      :type="type"
      class="txtField "
      :name="name"
      :required ="required"
      :placeholder = "placeholder" 
      v-model="value"
      :id="id"
      :autofocus="autofocus"
      :readonly="readonly"
      
      />
  </template>
  
  <script>
      export default {
          name: "LobbyPreview_txtField",
          props: {
          id:               String,
          type:             String,
          name:             String,
          placeholder:      String,
          required:         Boolean,
          value:            String,
          label:            String,
          autofocus:        Boolean,
          size_fracture:    Number,
          readonly:         Boolean,
        },
      }
  </script>
  
  <style scoped>
  .txtField{
    display: table-row; 
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    background-color: #E5E7EB; 
    color: #374151; 
    line-height: 1.25; 
    border-radius: 0.25rem; 
    border-width: 1px; 
    border-color: #E5E7EB; 
    appearance: none; 
    text-align: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    width: 10%;

  }
  
  </style>
  