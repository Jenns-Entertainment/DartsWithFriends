<!-- FriendItem.vue -->

<template>
      <tr @click="toggleFriendsHover">
        <td><span :class="{ 'online-circle': friend.online, 'offline-circle': !friend.online }"></span></td>
        <td>{{ friend.name }}</td>
      </tr>
      <tr>
        <!-- here add the FriendHover stuff-->
        <FriendsHover
              v-if="friendsHover"
              :friend="this.friend"
            />
      </tr>

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
    data() {
    return {
      friendsHover: false,
      selectedFriend: null
    };
  },
    methods: {
      toggleFriendsHover(friend) {
      this.selectedFriend = this.selectedFriend === friend ? null : friend;
    },
    closeFriendsHover() {
      this.selectedFriend = null;
    },
      toggleFriendsHover() {
        this.friendsHover = !this.friendsHover;
        //this.$emit("toggle-friends-hover", this.friend);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  