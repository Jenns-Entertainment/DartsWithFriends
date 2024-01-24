<!-- LastGameItem.vue -->

<template>
    <div class="last-game-item">
      <div>{{ game.name }}</div>
      <div>{{ game.status }}</div>
      <div>{{ game.rank }}</div>
      <div>
        <button @click="handleGameAction" :class="getButtonClass()">{{ getButtonLabel() }}</button>
      </div>
    </div>
  </template>
  
  <script>
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
      return this.game.status === "active" ? "play-button" : "view-button";
    },
    },
  };
  </script>
  
  <style scoped>
  button {
    width: 100%;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .play-button {
    background-color: #4caf50;
    color: white;
  }
  
  .view-button {
    background-color: #2196f3;
    color: white;
  }
  </style>
  