import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global',  {
  state: () => {
    return {
        prevPage: String,
        nextPage: String,
        current_lobby_id:1,
        current_user_id:0
    }
  },
  /*
  actions: {
   resetPrevPage(){
    this.prevPage = '';
   },
   set_current_lobby_id(p_id){
    this.current_lobby_id = p_id;
   }
  },
  */
})