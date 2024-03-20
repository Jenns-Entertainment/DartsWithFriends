<template>
  <div class="container">
    <table class="dart-table">
      <tr>
        <th class="green-header">{{ currentUser.name }}</th>
        <th v-if="selected_friend!=null">Compare</th>
        <th class="green-header" >
          <select v-model="selected_friend" class="select-friend">
            <option :value=null >Select a friend</option>
            <option v-for="friend in friends" :key="friend.userid" :value="friend.userid">{{ friend.name }}</option>
          </select>
        </th>
      </tr>
        <CompareStats_tr :chosenfriend="selected_friend"/>
    </table>
  </div>
</template>

<script>
import CompareStats_tr from "./Statistics_item.vue";
import C_Content_box from "../../components/global/C_Content_box.vue";
import { useStatisticsStore } from "../../stores/PageStores/Statistics";
import users from "../../assets/data/SampleData/users.json"
import { useGlobalStore } from "../../stores/AppItems";
import "../../assets/styles/table-styles.css"

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
    this.friends = this.fn_loadFriends();
    this.fn_loadFriendsNames();
    const statisticsStore = useStatisticsStore();
    this.selected_friend = statisticsStore.compare_user_id || 1;
  },

  methods: {
    fn_loadFriends() {
      // Simulate loading friends data from an API or database
      const globalStore = useGlobalStore();
      //console.log(globalStore.current_user_id);
      for(let i=0;i<users.length;i++){
        if(users[i].userid == globalStore.current_user_id){
          return users[i].friends;
        }
      }
      
    },
    fn_loadFriendsNames() {
      console.log(this.friends);
      this.friends.forEach(friend => {
        users.forEach(user => {
          if (friend.userid === user.userid) {
            friend.name = user.username;
          }
        });
      });
}


    
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
