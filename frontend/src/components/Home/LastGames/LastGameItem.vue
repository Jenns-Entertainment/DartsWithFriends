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
        } else if (this.game.status === "completed") {
          // Handle action for completed game (e.g., view results)
          alert(`Viewing results for game: ${this.game.name}`);
        }
      },
  
      getButtonLabel() {
        // Determine the button label based on the game status
        return this.game.status === "active" ? "Play in Game" : "View Results";
      },
      getButtonClass() {
      // Determine the button class based on the game status
      return this.game.status === "active" ? "table-action-button" : "table-view-button";
    },
    },
  };
  </script>
  
  <style scoped>

  </style>
  