<!-- FriendItem.vue -->

<template>
    <div class="friend-item" @click="toggleFriendsHover">
      <div>
        <span :class="{ 'online-circle': friend.online, 'offline-circle': !friend.online }"></span>
      </div>
      <div class="friend-name">{{ friend.name }}</div>
      <div class="empty-column"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      friend: {
        type: Object,
        required: true,
      },
    },
    methods: {
      toggleFriendsHover() {
        this.$emit("toggle-friends-hover", this.friend);
      },
    },
  };
  </script>
  
  <style scoped>
  .friend-item {
    position: relative;
    display: grid;
    grid-template-columns: 10% 45% 45%;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  
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
  
  .friend-name {
    width: 45%;
    text-align: left;
  }
  
  .empty-column {
    width: 45%;
  }
  </style>
  