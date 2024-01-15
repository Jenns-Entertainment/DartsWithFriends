import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global',  {
  state: () => {
    return {
        prevPage: String,
        nextPage: String,
    }
  },
  actions: {
   resetPrevPage(){
    this.prevPage = '';
   }
  },
})