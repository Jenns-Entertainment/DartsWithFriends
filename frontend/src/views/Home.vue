<template>
  <div id="app" class="home-container">
    <div id="home-left-column" class="column">
      <div id="top-section" class="home-section">
        <button @click="showCreateGame = true" class="action-button primary">Create Game</button>
        <button @click="joinGame" class="action-button primary">Join Game</button>
      </div>
      <LastGamesSection />
      <StatisticsSection />
    </div>

    <div id="home-right-column" class="column">
      <div id="online-players" class="home-section">
        <p>{{ onlinePlayers }} players are currently online</p>
      </div>
      <FriendsSection @close-friends-hover="closeFriendsHover" @show-friends-hover="showFriendsHover" />
      <div>Here to add possible outs</div>
    </div>

    <!-- Display CreateLobby modal based on showModal value -->
    <CreateLobby v-show="showCreateGame" @close-modal="showCreateGame = false"></CreateLobby>
  </div>
</template>

<script>
import FriendsHover from "../components/Home/Friends/FriendsHover.vue";
import FriendsSection from "../components/Home/Friends/FriendsSection.vue";
import CreateLobby from "../components/Lobby/CreateLobby.vue";
import LastGamesSection from "../components/Home/LastGames/LastGamesSection.vue";
import StatisticsSection from "../components/Home/Statistics/StatisticsSection.vue";
import '../assets/styles/home-style.css';
import C_Content_box from "../components/global/C_Content_box.vue";

export default {
  components: {
    CreateLobby,
    FriendsHover,
    LastGamesSection,
    FriendsSection,
    StatisticsSection,
    C_Content_box
},
  data() {
    return {
      onlinePlayers: 2, // Initialize with the actual count of online players
      showCreateGame: false,
      hoveredFriend: null,
      showFriendsOptions: false,
    };
  },
  methods: {
    joinGame() {
      // Implement join game action
      alert('Join Game clicked');
    },
    closeFriendsHover() {
      // Close FriendsHover when the close event is triggered (e.g., by clicking the red x)
      this.hoveredFriend = null;
    },
    showFriendsHover(friend) {
      // Show FriendsHover when the friend's name is clicked
      this.hoveredFriend = friend;
    },
    loadFriends(){
      // TODO: call backend service to load Lobbies
    },
    loadLastGames(){
      // TODO: call backend service to load last Games
    },
    loadStatisticsPreview(){
      // TODO: call backend service to load Statistics Preview
    }
  },
};
</script>

<style scoped>




</style>
