// lobby.js
import { defineStore } from 'pinia';

export const useLobbyStore = defineStore('lobby',  {
  state: () => {
    return {
      lobby: {
        name: "",
        password: "",
        amtPlayers: 1,
        isprivate: false,
        rooleset: 0,
        score: 501,
        sets: 1,
        legs: 1,
        outType: Number,
        lobbyCode: "",
        status: 0,
        players: [
          { player_id: 1, player_name: "Player 1", score: 501, sets: 1, legs: 2, isCurrentUser: true, isCurrentTurn: true },
          { player_id: 2, player_name: "Player 2", score: 450, sets: 0, legs: 2, isCurrentUser: false, isCurrentTurn: false },
        ], // Array of players
      }
    };
  },
  actions: {
    setLobby(lobby) {
      this.lobby = lobby;
    },
    appendPlayer(player) {
      this.lobby.players.push(player);
    },
    removePlayer(playerId) {
      const index = this.lobby.players.findIndex(player => player.player_id === playerId);
      if (index !== -1) {
        this.lobby.players.splice(index, 1);
      }
    },
  },
});
