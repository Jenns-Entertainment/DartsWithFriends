import { defineStore } from 'pinia'
import PlayerService from "@/services/PlayerService.js";
import { useGlobalStore } from './AppItems';

export const useUserStore = defineStore('user',  {
  state: () => {
    return {
      currentUser: null,
      currentUserGames: null,
    }
  },
  actions: {
    async updatePlayer() {
      const global = useGlobalStore();
      this.currentUser = await PlayerService.getCurrentSpieler_temp(global.current_user_id)
      //this.currentUserGames = await PlayerService.getCurrentSpielerGames()
    },
    logout(){

    }
  },
})
