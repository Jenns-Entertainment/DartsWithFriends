<template>
  <div class="menu-container">
    <form>
      <div class="btn-row">
        <RouterLink to="Settings" class="btn_navaccountinfo">Settings</RouterLink>
      </div>
      <div class="btn-row">
        <RouterLink to="Profile" class="btn_navaccountinfo">Profile</RouterLink>
      </div>
      <div class="btn-row">
        <button to="board" class="btn_navaccountinfo" @click="logout()" v-if="user != null">Logout</button>
      </div>
      <div class="btn-row">
        <button to="board" class="btn_navaccountinfo" @click="logout()" v-if="user == null">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import NavLink from "@/components/navbar/NavLink.vue"

export default {
  name: "NavAccountInfo",
  components: { NavLink },
  props: {
    user: Object
  },
  methods: {
    logout() {
      // Implement logout method
    }
  }
}
</script>

<style>
.menu-container {
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  max-width: 12rem;
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  padding: 0.25rem 0;
  background-color: #ffffff;
  border: 1px solid #000000;
  outline: none;
}

.btn-row {
  margin-bottom: 0.5rem;
}

.btn_navaccountinfo {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  border: none;
  background: none;
}

.btn_navaccountinfo:hover {
  background-color: #374151;
  color: #ffffff;
}
</style>
