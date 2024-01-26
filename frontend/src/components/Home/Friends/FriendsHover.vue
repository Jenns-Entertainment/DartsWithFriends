<!-- FriendsHover.vue -->

<template>
      <td><button class="table-action-button">View Profile</button></td>
      <td><button class="table-action-button">Challenge</button></td>
      <td><button class="table-action-button">Compare Statistics</button></td>
</template>

<script>
import '../../../assets/styles/home-style.css'
import '../../../assets/styles/table-styles.css'
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

</style>
