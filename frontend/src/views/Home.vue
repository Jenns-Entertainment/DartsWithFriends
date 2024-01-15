<template>
  <html lang="en">

  <head class="mainpage">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body>
    <CreateLobby v-show="this.showModal" @close-modal="showModal=false"></CreateLobby>
    <div class="headline-text">
      <h1 class="headline">
        A <span class="jenns">| J.E.N.N.S Software |</span> Production

      </h1>
    </div>
    <div class="menue">
      <h1 class="menue-text">
        Visit our GitHub:
        <br>
      </h1>
      <!-- FIXME: Add correct link here:     -->
      <div> <a class="text-link" href=""> Jenns_Software </a></div>
    </div>
    <div class="menue">
      <h1 class="menue-text">
        Current Project Status:
      </h1>
      <div>
        <h1 class="menue-status">
          Developing
        </h1>
      </div>
    </div>
    <div class="menue">
      <h1 class="menue-text">
        Active Users:
      </h1>
      <div>
        <h1 class="menue-users">
          No users here
        </h1>
      </div>
    </div>
    <button @click="this.showModal = true">Open Modal</button>
    <div class="btn-div">
      <div class="btn-play">
        <C_btn_routing link="login" name="Login">
        </C_btn_routing>
        
      </div>
      
    </div>
   

  </body>

  </html>
</template>

<script>


import C_btn_routing from "../components/global/C_btn_routing.vue";
import CreateLobby from "../components/Lobby/CreateLobby.vue";
export default {
  name: 'Home',
  components: {
    C_btn_routing,
    CreateLobby,
  },
  data(){
    return{
      showModal:false,
    }
  },
  methods:{
  }
}

</script>
<style>
.btn-div {
  display: flex;
  justify-content: center;
  padding-top: 2%;
  border-radius: 100%;
}

.btn-play {
  display: flex;
  justify-content: center;
  color: #ffffff;
  background-color: green;
  width: 20%;
  border-radius: 2%;
  font-size: 400%;
}

.jenns {
  font-size: 600%;
  font-style: italic;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: rgb(253, 253, 253);
}

.text-link {
  font-size: 200%;
  color: #0077ff;
  text-decoration: underline;
  padding-right: 2%;
}

.headline {
  font-size: 2vh;
  color: #ffffff;
  text-align: center;
  padding-top: 4%;
  padding-left: 1%;
}

.headline-text {
  background-color: #000000;
  padding: 5%;
  display: flex;
  justify-content: center;
  font-weight: 700;
}

.menue-text {
  font-size: 200%;
  color: #ffffff;
  text-align: center;
  padding-left: 2%;
  padding-right: 2%;
}

.menue {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}

.menue-status {
  font-size: 200%;
  color: chartreuse;
  text-align: center;
  padding-left: 0%;
  padding-right: 2%;
}
.menue-users{
  font-size: 200%;
  text-align: center;
  color: red;
  padding-left: 0%;
  padding-right: 2%;
  width: max-content;
}
</style>



