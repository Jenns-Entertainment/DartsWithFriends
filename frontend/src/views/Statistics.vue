<template>
  <div class="container">
    <table class="dart-table">
      <tr>
        <th class="green-header">{{ currentUser.name }}</th>
        <th v-if="selected_friend!=null">Compare</th>
        <th class="green-header" >
          <select v-model="selected_friend" class="select-friend">
            <option :value=null >Select a friend</option>
            <option v-for="friend in friends" :key="friend.id" :value="friend.id">{{ friend.name }}</option>
          </select>
        </th>
      </tr>
        <CompareStats_tr :chosenfriend="selected_friend"/>
    </table>
  </div>
</template>

<script>
import CompareStats_tr from "../components/Statistics/compareStats_tr.vue";
import C_Content_box from "../components/global/C_Content_box.vue";

export default {
  components: {
    C_Content_box,
    CompareStats_tr
},
  data() {
    return {
      friends: [],
      selected_friend: 1, //using null throws an error for compareStats_tr.vue
      currentUser :  {
        name: "Emil"
      }
    };
  },
  
  mounted() {
    this.loadFriends();
    this.selected_friend = Number(this.$route.params.friendId) || 1;
  },

  methods: {
    loadFriends() {
      // Simulate loading friends data from an API or database
      this.friends = [
        { name: "Swaggerboy",   id:0 },
        { name: "Schaumstoff",  id:2 },
        { name: "Justus",       id:3 },
        { name: "Zebastian",    id:4 },
      ];
    },
    
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px; /* Adjusted margin for top positioning */
}

table {
  width: 80%;
  border-collapse: collapse;
}
select.select-friend {
  width: calc(100% - 20px);
  padding: 8px;
  margin: 5px 10px;
  box-sizing: border-box;
  background-color: #333;
  color: #fff;
  text-align: center;
}
</style>
