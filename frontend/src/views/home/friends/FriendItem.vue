<!-- FriendItem.vue -->

<template>
      <tr @click="toggleFriendsHover" class="dart-table">
        <td><span :class="{ 'online-circle': friend.online, 'offline-circle': !friend.online }"></span></td>
        <td>{{ friend.name }}</td>
      </tr>
      
        <!-- here add the FriendHover stuff-->
        <FriendsHover
              v-if="friend.clicked"
              :friend="this.friend"
            />
      

  </template>
  
  <script>
  import '../../../assets/styles/home-style.css';
  import '../../../assets/styles/table-styles.css';
  import FriendsHover from './FriendsHover.vue';
  export default {
    components: {
    FriendsHover,
  },
    props: {
      friend: {
        type: Object,
        required: true,
      },
    },
    emits: ["friend-clicked"],
    data() {
      return {
        friendsHover: false,
        selectedFriend: null,
      };
    },
    methods: {
      
    closeFriendsHover() {
      this.selectedFriend = null;
    },
      toggleFriendsHover() {
        let origValue = this.friend.clicked;
        this.$emit("friend-clicked");
        this.friend.clicked = !origValue;
        
      },
    },
  };
  </script>
  
  <style scoped>

.online-circle,
  .offline-circle {
    display: inline-block;
    width: 10%;
    height: 10px;
    border-radius: 50%;

  }
  
  .online-circle {
    background-color: green;
  }
  
  .offline-circle {
    background-color: grey;
  }
  </style>
  