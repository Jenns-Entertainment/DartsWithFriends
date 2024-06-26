// lobby.js
import { defineStore } from 'pinia';
import LobbyService from "@/services/lobbyService.js"
import { useGlobalStore } from './AppItems';
import users from '../assets/data/SampleData/users.json'

export const useLobbyStore = defineStore('lobby',  {
  state: () => {
    return {
      lobby: {

      }
    };
  },
  actions: {
    load_lobby_data() {
      const globalStore = useGlobalStore();
      this.lobby = LobbyService.fn_load_lobby_details(globalStore.current_lobby_id)
      // this join will be moved to the backend later
      for (const player of this.lobby.players){
        for( const user of users){
          if(user.userid == player.userid){
            player.name = user.username;
          }
        }
      }
    },
  },
});
