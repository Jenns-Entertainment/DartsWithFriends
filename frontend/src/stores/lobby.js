// lobby.js
import { defineStore } from 'pinia';
import LobbyService from "@/services/lobbyService.js"
import { useGlobalStore } from './AppItems';

export const useLobbyStore = defineStore('lobby',  {
  state: () => {
    return {
      lobby: {

      }
    };
  },
  actions: {
    async load_lobby_data() {
      const globalStore = useGlobalStore();
      this.lobby = await LobbyService.fn_load_lobby_details(globalStore.current_lobby_id)
    },
  },
});
