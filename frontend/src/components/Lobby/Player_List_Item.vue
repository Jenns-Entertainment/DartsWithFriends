<template>
    <tr @click="this.showHover = !this.showHover">
            <td>{{ player.player_name }}</td>
            <td>{{ player.score }}</td>
            <td>{{ player.sets }}</td>
            <td>{{ player.legs }}</td>
            <td>
              <span v-if="player.isCurrentUser && player.isCurrentTurn">&#8226;</span>
              <button v-else-if="player.isCurrentUser" @click="playTurn" class="play-button wider">Play</button>
            </td>
    </tr>
    <Player_List_Item_Hover v-if="this.showHover"/>
    
</template>


<script>
import Player_List_Item_Hover from './Player_List_Item_Hover.vue';

export default {
  name: "Player_List_Item",
  components:{Player_List_Item_Hover},
  props: {
    player: {
        type: Object,
        required: true,
      },
  },
  data(){
    return{
      showHover:false
    }
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
      fn_toggleHover(){
        this.showHover = true;
        alert(this.showHover);
      }
      
  },
  emits: ['join-lobby']
}

</script>