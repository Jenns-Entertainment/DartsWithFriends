<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <C_Header title="Create Lobby"></C_Header>
      <form class="w-full max-w-lg" @submit.prevent="createLobby">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <C_txtField id="lobbyname" type="text" name="lobbyname" required placeholder="Lobby name" label="LobbyName"
              :value="this.lobby.name" :disabled="!this.enable_LobbyName"/>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/4 px-3">
            <label for="private">Availability</label> <br>
            <select name="outType" id="outType" class="c_textfield" v-model="lobby.private" @change="fn_toggle_private($event)">
                <option value=true>Private</option>
                <option value=false >Public</option>
              </select>
          </div>
          <div class="w-full md:w-3/4 px-3">
            <C_txtField id="password" type="text" name="password" placeholder="Password" label="Password" v-if="this.lobby.private == 'true'"
              :value="this.lobby.password" />
          </div>
          <div class="w-full md:w-1/3 px-3" v-show="false">
            <label for="amount_Players">Player</label>
            <input class="c_textfield" id="amount_Players" type="number" name="amount_Players" required placeholder=1 min=1
              max="1000" v-model="lobby.amtPlayers" label="Player" />
          </div>
          <div class="w-full md:w-1/1 px-3">
          <button class="c_btn cancel" @click.prevent="fn_toggle_advanced_Settings">Advanced Settings</button>
        </div>

        <div  class="w-full md:w-full px-3" v-show="this.show_advanced_Settings">
          <div class="w-full md:w-full px-3">
            <label for="rules">RuleSet:</label>
          <select name="rules" id="rules" @change="fn_toggle_ruleset($event)"
            class="c_textfield" v-model="this.lobby.rooleset" >
            <option value=0 selected>Default </option>
            <option value=1>Clock</option> <!-- TODO Regeln einfügen//-->
          </select>
          </div>
        <div v-if="this.lobby.rooleset == 0" id="on_default_rooleset">
        <div class="flex flex-wrap -mx-3 mb-2" >
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="score">Score</label>
            <input class="c_textfield" id="score" type="number" name="score" required placeholder=501 default="501" min=1 v-model="lobby.score"/>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="amount_legs">Out Type:</label>
              <select name="outType" id="outType" class="c_textfield" v-model="lobby.outType">
                <option value="1">Single Out</option>
                <option value="2" >Double Out</option>
                <option value="3">Masters Out</option>
              </select>
          </div>
          <div class="flex flex-wrap -mx-0 mb-2" >
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="amount_sets">Sets:</label>
              <input type="number" name="amount_sets" id="amount_sets" class="c_textfield" v-model="lobby.sets" min="1">
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="amount_legs">Legs:</label>
              <input type="number" name="amount_legs" id="amount_legs" class="c_textfield" v-model="lobby.legs" min="1">
          </div>
        </div>
        </div>
        </div>
      </div>
        <div class="flex flex-wrap -mx-3 mb-2" v-if="this.lobby.rooleset == 1" id="on_clock_rooleset">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
              <label for="reverseClock">Reverse Clock? </label>
              <input id="reverseClock" name="reverseClock" type="checkbox" />
            </div>
          </div>
        </div>
          <div  class="flex flex-wrap -mx-3 mb-2">
            <button class="c_btn red" @click.prevent="close">Cancel</button>
            <button type="Submit" class="c_btn positive" v-if="this.create != 0">Submit</button>
            <button type="Update" class="c_btn update" v-if="this.create == 0" @click.prevent="null">Update</button>
        </div>
      </form>
      
    </div>
  </div>
</template>
  
<script>
import C_Header from '../global/C_Header.vue';
import C_txtField from '../global/C_txtField.vue';
import { useLobbyStore } from '../../stores/lobby.js';
import { useGlobalStore } from '../../stores/AppItems';
import { vShow } from 'vue';
export default {
  name: "CreateLobby",
  components: { C_Header, C_txtField },
  methods: {
    fn_toggle_ruleset(event) {
      this.lobby.rooleset = event.target.value;
    },
    fn_toggle_private(event) {
      this.lobby.private = event.target.value;
      console.log(this.lobby.private)
    },
    fn_toggle_advanced_Settings(){
      this.show_advanced_Settings = !this.show_advanced_Settings;
      console.log(this.show_advanced_Settings)
    },
    createLobby(e) {
      this.fn_readFormData(e);
      this.fn_fillLobyStore();
      this.$router.push({ name: 'Lobby'})
      

    },

    fn_readFormData(e){
      const form = e.target
      const formData = new FormData(form)
      this.lobby.name = (formData.get('lobbyname'))
      this.lobby.password = (formData.get('password'))
      this.lobby.lobbyCode = Math.floor(Math.random() * 90000) + 10000  //TODO: generate LobbyCode
    },
    fn_fillLobyStore(){
      const lobbyStore = useLobbyStore();
      lobbyStore.lobby = this.lobby;
    },
    fn_init_changeLobbyView(){
      const lobbyStore = useLobbyStore();
      this.enable_LobbyName = false;
      this.show_advanced_Settings = true;
      this.lobby = lobbyStore.lobby
    },
    fn_init_createLobbyView(){
      this.enable_LobbyName = true;

    },
    close() {
      this.$emit('close-modal')
    },


  },
  data() {
    return {
      show_advanced_Settings : false,
      enable_LobbyName : true,
      lobby: {
        name: "",
        password: "",
        amtPlayers: 1,
        private: 'true',
        rooleset: 0,
        score: 501,
        sets: 1,
        legs: 1,
        outType: 2,
        lobbyCode: "",
      }
    }
  },
  props: {
    create: {
      type: Number,
      default: 1
    }
  },
  async created() {
    if(this.create != 1){
      this.fn_init_changeLobbyView();
    }else{
      this.fn_init_createLobbyView();
      
    }
  },
  emits: ['close-modal']
}
</script>
  

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 720px;
  width: 550px;
  margin-top: 5%;
  padding: 30px 2%;
  border-radius: 10px;
}



h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}</style>
