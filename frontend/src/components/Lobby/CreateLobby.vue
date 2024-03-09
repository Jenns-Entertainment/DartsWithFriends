<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h1 class="Home-Section-Heading">Create Lobby</h1>
      </div>
      <form class="modal-form" @submit.prevent="createLobby">
        <div class="form-group">
          <label for="lobbyname">Lobby Name</label>
          <input type="text" id="lobbyname" v-model="lobby.name" required :disabled="!enable_LobbyName" />
        </div>
        <div class="form-group">
          <label for="private">Availability</label>
          <select id="private" v-model="lobby.private" @change="fn_toggle_private">
            <option value="true">Private</option>
            <option value="false">Public</option>
          </select>
        </div>
        <div class="form-group" v-if="lobby.private === 'true'">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="lobby.password" />
        </div>
        <div class="form-group">
          <button class="advanced-btn" @click.prevent="fn_toggle_advanced_Settings">
            {{ show_advanced_Settings ? 'Hide Advanced Settings' : 'Show Advanced Settings' }}
          </button>
        </div>
        <div class="form-group" v-show="show_advanced_Settings">
          <label for="rules">RuleSet</label>
          <select id="rules" @change="fn_toggle_ruleset" v-model="lobby.rooleset">
            <option value="0">Default</option>
            <option value="1">Clock</option>
          </select>

          <div v-if="lobby.rooleset === 0" class="advanced-settings">
            <div class="form-group">
              <label for="score">Score</label>
              <input type="number" id="score" v-model="lobby.score" min="1" />
            </div>
            <div class="form-group">
              <label for="outType">Out Type</label>
              <select id="outType" v-model="lobby.outType">
                <option value="1">Single Out</option>
                <option value="2">Double Out</option>
                <option value="3">Masters Out</option>
              </select>
            </div>
            <div class="form-group">
              <label for="amount_sets">Sets</label>
              <input type="number" id="amount_sets" v-model="lobby.sets" min="1" />
            </div>
            <div class="form-group">
              <label for="amount_legs">Legs</label>
              <input type="number" id="amount_legs" v-model="lobby.legs" min="1" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <button class="cancel-btn" @click.prevent="close">Cancel</button>
          <button type="submit" class="submit-btn" v-if="create !== 0">Submit</button>
          <button type="button" class="update-btn" v-if="create === 0" @click.prevent="null">Update</button>
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
      //backend connection to create the lobby fn_backend_createLobby(lobbyStore.lobby)
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

.modal-header {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-size: 15px;
  margin-bottom: 0px;
  display: block;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 150px;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #ccc;
  color: #333;
}

.submit-btn {
  background-color: #4caf50;
  color: white;
}

.update-btn {
  background-color: #3498db;
  color: white;
}

.advanced-btn {
  background-color: #ccc;
  color: #333;
  padding: 8px 20px; /* Adjusted width */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

.advanced-settings {
  display: flex;
  flex-wrap: wrap;
}

.advanced-settings .form-group {
  width: 50%; /* Two columns for advanced settings */
  margin-bottom: 5px; /* Adjusted margin */
}

.no-margin-bottom {
  margin-bottom: 0;
}

</style>