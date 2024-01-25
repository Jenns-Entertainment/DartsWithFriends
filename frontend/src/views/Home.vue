<template>
  <div id="app" class="home-container">
    <div id="left-column" class="column">
      <div id="top-section" class="box">
        <button @click="showCreateGame = true" class="action-button primary">Create Game</button>
        <button @click="joinGame" class="action-button primary">Join Game</button>
      </div>
      <LastGamesSection />
      <StatisticsSection />
    </div>

    <div id="right-column" class="column">
      <div id="online-players" class="box">
        <p>{{ onlinePlayers }} players are currently online</p>
      </div>
      <FriendsSection @close-friends-hover="closeFriendsHover" @show-friends-hover="showFriendsHover" />
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

export default {
  components: {
    CreateLobby,
    FriendsHover,
    LastGamesSection,
    FriendsSection,
    StatisticsSection,
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
.home-container {
  display: flex;
  margin: 5%;
  background-color: #ffffff;
  border: 2px solid black;
}

.column {
  flex: 2;
  padding: 20px;
}

#right-column {
  flex: 1;
}
.box {
  padding: 20px;
  background-color: rgb(213, 213, 213);
  margin-bottom: 20px;
}

.action-button {
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;
  width: 100%;
}

.primary {
  background-color: #259929;
  color: white;
}

#top-section {
  text-align: center;
}

#online-players {
  background-color: rgb(213, 213, 213); /* Unified background color */
  padding: 20px;
  margin-bottom: 20px;
}



</style>
