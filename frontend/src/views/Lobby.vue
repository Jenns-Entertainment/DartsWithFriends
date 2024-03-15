<template>
  <div class="page-container">
    <div class="left-column">
      <!-- Table for Player, Score, Sets, Legs, and Action -->
      <table class="dart-table">
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
          <PlayerList :players="lobby.players"/>
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
import PlayerList from "../components/Lobby/PlayerList.vue";
import { useGlobalStore } from "../stores/AppItems";
import { useLobbyStore } from "../stores/lobby";

export default {
  components: {
    CreateLobby,
    PlayerList
  },
  mounted() {
    const globalStore = useGlobalStore();
    const lobbyStore = useLobbyStore();
    this.lobby= lobbyStore.load_lobby_data(globalStore.current_lobby_id);
    console.log(this.lobby)
    // call Backend Load Players for this Lobby 
  },
  data() {
    return {
      lobby: {},
      showCreateLobby: false,
    };
  },
  methods: {
    openCreateLobbyDialog() {
      //this.showCreateLobby = true;
      const globalStore = useGlobalStore();
      const lobbyStore = useLobbyStore();
      this.lobby= lobbyStore.load_lobby_data(globalStore.current_lobby_id);
      console.log(this.lobby)
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

.play-button,
.copy-button {
  background-color: #2b742d;
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
  background-color: #2b742d;
  color: white;
}
</style>
