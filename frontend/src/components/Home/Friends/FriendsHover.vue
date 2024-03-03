<!-- FriendsHover.vue -->

<template>
  <tr>
      <td><button class="table-action-button">View Profile</button></td>
      <td><button class="table-action-button">Challenge</button></td>
      <td><button class="table-action-button" @click="compare_stats(this.friend.id)">Compare Statistics</button></td>
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
    compare_stats(friendId){
      this.$router.push({ name: 'Statistics', params:  { friendId } });
    }
  },
};
</script>

<style scoped>

</style>
