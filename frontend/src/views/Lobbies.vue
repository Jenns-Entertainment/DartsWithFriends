<template>
  <CreateLobby v-show="showCreateLobby" @close-modal="showCreateLobby=false"/>
<div class="wrapper">
<header>Lobbies</header>
<div class="boxMain">
  <button class="c_btn bg-[#00470c]" @click="showCreateLobby = true">Create Game</button>
</div>

<div class="box2">
  <LobbiesList :lobbies = "lobbies" @join-lobby="joinLobby"/>
</div>

</div>

</template>

<script>
import LobbiesList from '../components/Lobby/LobbiesList.vue';
import CreateLobby from '../components/Lobby/CreateLobby.vue';
import { useGlobalStore } from '../stores/AppItems';

  export default{
    name: "Lobbies",
    methods: {
        joinLobby(p_lobby){
        this.$router.push({name: 'Lobby', params: {lobbyCode: p_lobby.lobbyCode, lobby: p_lobby}})
      }
    },
    data(){
      return{
        showCreateLobby : false,
        globalStore : useGlobalStore(),

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
      }
    },
    async created() {
      if(this.globalStore.nextPage == 'createLobby'){
        this.showCreateLobby = true;
      }else{
        this.showCreateLobby = false;
      }
      this.globalStore.nextPage = ''
    },
    components: { LobbiesList, CreateLobby}
}
</script>

<style>
header {
  min-height: 40px; 
  background: rgb(122, 122, 122);
}

.wrapper {
  width: 100%;
  background: rgb(255, 255, 255);
}

.side {
  width: 30%;  
  height: 375px;
  float: right;
}

.boxMain {
  width: 20%;
  height: 50px;
  background: rgb(201, 201, 201);
  display: inline-block;
}

.box1 {
  width: 100%;
  background: rgb(151, 151, 151);
  height: 40%;
}

.box2 {
 width: 100%;
 background: rgb(255, 255, 255);
 height: 40%;
}
</style>