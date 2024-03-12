<template>
  <tr>
    <td colspan="3" >
      <div class="horizontal-line">
        <button class="table-action-button">View Profile</button>
        <button class="table-action-button">Challenge</button>
        <button class="table-action-button" @click="compare_stats(friend.id)">Compare Stats</button>
      </div>
    </td>
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
.horizontal-line {
  display: flex;
  align-items: center;
  height: 30%;
}

.horizontal-line button {
  margin-right: 5px; /* Adjust the spacing between buttons as needed */
  color: #ffffff;
}

/* Add your other styles here */
</style>
