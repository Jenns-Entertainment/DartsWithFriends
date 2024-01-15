<!-- Register Dialog to create a new Account -->
<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <Nav></Nav>
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-zinc-300 px-6 py-8 rounded shadow-md text-black w-full">
        <C_Header title="Sign Up"/>
        <form method="post" @submit.prevent="performRegister">
          <C_txtField
            type="text"
            name="Anzeigename"
            required
            placeholder="Anzeigename" />
        <C_txtField
          type="email"
          name="email"
          required
          placeholder="Email" />
        <C_txtField
          type="password"
          name="password"
          required
          placeholder="Password" />
        <C_txtField
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          required
          placeholder="Confirm Password" />
        <C_btn
          color="green"
          text="create Account"
          type="submit"
        />
        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <NavLink link="about" name="Terms of Service" class="no-underline border-b border-grey-dark text-grey-dark"/>
          and
          <NavLink link="about" name="Privacy Policy" class="no-underline border-b border-grey-dark text-grey-dark"/>
        </div>
        </form>
      </div>
      <div class="text-grey-dark mt-6">
        Already have an account?
        <a class="no-underline border-b border-blue text-blue" href="/login">
          Log in
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import C_txtField from "@/components/global/C_txtField.vue";
import C_btn from "@/components/global/C_btn.vue";
import NavLink from "@/components/navbar/NavLink.vue";
import RegisterService from "@/services/RegisterService.js";
import router from "@/router";
import C_Header from "../components/global/C_Header.vue";

export default {
  components: {C_btn, C_txtField, NavLink, C_Header },
  data () {
    return {
      email: '',
      nickname: '',
      passwort: ''
    }
  },
  methods: {
    async performRegister (e) {
      const form = e.target
      const formData = new FormData(form)
      const email = formData.get('email')
      const anzeigename = formData.get('Anzeigename')
      const password = formData.get('password')
      const confirm_password = formData.get('confirm_password')
      if(password===confirm_password){
        console.log("Passwörter stimmen überein"); // TODO: Remove debug output
        if (await RegisterService.performRegister(email,anzeigename,password)){
          await router.push({name: "login"});
        }
      }else{
        alert("Passwörter stimmen nicht überein");
      }
    }
  }
}
</script>

<style scoped>

</style>
