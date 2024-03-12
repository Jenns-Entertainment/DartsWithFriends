<template>
  <Player_List_Item v-for="player in this.players" :key="player.player_id" :player ="player"/>
    <tr>
      <td @click="fn_open_InviteFriends()"  :colspan="5">Invite Friend</td>
    </tr>
    <div>
      <InviteFriend_Modal v-if="show_InviteFriends" @close-modal="fn_close_InviteFriends"></InviteFriend_Modal>
    </div>
</template>


<script>
import InviteFriend_Modal from './InviteFriend_Modal.vue';
import Player_List_Item from './Player_List_Item.vue';

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
    components:{InviteFriend_Modal,Player_List_Item}
    //emits: ['join-lobby']
}

</script>