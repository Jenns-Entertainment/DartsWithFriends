<!-- Dialog Page entered by pressing the join button on Page Games.vue
     Clicking the Join Button leads to Lobby.vue
-->
<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" >
      <div class="bg-zinc-300 px-6 py-8 rounded shadow-md text-black w-full">
        <C_Header title="Join Lobby"/>
        <form @submit.prevent="joinLobby">
          <input
            class="c_textfield"
            id = "code"
            type="text"
            name="Code"
            required="true"
            placeholder="Code"
            v-model="this.lobbyCode"
          />
          <button
            class="c_btn positive"
            type="submit"
          >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import C_btn from "@/components/global/C_btn.vue";
  import C_txtField from "@/components/global/C_txtField.vue";
import C_Header from "../global/C_Header.vue";
  export default {
      name: "JoinGame",
    components: { C_txtField, C_btn, C_Header },
    data (){
      return{
        lobbyCode: 0,
        lobby: null,
      }
    }, 
    methods:{
      joinLobby(){
        //(if user_already_in_lobby){only redirect dont add player to lobby}else{
        //ToDo add backend connection to add a Player to the lobby }
        this.$router.push({name: 'Lobby', params: {lobby: this.lobby, lobbyCode : this.lobbyCode}})
      }
    }
  }
</script>

<style scoped>

</style>
