import { defineStore } from 'pinia'

export const useStatisticsStore = defineStore('statistics',  {
  state: () => {
    return {
        compare_user_id:{
          type: Number,
          default: null
        } 
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