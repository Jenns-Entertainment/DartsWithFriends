<template>
    <tr v-for="player in this.players" :key="player.player_id">
            <td>{{ player.player_name }}</td>
            <td>{{ player.score }}</td>
            <td>{{ player.sets }}</td>
            <td>{{ player.legs }}</td>
            <td>
              <span v-if="player.isCurrentUser && player.isCurrentTurn">&#8226;</span>
              <button v-else-if="player.isCurrentUser" @click="playTurn" class="play-button wider">Play</button>
            </td>
    </tr>
    <tr>
      <td @click="fn_open_InviteFriends()"  :colspan="5">Invite Friend</td>
    </tr>
    <div>
      <InviteFriend_Modal v-if="show_InviteFriends" @close-modal="fn_close_InviteFriends"></InviteFriend_Modal>
    </div>
</template>


<script>
import InviteFriend_Modal from './InviteFriend_Modal.vue';

export default {
    name: "PlayerList",
        props: {
            players: [Object]
        },
    methods: {
      fn_close_InviteFriends(){
        this.show_InviteFriends = false;
      },
      fn_open_InviteFriends(){
        this.show_InviteFriends = true;
      }

    },
    data(){
          return{
            show_InviteFriends: false
          }
        },
    components:{InviteFriend_Modal}
    //emits: ['join-lobby']
}

</script>