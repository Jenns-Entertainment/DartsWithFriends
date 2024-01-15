import { defineStore } from 'pinia'

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
        status: 0
      }
    }
  },
  actions: {
   
  },
})
