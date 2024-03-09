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
</template>


<script>
export default {
    name: "PlayerList",
        props: {
            players: [Object]
        },
    methods: {

    },
    //emits: ['join-lobby']
}

</script>