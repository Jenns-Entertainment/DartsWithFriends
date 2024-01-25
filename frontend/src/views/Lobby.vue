<template>
  <div class="page-container">
    <div class="left-column">
      <!-- Table for Player, Score, Sets, Legs, and Action -->
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
            <th>Sets</th>
            <th>Legs</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in this.lobby.players" :key="player.player_id">
            <td>{{ player.player_name }}</td>
            <td>{{ player.score }}</td>
            <td>{{ player.sets }}</td>
            <td>{{ player.legs }}</td>
            <td>
              <span v-if="player.isCurrentUser && player.isCurrentTurn">&#8226;</span>
              <button v-else-if="player.isCurrentUser" @click="playTurn" class="play-button wider">Play</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="right-column">
      <!-- Lobby Settings -->
      <h2 class="lobby-name">{{ lobby.name }}</h2>
      <p class="info-text">Best of {{ lobby.sets }} sets</p>
      <p class="info-text">Best of {{ lobby.legs }} legs</p>
      <button @click="openCreateLobbyDialog" class="action-button primary">Game Rules</button>
      <button @click="copyURL" class="action-button copy-button">Copy URL</button>
    </div>

    <!-- Display CreateLobby modal based on showModal value -->
    <CreateLobby v-show="showCreateLobby" @close-modal="showCreateLobby = false"></CreateLobby>
  </div>
</template>

<script>
import CreateLobby from "../components/Lobby/CreateLobby.vue";
import { useLobbyStore } from "../stores/lobby";

export default {
  components: {
    CreateLobby,
  },
  mounted() {
    const lobbyStore = useLobbyStore();
    this.lobby= lobbyStore.lobby;
    console.log(this.lobby)
    // call Backend Load Players for this Lobby 
  },
  data() {
    return {
      lobby: {
        players: [
        { player_id: 1, Player_name: "Player 1", score: 501, sets: 1, legs: 2, isCurrentUser: true, isCurrentTurn: true },
        { player_id: 2, player_name: "Player 2", score: 450, sets: 0, legs: 2, isCurrentUser: false, isCurrentTurn: false },
        // Add more players as needed
      ],
      },
      showCreateLobby: false,
    };
  },
  methods: {
    openCreateLobbyDialog() {
      this.showCreateLobby = true;
    },
    playTurn() {
      // Implement play turn action
      alert('Play Turn clicked');
    },
    loadLobbyDetails(){
      // TODO load Lobby Details by LobbyCode --> call Backend 
    },
    async copyURL() {
      try {
        await navigator.clipboard.writeText(this.lobby.lobbyCode);
      } catch ($e) {
        alert('Cannot copy');
      }
    },
  },
  created() {
    // Implement async created functionality
    // For example, fetch data or perform asynchronous operations
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  margin: 20px;
}

.left-column {
  flex: 2;
  padding: 20px;
}

.right-column {
  flex: 1;
  padding: 20px;
  background-color: rgb(213, 213, 213); /* Light grey background */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.play-button,
.copy-button {
  background-color: #259929;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 5px;
}

.play-button.wider {
  width: 100%;
}

.lobby-name {
  font-weight: bold;
  text-align: center;
}

.info-text {
  text-align: center;
}

.action-button {
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

.primary {
  background-color: #259929;
  color: white;
}
</style>
