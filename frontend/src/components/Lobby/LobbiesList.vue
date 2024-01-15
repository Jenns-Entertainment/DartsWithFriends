<template>
    <div :key="lobby.lobbyCode" v-for="lobby in lobbies">
        <LobbyPreview :lobby="lobby" @join-lobby="$emit('join-lobby', lobby)"/>
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
    components: { Lobby, LobbyPreview },
    emits: ['join-lobby']
}

</script>