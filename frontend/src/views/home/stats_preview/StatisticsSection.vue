<!-- StatisticsSection.vue -->

<template>
    <div id="statistics-section" class="box">
      <h2 class="Home-Section-Heading">Statistics</h2>
      <!--<LastGamesGraph :gamePlacements="gamePlacements"/>-->
      <div class="statistics-content">
        <C_Content_box v-for="stat in playerStats" :key="stat.stat" :header="stat.stat" :content = "stat.value" ></C_Content_box>
      </div>
    </div>
  </template>
  

  
  <script>
  import '../../../assets/styles/home-style.css'
import C_Content_box from '../../../components/global/C_Content_box.vue';
  export default {
    components:{
    C_Content_box
},
    data() {
      return {
        playerStats: [],
        gamePlacements: [],
      };
    },
    mounted() {
      this.getStats();
    },
    methods: {
      getStats() {
        // Dummy data - replace with actual API calls or data fetching logic
        this.playerStats = [
          {stat: "avgPoints", value: "45.7"}, //TODO add Handling for integer
          {stat: "avgDoubleOutRate", value: "67.5"},
          {stat: "gamesPlayed", value:"102"},
          {stat: "gamesWon", value:"75"},
          {stat: "winRate", value:"73.5"},
          {stat: "num180s", value:"12"}

        ];
  
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
  