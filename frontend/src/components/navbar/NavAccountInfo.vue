<template>
    <div class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
      <form>
        <br>
        <RouterLink to="Settings" class="btn_navaccountinfo" >Settings</RouterLink>
        <RouterLink to="Profile" class="btn_navaccountinfo" >Profile</RouterLink>
        <button to="board" class="btn_navaccountinfo" @click="logout()" v-if="user != null">Logout</button>
        <button to="board" class="btn_navaccountinfo" @click="logout()" v-if="user == null">Login</button>
      </form>
    </div>
  </template>
  
  <script>
      import NavLink from "@/components/navbar/NavLink.vue"
      export default {
          name: "NavAccountInfo",
          components: {NavLink},
          props:{
            user : Object
          },
          methods:{
            logout(){

            }
          }
      }
  </script>
  
  <style >
.btn_navaccountinfo{
  padding-top: 0.5rem;
padding-bottom: 0.5rem; 
padding-left: 0.75rem;
padding-right: 0.75rem; 
color: #4B5563; 
font-size: 0.875rem;
line-height: 1.25rem; 
border-radius: 0.375rem; 
}

.btn_navaccountinfo:hover {
 background-color: #374151; 
color: #ffffff; 
 }

  </style>
  