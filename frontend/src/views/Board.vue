<!-- Board is the Page where you enter your Points (new Name needed?) -->
<template>
  <head class="board">

  </head>

  <body class="main_body">
    <div class="current_score">
      <CurrentScore id="current_score" text="CurrentScore" label="Press Start" class="text-center" readonly
        >
      </CurrentScore>
      <h6 style="color:white; font-style: italic; font-size: 60%; padding-top: 0.5%; padding-bottom: 0.5%;">Possible
        outs:
        T69 | D69 | 69</h6>
    </div>
    <div class="grid_container">

      <InputScoreThrow id="t1" text="Throw1" label="Throw 1" class="item_throw1 text-center" readonly
        :value="this.throws[0]"></InputScoreThrow>
      <InputScoreThrow id="t2" text="Throw2" label="Throw 2" class="item_throw2 text-center" readonly
        :value="this.throws[1]"></InputScoreThrow>
      <InputScoreThrow id="t3" text="Throw3" label="Throw 3" class="item_throw3 text-center" readonly
        :value="this.throws[2]"></InputScoreThrow>

      <button id="start" @click="fn_start()" class="item_start bg-yellow-600 hover:bg-yellow-200 rounded">Start</button>

      <button id="item_double" @click="fn_double()"
        class="item_double multiply bg-gray-600 hover:bg-green-800 rounded">Double</button>
      <button id="item_triple" @click="fn_triple()"
        class="item_triple multiply functional bg-gray-600 hover:bg-green-800 rounded">Triple</button>
      <ButtonScoreList :btns="btns"  @get-score="fn_setScore" />
      <button id="item_delete" class="item_delete bg-red-600 hover:bg-red-800 rounded-md" @click="fn_delete()"
        :disabled='this.fn_await_score_btn()'>Delete</button>
      <button id="item_submit" @click="this.fn_submit_score()" class="item_submit bg-green-600 hover:bg-green-800 rounded-md"
        :disabled='this.fn_await_score_btn()'>Submit</button>
    </div>
  </body>

  <!-- <body onload='Board()'></body>-->
</template>



<script>
import MainHeader from "@/components/global/MainHeader.vue";
import { getGlobalThis, parseStringStyle } from "@vue/shared";
import { getTransitionRawChildren, initCustomFormatter } from "vue";
import ButtonScore from "../components/Board/ButtonScore.vue";
import CurrentScore from "../components/Board/currentScore.vue";
import InputScoreThrow from "../components/Board/inputScoreThrow.vue";
import ButtonScoreList from "../components/Board/ButtonScoreList.vue";
import { useLobbyStore } from "../stores/lobby";


export default {
  name: 'Board',
  components: {
    MainHeader,
    ButtonScore,
    InputScoreThrow,
    ButtonScoreList,
    CurrentScore,
  },
  data() {
    return {
      btns: [],
      throws: [0, 0, 0],
      currentThrow: 0,
      await_score_btn: false,
      multiplier: 1,
      doubleclicked: false,
      tripleclicked: false,
      lobby: Object,
    }


  },


  methods: {
    fn_double() {
      this.fn_resetLabel();
      this.tripleclicked = false
      if (this.doubleclicked == false) {
        this.fn_addLetterToLabel("D");
        this.multiplier = 2;
        this.doubleclicked = true 
      } else {
        this.multiplier = 1;
        this.doubleclicked = false
      }


    },

    fn_triple() {
      this.fn_resetLabel();
      this.doubleclicked = false
      if (this.tripleclicked == false) {
        this.fn_addLetterToLabel("T");
        this.multiplier = 3;
        this.tripleclicked = true 
      } else {
        this.multiplier = 1;
        this.tripleclicked = false
      }


    },
    fn_await_score_btn(){
      if(this.doubleclicked || this.tripleclicked){
        return true;
      }else{
        return false;
      }
    },

    fn_delete() {
      if (this.currentThrow > 0) {
        this.currentThrow--
      }
      this.throws[this.currentThrow] = 0
    },
    fn_setScore(number) {
      let score = number * this.multiplier;
      this.throws[this.currentThrow] = score
      this.currentThrow++
      // reset functionality
      this.fn_reset_multi_btns();
      this.fn_resetLabel();
      this.multiplier = 1;
    },
    fn_reset_multi_btns(){
      this.doubleclicked = false;
      this.tripleclicked = false;
    },

    fn_addLetterToLabel(letter) {
      for (var i = 1; i < this.btns.length; i++) {
        this.btns[i].label = letter + this.btns[i].label
      } // for now, later the label must be dependant on value of multiplier_clicked?
    },
    fn_resetLabel() {
      for (var i = 1; i < this.btns.length; i++) {
        this.btns[i].label = this.btns[i].score
      }
    },

    fn_initScoreButtons() {
      for (var i = 0; i <= 20; i++) {
        const btn =
        {
          id: i,
          label: i,
          score: i
        }
        this.btns = [...this.btns, btn]
      }
      const btn =
      {
          id: 25,
          label: 25,
          score: 25
      }
      this.btns = [...this.btns, btn]
    },

    fn_submit_score(){
    this.score = this.throws[0] +  this.throws[1] +  this.throws[2];
    alert(this.score);
    //Backend Connection to give the lobby or add the darts
  }

  },
  async created() {
    this.fn_initScoreButtons();
    const lobbyStore = useLobbyStore();
    this.lobby = lobbyStore;
  },
  
}

</script>
<style scoped>
.version_footer {
  font-style: italic;
  color: white;
  font-size: 75%;
  padding-top: 0.5%;
}

.copyright_footer {
  font-style: italic;
  color: black;
  float: right;
  font-size: 75%;
  padding-top: 0.5%;
}


.multiply {
  font-size: 100%;
}

.grid_container {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  font-size: 30px;
  background-color: rgb(46, 46, 46);
  padding: 10px;
  border: 1px solid white;
  height: 60vh;
}

.item_input {
  font-size: 250%;
  text-align: center;
  grid-column: 1 / 8;
}

.item_submit {
  grid-column: 7;
  grid-row: 3 / 7;
  font-weight: 550;
}

.item_delete {
  grid-column: 6 / 8;
  grid-row: 2;
  font-weight: 550;
}

.current_score {
  background-color: rgb(46, 46, 46);
  background-size: cover;
  text-align: center;
  padding-top: 3%;
  font-size: 40px;
  border: 1px solid white;
}

.item_double {
  grid-column: 1 / 3;
  grid-row: 2;
  font-weight: 550;
}

.item_triple {
  grid-column: 3 / 6;
  grid-row: 2;
  font-weight: 550;
}

.item_start {
  grid-column: 7;
  grid-row: 1 / 1;
  font-size: 155%;
  height: max-content;
}

.item_throw1 {
  grid-area: 1 / 3 / 1 / 1;
  font-size: 150%;
  height: max-content;
}

.item_throw2 {
  grid-area: 1 / 5 / 1 / 3;
  font-size: 150%;
  height: max-content;
}

.item_throw3 {
  grid-area: 1 / 7 / 1 / 5;
  font-size: 150%;
  height: max-content;
}
</style>