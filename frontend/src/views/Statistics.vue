<template>
    <div class="container">
      <table class="dart-table">
          <tr>
            <th class="green-header">{{ currentUser.name }}</th>
            <th class="green-header">
              <select v-model="selectedFriend" @change="selectFriend" class="select-friend">
                <option value="" disabled>Select a friend</option>
                <option v-for="friend in friends" :key="friend.name" :value="friend.name">{{ friend.name }}</option>
              </select>
            </th>
          </tr>
          <td>
          <div v-for="stat in currentUserStatsList" :key="stat.stat">
            <tr>
                <td>
                    <C_Content_box :content="stat.value" :header="stat.stat" />
                </td>
            </tr>
        
        </div>
    </td>
            <td>
                <div v-for="stat in friendStatsList" :key="stat.stat">
                    <tr>
                        <td>
                            <C_Content_box :content="stat.value" :header="stat.stat" />
                        </td>
                    </tr>
                
                </div>
            </td>
    
      </table>
    </div>
  </template>
  
  <script>
  import C_Content_box from "../components/global/C_Content_box.vue";
  
  export default {
    components: {
      C_Content_box
    },
    data() {
      return {
        currentUser: {
          // Your current user information
          // Example: { id: 1, name: 'Your Name' }
        },
        currentUserStats: {
          // Your current user statistics
          // Example: { followers: 100, posts: 50, likes: 200 }
        },
        currentUserStatsList: [
          { stat: "avgPoints", value: "45.7" },
          { stat: "avgDoubleOutRate", value: "67.5" },
          { stat: "gamesPlayed", value: "102" },
          { stat: "gamesWon", value: "75" },
          { stat: "winRate", value: "73.5" },
          { stat: "num180s", value: "12" }
        ],
        friends: [],
        selectedFriend: null,
        friendStats: {},
        friendStatsList: [
          { stat: "avgPoints", value: "34" },
          { stat: "avgDoubleOutRate", value: "76.5" },
          { stat: "gamesPlayed", value: "10" },
          { stat: "gamesWon", value: "9" },
          { stat: "winRate", value: "90" },
          { stat: "num180s", value: "2" }
        ],
      };
    },
    mounted() {
      this.loadFriends();
      // Simulate loading current user information
      this.currentUser = {
        id: 1,
        name: 'Your Name',
      };
  
      // Simulate loading current user statistics
      this.currentUserStats = {
        followers: 100,
        posts: 50,
        likes: 200,
      };
    },
    methods: {
      loadFriends() {
        // Simulate loading friends data from an API or database
        this.friends = [
          { name: "Swaggerboy", online: true, clicked: false },
          { name: "Schaumstoff", online: true, clicked: false },
          { name: "Justus", online: false, clicked: false },
          { name: "Zebastian", online: false, clicked: false },
        ];
      },
      selectFriend() {
        const selectedFriendObject = this.friends.find(friend => friend.name === this.selectedFriend);
        if (selectedFriendObject) {
          this.friendStats = selectedFriendObject.stats;
          // Update friendStatsList with dynamic values
          this.friendStatsList.forEach(stat => {
            stat.value = this.friendStats[stat.stat] || "";
          });
        } else {
          // Handle the case when no friend is selected
          this.friendStats = {};
          // Reset friendStatsList values
          this.friendStatsList.forEach(stat => {
            stat.value = "";
          });
        }
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
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background-color: #2b742d;
    color: #ffffff;
    position: relative;
  }
  
  select.select-friend {
    width: calc(100% - 20px);
    padding: 8px;
    margin: 5px 10px;
    box-sizing: border-box;
    background-color: #333;
    color: #fff;
  }
  
  .content-box {
    width: 300px;
    height: 200px;
    margin: 20px auto;
  }
  </style>
  