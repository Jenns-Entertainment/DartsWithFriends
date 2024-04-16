<template>
  <nav class="navbar" id="navbar">
    <div class="navcontainer">
      <div class="navbar-content">
        <!-- Logo and links -->
        <div class="navbar-left">
          <div class="logo-container">
            <img class="logo hidden lg:block" src="@/assets/images/Dartboard.svg" alt="Dart" @click="this.$router.push({ name: 'Home' })">
          </div>
          <div class="navbar-left hidden sm:block sm:ml-6">
            <div class="link-group">
              <NavLink link="Home" name="Home" />
              <NavLink link="About" name="About" />
              <NavLink link="Board" name="Board" />
              <NavLink link="Dartboard" name="Dartboard" />
            </div>
          </div>
        </div>
        <!-- Right-side buttons -->
        <div class="navbar-right hidden sm:block sm:ml-6" id="right-side-nav">
          <div class="link-group">
            <NavLink link="Lobbies" name="Lobbies" />
            <NavLink link="JoinLobby" name="Join Lobby" />
            <button class="create-lobby-btn" @click="fn_route_createLobby()">Create Lobby</button>
            <img class="profile-icon hidden lg:block" src="@/assets/images/ProfileIcon2.png" alt="Profile" aria-current="page" @click="toggleShowAccountInfo" v-if="this.store.currentUser != null">
            <NavLink link="Login" name="Login" v-if="this.store.currentUser == null"></NavLink>
            
          </div>
          <div v-if="showAccountInfo" class="account-info hidden sm:block sm:ml-6" @mouseleave="toggleShowAccountInfo">
            <div class="link-group">
              <NavAccountInfo :user="this.store.currentUser"></NavAccountInfo>
            </div>
          </div>
        </div>
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
    },
    toggleMobileMenu() {
      // Functionality to toggle mobile menu
    }
  },
}
</script>

<style scoped>
.navbar {
  background-color: #1a202c;
  padding: 0.5rem 0;
}

.navcontainer {
  max-width: 85%;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo-container {
  margin-right: 1rem;
}

.logo {
  height: 2rem;
  cursor: pointer;
}

.navbar-links {
  display: none;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.link-group {
  display: flex;
  align-items: center;
}

.create-lobby-btn {
  background-color: transparent;
  color: #d1d5db;
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.profile-icon {
  height: 1.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
}

.account-info {
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.menu-items {
  padding: 0.5rem 0;
}

.menu-item {
  padding: 0.5rem 1rem;
  display: block;
  color: #d1d5db;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.menu-item:hover {
  background-color: #4a5568;
  color: #fff;
}

.menu-item.active {
  background-color: #4a5568;
  color: #fff;
}

.menu-icon {
  fill: none;
  stroke: #a0aec0;
  stroke-width: 2;
}

.mobile-menu-button {
  padding: 0.5rem;
}

.mobile-menu-content {
  display: none;
}

@media (max-width: 640px) {
  .navbar-content {
    flex-direction: column;
  }

  .navbar-left {
    margin-bottom: 0.5rem;
  }

  .navbar-links {
    display: block;
  }

  .navbar-right {
    margin-top: 0.5rem;
  }

  .mobile-menu-content {
    display: block;
  }

  .menu-item {
    padding: 0.5rem;
  }

  .menu-items {
    padding: 0;
  }
}
</style>
