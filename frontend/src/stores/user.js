import { defineStore } from 'pinia'
import PlayerService from "@/services/PlayerService.js";

export const useUserStore = defineStore('user',  {
  state: () => {
    return {
      currentUser: null,
      currentUserGames: null
    }
  },
  actions: {
    async updatePlayer() {
      this.currentUser = await PlayerService.getCurrentSpieler()
      this.currentUserGames = await PlayerService.getCurrentSpielerGames()
    }
  },
})
