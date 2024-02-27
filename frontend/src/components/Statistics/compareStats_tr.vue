<template>
    <tr  v-for="(stat,index) in currentUserStatsList" :key="stat.stat"> 
        <td>
            <C_Content_box :content="currentUserStatsList[index].value" :header="stat.stat" />
        </td>
        <td v-if="this.loadFriendsStat(index)!=null">
            Compare
            v-if="this.loadFriendData(chosenfriend)!=null"
        </td>
        <td v-if="this.loadFriendsStat(index)!=null">
            <C_Content_box  :content="friendStatsList[index].value" :header="stat.stat" />
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
        { stat: "avgPoints", value: "45.7" },
        { stat: "avgDoubleOutRate", value: "67.5" },
        { stat: "gamesPlayed", value: "102" },
        { stat: "gamesWon", value: "75" },
        { stat: "winRate", value: "73.5" },
        { stat: "num180s", value: "12" }
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
                { stat: "avgPoints", value: "34" },
                { stat: "avgDoubleOutRate", value: "76.5" },
                { stat: "gamesPlayed", value: "10" },
                { stat: "gamesWon", value: "9" },
                { stat: "winRate", value: "90" },
                { stat: "num180s", value: "2" }
            ];
        }else{
            return null;
        }
    },
  },
};
</script>

<style scoped>

</style>