<template>
  <div class="wrapper">
    <div class="column-left">
      <div class="table-container">
        <LobbiesList :lobbies="lobbies" @join-lobby="joinLobby" />
      </div>
    </div>

    <div class="column-right">
      <button class="create-lobby-button" @click="showCreateLobby = true">Create Game</button>

      <!-- Create Lobby Component -->
      <CreateLobby v-show="showCreateLobby" @close-modal="showCreateLobby = false" />
    </div>
  </div>
</template>

<script>
import LobbiesList from '../components/Lobby/LobbiesList.vue';
import CreateLobby from '../components/Lobby/CreateLobby.vue';
import { useGlobalStore } from '../stores/AppItems';
import { useLobbyStore } from '../stores/lobby';

export default {
  name: "Lobbies",
  methods: {
    joinLobby(p_lobby) {
      useLobbyStore.setLobby(p_lobby);
      this.$router.push({ name: 'Lobby', params: { lobbyCode: p_lobby.lobbyCode } });
    },
  },
  data() {
    return {
      showCreateLobby: false,
      globalStore: useGlobalStore(),
      lobbies: [
          {
            name: "Emil",
            password: "",
            amtPlayers: 3,
            private: false,
            rooleset: 0,
            score: 501,
            sets: 2,
            legs: 2,
            outType: 2,
            lobbyCode: "12345",
          },
          {
            name: "Test",
            password: "",
            amtPlayers: 6,
            private: false,
            rooleset: 1,
            score: 701,
            sets: 2,
            legs: 2,
            outType: 2,
            lobbyCode: "12345",
          }
        ],
    };
  },
  async created() {
    if (this.globalStore.nextPage == 'createLobby') {
      this.showCreateLobby = true;
    } else {
      this.showCreateLobby = false;
    }
    this.globalStore.nextPage = '';
  },
  components: { LobbiesList, CreateLobby },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.column-left {
  flex: 3;
  margin-right: 20px; /* Adjust the margin as needed */
}

.column-right {
  flex: 1;
  margin-right: 20px;
}

.table-container {
  margin: 0 20px 20px; /* Adjust the margin as needed */
}

.create-lobby-button {
  display: block;
  margin-top: 20px; /* Adjust the margin as needed */
  background-color: #00470c;
  width: 100%;
  color: #ffffff;
  margin-right: 10%;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
