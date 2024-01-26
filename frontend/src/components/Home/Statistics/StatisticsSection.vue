<!-- StatisticsSection.vue -->

<template>
    <div id="statistics-section" class="box">
      <h2 class="Home-Section-Heading">Statistics</h2>
      <!--<LastGamesGraph :gamePlacements="gamePlacements"/>-->
      <div class="statistics-content">
        <div class="statistics-item" v-if="playerStats.avgPoints !== undefined">
          <div class="label">Average Points:</div>
          <div class="value">{{ playerStats.avgPoints }}</div>
        </div>
        <div class="statistics-item" v-if="playerStats.avgDoubleOutRate !== undefined">
          <div class="label">Average Double Out Rate:</div>
          <div class="value">{{ playerStats.avgDoubleOutRate }}%</div>
        </div>
        <div class="statistics-item" v-if="playerStats.num180s !== undefined">
          <div class="label">180s:</div>
          <div class="value">{{ playerStats.num180s }}</div>
        </div>
        <div class="statistics-item" v-if="playerStats.gamesPlayed !== undefined">
          <div class="label">Games Played:</div>
          <div class="value">{{ playerStats.gamesPlayed }}</div>
        </div>
        <div class="statistics-item" v-if="playerStats.gamesWon !== undefined">
          <div class="label">Games Won:</div>
          <div class="value">{{ playerStats.gamesWon }}</div>
        </div>
        <div class="statistics-item" v-if="playerStats.winRate !== undefined">
          <div class="label">Win Rate:</div>
          <div class="value">{{ playerStats.winRate }}%</div>
        </div>
      </div>
    </div>
  </template>
  

  
  <script>
  import '../../../assets/styles/home-style.css'
  import LastGamesGraph from '../LastGames/LastGamesGraph.vue';
  export default {
    components:{
        LastGamesGraph,
    },
    data() {
      return {
        playerStats: {},
        gamePlacements: [],
      };
    },
    mounted() {
      this.getStats();
    },
    methods: {
      getStats() {
        // Dummy data - replace with actual API calls or data fetching logic
        this.playerStats = {
          avgPoints: 45.7,
          avgDoubleOutRate: 67.5,
          gamesPlayed: 102,
          gamesWon: 75,
          winRate: 73.5,
          num180s: 12,
        };
  
        this.gamePlacements = [
        { game: 1, placement: 1, numPlayers: 8 },
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
  #statistics-section {
    margin-top: 20px;
    text-align: center;
    background-color: rgb(213, 213, 213); /* Darker background color */
    color: rgb(0, 0, 0);
     /* Darker border color */
  }
  
  .statistics-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Three columns */
    gap: 20px;
  }
  
  .statistics-item {
    border: 3px solid #1f1f1f; /* Darker border color */
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgb(213, 213, 213) /* Darker background color */
  }
  
  .label {
    font-weight: bold;
  }
  </style>
  