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
      const lobbyStore = useLobbyStore();
      lobbyStore.setLobby(p_lobby);
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
            amtPlayers: 3,
            private: false,
            lobbyCode: "12345",
            status: 'started',
            ruleset: 1,
            id: 1
          },
          {
            name: "Test1",
            amtPlayers: 3,
            private: false,
            lobbyCode: "12345",
            status: 'started',
            ruleset: 0,
            id: 2
          },
          {
            name: "Nick",
            amtPlayers: 3,
            private: false,
            lobbyCode: "12345",
            status: 'started',
            id: 3
          },
          {
            name: "Justus",
            amtPlayers: 3,
            private: false,
            lobbyCode: "12345",
            status: 'started',
            id: 4
          },
          {
            name: "Karls Lobby",
            amtPlayers: 3,
            private: false,
            lobbyCode: "12345",
            status: 'started',
            id: 5
          },
          {
            name: "Darts is fun",
            amtPlayers: 3,
            private: false,
            lobbyCode: "12345",
            status: 'started',
            id: 6
          },
         
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
  margin-left: 20px;
}

.column-right {
  flex: 1;
  margin-right: 20px;
}

.table-container {
  margin: 20px 20px 20px; /* Adjust the margin as needed */
}

.create-lobby-button {
  display: block;
  margin-top: 20px; /* Adjust the margin as needed */
  background-color: #2b742d;
  width: 100%;
  color: #ffffff;
  margin-right: 10%;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
