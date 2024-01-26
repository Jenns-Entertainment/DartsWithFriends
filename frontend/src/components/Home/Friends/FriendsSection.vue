<!-- FriendsSection.vue -->

<template>
  <div id="friends-section" class="home-section">
    <h2 class="Home-Section-Heading">Friends</h2>
      <table class="dart-table">
          <tr>
              <th >Status</th>
              <th >Name</th>
              <th></th>
          </tr>
          <FriendItem
              v-for="friend in this.friends"
              v-bind="friend.clicked"
              :key="friend.name"
              :friend="friend"
              @friend-clicked="friendclicked()"
              :ref="`friend-${friend.name}`"
          />
          
          </table>
    
  </div>
  
</template>

<script>
import '../../../assets/styles/home-style.css';
import '../../../assets/styles/table-styles.css';
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

    friendclicked(){
      //loop through this.friends and set all clicked to false
      this.friends.forEach(friend => {
        friend.clicked = false;
      });
    },
    
    loadFriends() {
      // Simulate loading friends data from an API or database
      this.friends = [
        { name: "Swaggerboy", online: true, clicked: false},
        { name: "Schaumstoff", online: true, clicked: false},
        { name: "Justus", online: false, clicked: false},
        { name: "Zebastian", online: false, clicked: false },
      ];
    },
  },
};
</script>

<style scoped>




.dart-table th:nth-child(1) {
  width: 30%; /* Adjust the width of the first column */
}

.dart-table th:nth-child(2) {
  width: 30%; /* Adjust the width of the second column */
}

.dart-table th:nth-child(3) {
  width: 40%; /* Adjust the width of the third column */
}

</style>
