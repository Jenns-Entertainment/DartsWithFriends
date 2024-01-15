<!-- The Button create Page on the Game.vue Page will lead you to this dialog Page, your the USer choses the rules and player amount for his Game / Lobby
     After creating his Game, the User will be redirected to Lobby.vue
-->
<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col" id="overall_structure">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      id="small_container_middle_screen">
      <div class="bg-zinc-300 px-6 py-8 rounded shadow-md text-black w-full" id="grey_color_padding">
        <C_Header title="Create Lobby"/>
        <form @submit.prevent="createLobby">
          <input class="c_textfield" id="lobbyname" type="text" name="lobbyname" required placeholder="Lobby name"
            v-model="lobby.name"/>
          <input class="c_textfield" id="password" type="text" name="password" placeholder="Password (if empty = no Password)"
            v-model="lobby.password" />
          <label for="amountPlayers">Players:</label>
          
          <input class="c_textfield" id="amountPlayers" type="number" name="amountPlayers" required placeholder=1 min=1
            v-model="lobby.amtPlayers" />

          <label for="private" >Private Lobby</label>
          <input id="private" name="private" type="checkbox" v-model="lobby.private"/>
          <br><br>

          <label for="rules">RuleSet:</label>
          <select name="rules" id="rules" @change="toggle_ruleset($event)"
            class="c_textfield" v-model="this.lobby.rooleset">
            <option value="1" selected>Default </option>
            <option value="2">Clock</option> <!-- TODO Regeln einfügen//-->
          </select>
          <!-- "c_textfield" defined in App.vue-->
          <div id="different_roolesets">

            <div v-if="this.lobby.rooleset == 1" id="on_default_rooleset">
              <input class="c_textfield" id="score" type="number" name="score" required placeholder=501 default="501" min=1 v-model="lobby.score"/>

              <label for="amount_sets">Sets:</label>
              <select name="amount_sets" id="amount_sets" class="c_textfield" v-model="lobby.sets">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <label for="amount_legs">Legs:</label>
              <select name="rules" id="rules" class="c_textfield" v-model="lobby.legs">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <fieldset>
                <legend>possible Outs:</legend> <!-- TODO rename Legend//-->
                <div>
                  <input type="radio" id="singleOut" name="contact" value="singleOut" v-model="lobby.outType" />
                  <label for="singleOut"> singleOut </label>

                  <input type="radio" id="doubleOut" name="contact" value="doubleOut" v-model="lobby.outType" />
                  <label for="doubleOut"> doubleOut </label>

                  <input type="radio" id="MastersOut" name="contact" value="MastersOut" v-model="lobby.outType" />
                  <label for="MastersOut"> MastersOut </label>
                </div>
              </fieldset>
            </div>

            <div v-if="this.lobby.rooleset == 2" id="on_clock_rooleset">
              <label for="reverseClock">Reverse Clock? </label>
              <input id="reverseClock" name="reverseClock" type="checkbox" />
            </div>

          </div>
          <button type="Submit" class="c_btn positive">Submit</button>
        </form>
        <button class="c_btn negative" @click="close()">Cancel</button>
      </div>
    </div>

  </div>
</template>

<script>
import C_Header from "../global/C_Header.vue";
import C_txtField from "../global/C_txtField.vue";
export default {
  name: 'CreateLobby',
  components: {C_Header, C_txtField },
  methods: {
    toggle_ruleset(event) {
      this.lobby.rooleset = event.target.value;
    },
    createLobby(e) {
      console.log(this.lobby)
      this.lobby.lobbyCode = Math.floor(Math.random()*90000) + 10000  //TODO: generate LobbyCode
      this.$router.push({name: 'Lobby', params: {lobbyCode: this.lobby.lobbyCode , lobby: this.lobby}})
      
    },
    close(){
      this.$emit('close')
    }

  },
  data() {
    return {
      lobby: {
        name: "",
        password: "",
        amtPlayers: 1,
        private: false,
        rooleset: 0,
        score: 501,
        sets: 1,
        legs: 1,
        outType: Number,
        lobbyCode: "",
      }
    }
  },

}
</script>

<style scoped>


</style>
