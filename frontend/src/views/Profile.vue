<!-- The Profile Page shows Information about your Account (administrative information) -->
<template>
  <div class="container">
    <C_Header title="Benutzerinfo (Aktuell Angemeldeter Benutzer)" />
    <br>
    <br>
    <div v-if="store.currentUser != null" class="player-item text-2xl font-bold">
      <hr>

      Email: {{ store.currentUser.email }}    <br>
      Nickname: {{ store.currentUser.nickname }}  <br>

      <hr>

      Spiele: <pre class="text-xs font-light"> {{store.currentUserGames}} </pre><br>
    </div>
    <CustomButton @click="performLogout" color="red" text="Logout"/>
  </div>
</template>

<script setup>

import CustomButton from "@/components/global/CustomButton.vue";
import LogoutService from "@/services/LogoutService.js";
import {useUserStore} from "@/stores/user";
import router from "@/router";
import {onMounted} from "vue";
import C_Header from '../components/global/C_Header.vue';

const store = useUserStore();

async function performLogout () {
  if (await LogoutService.performLogout()) {
    await store.updatePlayer()
    await router.push({name: "login"});
  }
}

onMounted(() => {
  store.updatePlayer();
})

</script>
