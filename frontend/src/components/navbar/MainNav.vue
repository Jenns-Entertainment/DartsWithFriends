<template>
  <nav class="bg-gray-900" id="navbar">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden" id="mobile">
          <!-- Mobile menu button-->
          <button type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.
            Heroicon name: outline/menu
            Menu open: "hidden", Menu closed: "block"
          -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
            Icon when menu is open.
            Heroicon name: outline/x
            Menu open: "block", Menu closed: "hidden"
          -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start" id="left-side-nav">
          <div class="flex-shrink-0 flex items-center">
            <img class="hidden lg:block h-8 w-auto" src="@/assets/images/Dartboard.svg" alt="Dart"
              @click="this.$router.push({ name: 'Home' })">
            <!-- Image-->
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NavLink link="Home" name="Home" />
              <NavLink link="About" name="About" />
              <NavLink link="Board" name="Board" />
              <NavLink link="Dartboard" name="Dartboard" />
            </div>
          </div>
        </div>
        <div class="hidden sm:block sm:ml-6" id="right-side-nav" name="right-side-Buttons">
          <div class="flex space-x-4">
            <NavLink link="Lobbies" name="Lobbies" />
            <NavLink link="JoinLobby" name="join Lobby" />
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="fn_route_createLobby()">create Lobby</button>
            <img class="hidden lg:block h-8 w-auto" src="@/assets/images/ProfileIcon2.png" alt="Profile"
              aria-current="page" @click="toggleShowAccountInfo" v-if="this.store.currentUser != null">
            <NavLink link="Login" name="Login" v-if="this.store.currentUser == null"></NavLink>
          </div>
          <div v-if="showAccountInfo" class="hidden sm:block sm:ml-6" @mouseleave="toggleShowAccountInfo">
            <div class="flex space-x-4">
              <NavAccountInfo :user="this.store.currentUser"></NavAccountInfo>

            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">Dashboard</a>
        <a href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
        <a href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
        <a href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        <!-- TODO Navbar für Mobile machen -->
      </div>
    </div>

  </nav>
</template>

<script>
import NavLink from "@/components/navbar/NavLink.vue"
import NavAccountInfo from "@/components/navbar/NavAccountInfo.vue";
import { useUserStore } from "@/stores/user";
import { useGlobalStore } from "../../stores/AppItems";
export default {
  name: 'MainNav',
  components: { NavLink, NavAccountInfo },
  data() {
    return {
      showAccountInfo: false,
      store: useUserStore(),
      paramsWow: {
        showCreateGame : true
      }
    }
  },
  methods: {
    toggleShowAccountInfo() {
      this.showAccountInfo = !this.showAccountInfo
    },
    fn_route_createLobby(){
      const globalStore = useGlobalStore();
      globalStore.nextPage = 'createLobby';
      this.$router.push(({name: 'Lobbies'}))
    }
  },

  async created() {
    //console.log(this.store);
  }
}
</script>



<style></style>
