<template>
<div class="flex-row">
    <!--
    <LobbyPreview_txtField label="Name" type="text" id="lobby_name" name="lobby_name" :value="lobby.name" readonly />
    <LobbyPreview_txtField label="Player" type="text" id="player" name="player" :value="'1/ ' + lobby.amtPlayers" readonly  />
    <LobbyPreview_txtField label="Rooleset" type="text" id="rooleset" name="rooleset" :value= "`${lobby.rooleset}`" readonly  />
    <LobbyPreview_txtField label="Sets" type="text" id="sets" name="sets" :value="`${lobby.sets}`" readonly  /> TODO: fix that the value is a string not a number
    <LobbyPreview_txtField label="Legs" type="text" id="legs" name="legs" :value="`${lobby.legs}`" readonly  />
    <button @click="joinLobby" class="btn_join">Join</button>
-->
<table>
    <tr>
        <td>{{ lobby.name }}</td>
        <td>{{ lobby.rooleset }}</td>
        <td>{{ lobby.private }}</td>
        <td>{{ lobby.players }}</td>
        <td>{{ lobby.status }}</td>
        <td><button @click="joinLobby" class="btn_join">Join</button></td>
    </tr>
</table>
</div>
</template>

<script>
import C_txtField from '../global/C_txtField.vue';
import LobbyPreview_txtField from "@/components/Lobby/LobbyPreview_txtField.vue";

export default{
    name: "LobbiesList.vue",
    props: {
        lobby: Object
    },
    methods:{
        joinLobby(){
            this.$emit("join-lobby",this.lobby.lobbyCode)
        }
    },
    components: { C_txtField,  LobbyPreview_txtField}
}

</script>

<style scoped>
.btn_join{
    display: table-row; 
    color: #ffffff;
    width: 160%; 
    padding: 1%;
    margin-left: 2%;
    height: 200%;
    border-width: 1px; 
    background-color: #00470c; 

}
</style>