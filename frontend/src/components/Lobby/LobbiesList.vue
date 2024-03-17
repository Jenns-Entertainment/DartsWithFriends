<template>
  <div>
      <table class="dart-table">
          <tr>
              <th>Lobby Name</th>
              <th>Rooleset</th>
              <!--<th>Public</th>-->
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
import { useGlobalStore } from '../../stores/AppItems';
import lobbyData from '../../assets/data/SampleData/lobbys.json'

export default {
  name: "LobbiesList.vue",
  data(){
      return{
        lobbies: lobbyData
      }
    },
  methods: {
      
    fn_joinLobby(p_lobby) {
      const globalStore = useGlobalStore();
      globalStore.current_lobby_id = p_lobby.id
      //console.log(globalStore.current_lobby_id);
      //const lobbyStore = useLobbyStore();
      //lobbyStore.setLobby(p_lobby);
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
