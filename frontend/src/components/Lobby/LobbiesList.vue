<template>
  <div>
      <table class="dart-table">
          <tr>
              <th>Lobby Name</th>
              <th>Rooleset</th>
              <th>Public</th>
              <th>Players</th>
              <th>Status</th>
              <th></th>
          </tr>
          <LobbieListItem v-for="lobby in lobbies" :key="lobby.name" :lobby="lobby" @join-lobby="fn_joinLobby(lobby)"/>
      </table>
  </div>
</template>

<script>
import Lobby from '../../views/Lobby.vue';
import '../../assets/styles/table-styles.css'
import LobbieListItem from './LobbieListItem.vue';
import { useLobbyStore } from '../../stores/lobby';

export default {
  name: "LobbiesList.vue",
  data(){
      return{
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
      }
    },
  methods: {
      
    fn_joinLobby(p_lobby) {
      const lobbyStore = useLobbyStore();
      lobbyStore.setLobby(p_lobby);
      this.$router.push({ name: 'Lobby', params: { lobbyCode: p_lobby.lobbyCode } });
    },
      loadLobbies() {
          // Assuming you have a Vuex getter named getLobbies
          // this.lobbies = this.$store.getters['dartGame/getLobbies'];
      },
  },
  mounted() {
      this.loadLobbies();
  },
  components: { Lobby, LobbieListItem },
  emits: ['join-lobby']
}
</script>

<style scoped>
</style>
