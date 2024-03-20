<!-- The LOgin Dialog Window, if you are not logged in and want to enter your Account-->
<template >
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-zinc-300 px-6 py-8 rounded shadow-md text-black w-full">
        <C_Header title="Login"/>
          <form method="post" @submit.prevent="performLogin">
            <p>
              <C_txtField
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
                autofocus
              />
            </p>
            <p>
              <C_txtField
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </p>
            <C_btn
              type="submit"
              text="Sign in"
              color="green"
            />
       </form>
      </div>
    </div>
  </div>
</template>

<script>

import C_btn from "@/components/global/C_btn.vue";
import LoginService from "@/services/LoginService.js";
import router from "@/router";
import C_txtField from "@/components/global/C_txtField.vue";
import C_Header from "@/components/global/C_Header.vue";
export default {
  components: { C_btn, C_txtField, C_Header },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async performLogin (e) {
      const form = e.target
      const formData = new FormData(form)
      console.log(formData)
      console.log(formData.get('username'))
      LoginService.performLogin(formData.get('username'), formData.get('password'))
          .then((result) => {
            if(result) {
              router.push({name: "Profile"})
            }
            else {
              alert("Benutzer nicht gefunden / Passwort falsch")
            }
          })
    }
  }
}
</script>
<style>

</style>
