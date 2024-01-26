<!-- LastGamesSection.vue -->

<template>
    <div id="last-games-section" class="home-section">
        <h2 class="Home-Section-Heading">Last Games</h2>
        <table class="dart-table">
          <tr>
              <th >Lobby Name</th>
              <th >Status</th>
              <th ></th>
          </tr>
            <LastGameItem v-for="game in lastGames" :key="game.name" :game="game" />
          </table>
      
      <!--<LastGamesGraph :gamePlacements="gamePlacements"/>--> <!-- will be done later -->
    </div>
  </template>
  
  <script>
  import LastGameItem from "./LastGameItem.vue";
  import LastGamesGraph from "./LastGamesGraph.vue";
  import '../../../assets/styles/table-styles.css'

  export default {
    components: {
      LastGameItem,
      LastGamesGraph,
    },
    data(){
      return{
        lastGames: [],
        gamePlacements: [],
      }
    },
    mounted(){
      this.loadLastGames();
    },
    methods: {
    loadLastGames() {
      // Dummy data - replace with actual API calls or data fetching logic
      this.lastGames = [
        { name: "Spiel von Schaumig", status: "active", rank: 1 },
        { name: "Team Paderborn", status: "completed 2nd place", rank: 2 },
        { name: "Team Paderborn", status: "completed 2nd place", rank: 2 },
        { name: "Team Paderborn", status: "completed 2nd place", rank: 2 },
        { name: "Team Paderborn", status: "completed 2nd place", rank: 2 },
        { name: "Spiel von Schaumig", status: "active", rank: 1 },
        // ... other last game entries ...
      ];

      this.gamePlacements = [
        { game: 1, placement: 1, numPlayers: 8,},
        { game: 2, placement: 2, numPlayers: 6 },
        { game: 3, placement: 1, numPlayers: 5 },
        { game: 4, placement: 3, numPlayers: 7 },
        { game: 5, placement: 1, numPlayers: 8 },
      ];
    },
  },
  };
  </script>
  
  <style scoped>
  #last-games-section {
    margin-top: 20px;
  }


  
  .last-game-item {
    display: grid;
    grid-template-columns: 50% 20% 5% 25%;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .last-game-item.last-game-header {
    font-weight: bold;
    background-color: #f5f5f5;
  }
  </style>
  