<template>
    <tr>
      <td colspan="5" >
        <div class="horizontal-line">
          <button class="table-warning-button">Report</button>
          <button class="table-warning-button">Kick</button>
          <button class="table-action-button" @click="compare_stats(player.id)">Compare Stats</button>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import '../../assets/styles/home-style.css'
  import '../../assets/styles/table-styles.css'
  export default {
    name: "Lobby_List_Item_Hover",
    props: {
      player: {
        type: Object,
        required: true,
      },
    },
    methods: {
      compare_stats(playerid){
        this.$router.push({ name: 'Statistics', params:  { playerid } });
      }
    },
  };
  </script>
  
  <style scoped>
  .horizontal-line {
    display: flex;
    flex-direction: row;
    align-items: center; /* Center the content horizontally */
    justify-content: center;
    height: 50px; /* ToDo needs to be changed later*/
  }
  
  .horizontal-line button {
    margin-right: 20px; /* Adjust the spacing between buttons as needed */
    margin-left: 20px;
    color: #ffffff;
    padding: 0%;
  }
  th, td {
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: center;
    justify-content: center;
    align-items: center;
    
  }

.table-action-button,
.table-warning-button {
    color: #ffffff;
    width: 100%; /* change this value so the buttons appear smaller */
    height: 100%;
  }
  
  /* Add your other styles here */
  </style>
  