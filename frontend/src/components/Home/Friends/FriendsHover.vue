<!-- FriendsHover.vue -->

<template>
  <tr>
      <td><button class="table-action-button">View Profile</button></td>
      <td><button class="table-action-button">Challenge</button></td>
      <td><button class="table-action-button">Compare Statistics</button></td>
    </tr>
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
    friend_clicked() {
      this.$emit("view-bnt-clicked");
    },
  },
};
</script>

<style scoped>

</style>
