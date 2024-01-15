<!-- The vew of the Lobby you are currently in. Here your comrades will be presented
     As well as their points and whose turn it is 
-->
<template>
  <C_Header title="Lobby">Lobby</C_Header>
  <CreateLobby v-show="showCreateLobby" @close-modal="showCreateLobby=false" :create="0"/>
  <button class="c_btn update" @click="fn_changeSettings">Settings</button>
  <div :key="this.players.name" v-for="player in this.players" >
    <div class="flex-row"> 
    <!-- ToDo: add PlayerPreview?-->
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" :value="player.name" readonly>
    <label for="Score">Score: </label>
    <input type="text" id="score" name="score" :value="player.score" readonly>
</div>
  </div>
  <button @click="copyURL">Copy Link</button>
</template>
<script>
import C_Header from "../components/global/C_Header.vue";
import C_modal_page from "../components/global/C_modal_page.vue";
import { useLobbyStore } from "../stores/lobby";
import { useGlobalStore } from "../stores/AppItems";
import CreateLobby from "../components/Lobby/CreateLobby.vue";
export default {
  name: "Lobby",
  components: { C_Header, C_modal_page, CreateLobby },

  async created() {
    const lobbyStore = useLobbyStore();
    this.lobby= lobbyStore.lobby;
    this.lobbyCode = lobbyStore.lobby.lobbyCode
  },
  methods: {
    async copyURL() {
      try {
        await navigator.clipboard.writeText(this.lobbyCode);
      } catch ($e) {
        alert('Cannot copy');
      }
    },
    fn_changeSettings(){
      const globalStore = useGlobalStore();
      globalStore.prevPage = "Lobby"
      this.showCreateLobby = true;
    }
  },
  data(){
    return{
      lobbyCode : "",
      lobby : null,
      showCreateLobby : false,
      players : [
        {
          name:"Max",
          score:69
        },
        {
          name:"Dan",
          score:420
        }
      ]
    }
  },
}
</script>

<style scoped></style>
