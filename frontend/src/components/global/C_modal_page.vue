<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <C_Header title="TITLE"></C_Header>
        <form class="w-full max-w-lg">
        </form>
        
      </div>
    </div>
  </template>
    
  <script>
  import C_Header from '../global/C_Header.vue';
  import C_txtField from '../global/C_txtField.vue';
  
  export default {
    name: "C_modal_page",
    components: { C_Header, C_txtField }
  }
    
  </script>
    
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: center;
    background-color: white;
    height: 620px;
    width: 550px;
    margin-top: 5%;
    padding: 30px 2%;
    border-radius: 10px;
  }
  
</style>
  