<template>
    <div>
       <!--<LobbyPreview :lobby="lobby" @join-lobby="$emit('join-lobby', lobby)"/> -->
        <table class="dart-lobbies-table">
            <tr>
                <th>Lobby Name</th>
                <th>Rooleset</th>
                <th>Public</th>
                <th>Players</th>
                <th>Status</th>
                <th>___</th>
            </tr>
            <tr :key="lobby.lobbyCode" v-for="lobby in lobbies">    
                <td>{{ lobby.name }}</td>
                <td>{{ fn_return_ruleset(lobby.rooleset) }}</td>
                <td>{{ lobby.private ? 'Public' : 'Private'}}</td>
                <td>{{ lobby.players }}</td>
                <td>{{ lobby.status }}</td>
                <td><button @click="fn_joinLobby(lobby)" class="btn_join">Join</button></td>
                
            </tr>
        
    </table>
    </div>

</template>

<script>
import Lobby from '../../views/Lobby.vue';
import LobbyPreview from './LobbyPreview.vue';

export default{
    name: "LobbiesList.vue",
    props: {
        lobbies: Array
    },
    methods: {
        fn_return_ruleset(rooleset){
            if(rooleset==0){
                return "Default"
            }else{
                return "Around the clock"
            }
        },
        fn_joinLobby(lobby){
            this.$emit("join-lobby",lobby)
        },
        loadLobbies() {
      // Assuming you have a Vuex getter named getLobbies
      //this.lobbies = this.$store.getters['dartGame/getLobbies'];
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
.btn_join{
    display: table-row; 
    color: #ffffff;
    width: 100%; 
    padding: 1%;
    margin-left: 2%;
    height: 200%;
    border-width: 1px; 
    background-color: #00470c; 

}
.dart-lobbies-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.dart-lobbies-table th, .dart-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.dart-lobbies-table th {
  background-color: #2c3e50;
  color: #ecf0f1;
}

.dart-lobbies-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.dart-lobbies-table tbody tr:hover {
  background-color: #3498db;
  color: #ecf0f1;
  cursor: pointer;
}
</style>