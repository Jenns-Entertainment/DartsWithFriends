<!-- FriendsSection.vue -->

<template>
  <div id="friends-section" class="box">
    <h2 class="Home-Section-Heading">Friends</h2>
    <div class="friend-item friend-header">
      <div></div>
      <div class="column-heading">Name</div>
      <div></div>
    </div>
    <FriendItem
      v-for="friend in this.friends"
      :key="friend.name"
      :friend="friend"
      @toggle-friends-hover="toggleFriendsHover"
      :ref="`friend-${friend.name}`"
    />
    <FriendsHover
      v-if="selectedFriend"
      :friend="selectedFriend"
      @close-friends-hover="closeFriendsHover"
    />
  </div>
</template>

<script>
import FriendItem from "./FriendItem.vue";
import FriendsHover from "./FriendsHover.vue";

export default {
  components: {
    FriendItem,
    FriendsHover,
  },
  data() {
    return {
      selectedFriend: null,
      friends: []
    };
  },
  mounted(){
    this.loadFriends();
  },
  computed: {
    sortedFriends() {
      return this.friends.slice().sort((a, b) => {
        if (a.online && !b.online) return -1;
        if (!a.online && b.online) return 1;
        return a.name.localeCompare(b.name);
      });
    },
  },
  methods: {
    toggleFriendsHover(friend) {
      this.selectedFriend = this.selectedFriend === friend ? null : friend;
    },
    closeFriendsHover() {
      this.selectedFriend = null;
    },
    loadFriends() {
      // Simulate loading friends data from an API or database
      this.friends = [
        { name: "Swaggerboy", online: true },
        { name: "Schaumstoff", online: true },
        { name: "Justus", online: false },
        { name: "Zebastian", online: false },
      ];
    },
  },
};
</script>

<style scoped>
#friends-section {
  margin-top: 20px;
  text-align: center;
}



.friend-item {
  position: relative;
  display: grid;
  grid-template-columns: 19% 81% ;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.friend-item.friend-header {
  font-weight: bold;
  background-color: #f5f5f5;
}

.column-heading {
  text-align: left;
}
</style>
