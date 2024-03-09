<template>
<button :class="[
    'c_btn',
    this.player.turn ? 'positive' : 'cancel'
]" :disabled = !player.turn>
{{ text }}
</button>
    
    </template>
    
    <script>
    export default {
      name: "Lobby_StartTurn_btn",

      props:{
        player:Object,
        currentplayer:Object

      },
      data(){
        return{
            text:String
        }
      },
      created(){
        if(this.player.turn){
            this.text="throw"
        }else{
            this.text="waiting for " + this.currentplayer.name;
        }
      }
    }
    </script>