<template>
    <tr class="dart-table" v-for="(stat,index) in currentUserStatsList" :key="stat.stat" > 
        <td :colspan="fn_get_colspan()">
          <div class="center_tabledata">
            <C_Content_box  :content="String(currentUserStatsList[index].value)" :header="stat.stat" />
          </div>
        </td>
        <td v-if="this.loadFriendsStat(index)!=null">
            <div class="center_tabledata">
              <img v-if="currentUserStatsList[index].value > friendStatsList[index].value" src="@/assets/images/arrow_white_left.svg" alt=">">
              <img v-if="currentUserStatsList[index].value < friendStatsList[index].value" src="@/assets/images/arrow_white_right.svg" alt=">">
              <img v-if="currentUserStatsList[index].value == friendStatsList[index].value" src="@/assets/images/Dartboard.svg" alt=">">
            </div>
        </td>
        <td v-if="this.loadFriendsStat(index)!=null">
          <div class="center_tabledata">
            <C_Content_box  :content="String(friendStatsList[index].value)" :header="stat.stat" />
          </div>
        </td>
      </tr>
    
</template>


<script>
import C_Content_box from "../../components/global/C_Content_box.vue";

export default {
  components: {
    C_Content_box
  },
  props: {
    chosenfriend: Number,
    },
  data() {
    return {
        currentUser : {},
        currentUserStatsList: [],
        friendStatsList: [],
    };
  },
  mounted() {
    this.loadUserData();
    this.loadFriendData();
    // Simulate loading current user information
    

    // Simulate loading current user statistics
  },
  methods: {
    loadUserData() {
        this.currentUser = {
            id: 1,
            name: 'Emil',
        }
        this.currentUserStatsList = [
        { stat: "avgPoints", value: 45.7 },
        { stat: "avgDoubleOutRate", value: 67.5 },
        { stat: "gamesPlayed", value: 102 },
        { stat: "gamesWon", value: 75 },
        { stat: "winRate", value: 73.5 },
        { stat: "num180s", value: 12 }
      ]
    },
    loadFriendsStat(index){
        if(this.chosenfriend!=null){
            return this.friendStatsList[index].value
        }else{
            return null;
        }
    },
    loadFriendData() {
        
        // Simulate loading friends statistics data from an API or database
        if(this.chosenfriend!=null){
            this.friendStatsList = [
                { stat: "avgPoints", value: 34 },
                { stat: "avgDoubleOutRate", value: 76.5 },
                { stat: "gamesPlayed", value: 10},
                { stat: "gamesWon", value: 9 },
                { stat: "winRate", value: 90 },
                { stat: "num180s", value: 2 }
            ];
        }else{
            return null;
        }
    },
    fn_get_colspan(){
      if(this.chosenfriend==null){
        return 3;
      }
    }
  },
};
</script>

<style scoped>

td {
  text-align: center; /* Center the content horizontally within the table cells */

}

.center_tabledata {
    display: flex;
    flex-direction: row;
    align-items: center; /* Center the content horizontally */
    justify-content: center;
}

img {
  width: 200px;  /* Set the desired width */
  height: 100px; /* Set the desired height */
  vertical-align: middle;
}

</style>