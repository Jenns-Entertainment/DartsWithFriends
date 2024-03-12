<template>
  <tr>
    <td colspan="2" >
      <div class="horizontal-line">
        <button class="table-view-button" @click="compare_stats(friend.id)">Compare Stats</button>
        <button class="table-action-button">Challenge</button>
        <button class="table-warning-button">Remove Friend</button>
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
    flex-direction: row;
    align-items: center; /* Center the content horizontally */
    justify-content: center;
    height: 40px; /* ToDo needs to be changed later*/
}

.horizontal-line button {
    margin-right: 20px; /* Adjust the spacing between buttons as needed */
    margin-left: 20px;
    color: #ffffff;
    padding: 0%;
  }

th, td {
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: center;
    justify-content: center;
    align-items: center;
    
  }

.table-action-button,
.table-view-button,
.table-cancel-button
.table-warning-button {
    color: #ffffff;
    width: 100%; /* change this value so the buttons appear smaller */
    height: 100%;
  }

/* Add your other styles here */
</style>
