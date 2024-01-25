<template>
  <div>
      <!--<LobbyPreview :lobby="lobby" @join-lobby="$emit('join-lobby', lobby)"/> -->
      <table class="dart-table">
          <tr>
              <th class="green-header">Lobby Name</th>
              <th class="green-header">Rooleset</th>
              <th class="green-header">Public</th>
              <th class="green-header">Players</th>
              <th class="green-header">Status</th>
              <th class="green-header"></th>
          </tr>
          <tr :key="lobby.lobbyCode" v-for="(lobby, index) in lobbies" :class="{ 'light-grey-row': index % 2 === 0 }">    
              <td>{{ lobby.name }}</td>
              <td>{{ fn_return_ruleset(lobby.ruleset) }}</td>
              <td>{{ lobby.private ? 'Public' : 'Private'}}</td>
              <td>{{ lobby.amtPlayers }}</td>
              <td>{{ lobby.status }}</td>
              <td><button @click="fn_joinLobby(lobby)" class="btn_join">Join</button></td>
          </tr>
      </table>
  </div>
</template>

<script>
import Lobby from '../../views/Lobby.vue';
import LobbyPreview from './LobbyPreview.vue';
import '../../assets/styles/table-styles.css'

export default {
  name: "LobbiesList.vue",
  props: {
      lobbies: Array
  },
  methods: {
      fn_return_ruleset(ruleset) {
          if (ruleset == 0) {
              return "Default"
          } else {
              return "Around the clock"
          }
      },
      fn_joinLobby(lobby) {
          this.$emit("join-lobby", lobby)
      },
      loadLobbies() {
          // Assuming you have a Vuex getter named getLobbies
          // this.lobbies = this.$store.getters['dartGame/getLobbies'];
      },
  },
  mounted() {
      this.loadLobbies();
  },
  components: { Lobby, LobbyPreview },
  emits: ['join-lobby']
}
</script>

<style scoped>
</style>
