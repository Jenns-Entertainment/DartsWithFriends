<!-- LastGameItem.vue -->

<template>
  <tr>
    <td>{{ game.name }}</td>
    <td>{{ game.status }}</td>
    <td><button @click="handleGameAction" :class="getButtonClass()">{{ getButtonLabel() }}</button></td>
  </tr>
  </template>
  
  <script>
  import '../../../assets/styles/home-style.css';
  import '../../../assets/styles/table-styles.css';
  export default {
    props: {
      game: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleGameAction() {
        // Perform different actions based on the game status
        if (this.game.status === "active") {
          // Handle action for active game (e.g., join the game)
          alert(`Joining game: ${this.game.name}`);
        } else if (this.game.status == "completed") {
          // Handle action for completed game (e.g., view results)
          alert(`Viewing results for game: ${this.game.name}`);
        }
      },
  
      getButtonLabel() {
        // Determine the button label based on the game status
        if(this.game.status == "active"){
          return "Play"
        }else if(this.game.status == "completed"){
          return "View Results"
        }else if(this.game.status == "invited"){
          return "Join"
        }else{
          return "Unknown"
        }
        
      },
      getButtonClass() {

        if(this.game.status == "active"){
          return "table-action-button"
        }else if(this.game.status == "completed"){
          return "table-cancel-button"
        }else if(this.game.status == "invited"){
          return "table-view-button"
        }else{
          return "Unknown"
        }
    },
    },
  };
  </script>
  
  <style scoped>

  /*
.table-action-button{
  padding-right: 0%;
  margin-right: -10%;
}
.table-view-button{
  padding-right: 0%;
  margin-right: -10%;
}
*/
  </style>
  