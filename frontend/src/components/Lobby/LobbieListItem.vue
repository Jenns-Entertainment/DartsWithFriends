<template>
            <tr v-if="lobby.private===false && lobby.status != 2">
              <td>{{ lobby.name }}</td>
              <td>{{ fn_return_ruleset(lobby.ruleset) }}</td>
              <!--<td>{{ lobby.private ? 'Private' : 'Public'}}</td>-->
              <td>{{ lobby.amtPlayers }}</td>
              <td>{{ this.fn_lobby_status() }}</td>
              <td><button @click="fn_joinLobby(lobby)" class="table-action-button ">Join</button></td>
            </tr>
</template>


<script>

export default {
  name: "LobbyListItem",
  components:{},
  props: {
    lobby: {
        type: Object,
        required: true,
      },
  },
  methods: {
      fn_joinLobby(lobby) {
          this.$emit("join-lobby", lobby)
      },
      fn_return_ruleset(ruleset) {
          if (ruleset == 0) {
              return "Default"
          } else {
              return "Around the clock"
          }
      },
      fn_lobby_status(){
        if(this.lobby.status == 0){
          return "waiting";
        }else if(this.lobby.status == 1){
          return "started";
        }else if(this.lobby.status == 2){
          return "completed";
        }else{
          return this.lobby.status + " => unknown lobby.status in LObbiesListItem.vue";
        }
      }
      
  },
  emits: ['join-lobby']
}

</script>