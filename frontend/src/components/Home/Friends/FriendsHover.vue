<!-- FriendsHover.vue -->

<template>
  <div class="friends-hover">
    <button class="action-button">View Profile</button>
    <br />
    <button class="action-button">Challenge</button>
    <br />
    <button class="action-button">Compare Statistics</button>
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
    closeFriendsHover() {
      this.$emit("close-friends-hover");
    },
  },
};
</script>

<style scoped>
.friends-hover {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  z-index: 2;
}

.action-buttons {
  display: flex;
  flex-direction: column;
}

.action-button {
  margin-bottom: 5px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #e0e0e0;
}
</style>
