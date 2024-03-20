<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h1 class="Home-Section-Heading">Invite Friends</h1>
        </div>
        <div>
            <table class="dart-table">
                <tr>
                    <th>Friend</th>
                    <th></th>
                </tr>
                <tr v-for="friend in this.friends">
                    <td>{{friend.name}}</td>
                    <td v-if="friend.invited==false"><button class="table-action-button" @click="friend.invited=!friend.invited">Invite</button></td>
                    <td v-if="friend.invited==true"><button class="table-view-button">invited</button></td>
                </tr>

            </table>
        </div>
      </div>
    </div>
  </template>
    
  <script>
    import '../../assets/styles/table-styles.css';
  export default {
    name: "InviteFriend_Modal",
    components: { },
    methods: {

    fn_loadFriends() {
      // Simulate loading friends data from an API or database
      this.friends = [
        { name: "Swaggerboy", invited:false, id:0},
        { name: "Schaumstoff", invited:false, id:2},
        { name: "Justus", invited:false, id:3},
        { name: "Zebastian", invited:false, id:4 },
      ];
    },
      close() {
        this.$emit('close-modal')
      },
      fn_inviteFriend(friendid){
        for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].id === friendid) {
          this.friends[i].invited = true;
          alert(this.friends[i].invited)
          break; // Stop looping once the friend is found
        }
      }
        
      }
    },
    mounted(){
    this.fn_loadFriends();
  },
    data() {
      return {
        friends: []
      }
    },
    emits: ['close-modal']
  }
  </script>
    
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: center;
    background-color: white;
    height: 720px;
    width: 550px;
    margin-top: 5%;
    padding: 30px 2%;
    border-radius: 10px;
  }
  
  .modal-header {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    font-size: 15px;
    margin-bottom: 0px;
    display: block;
  }
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 150px;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .cancel-btn {
    background-color: #ccc;
    color: #333;
  }
  
  .submit-btn {
    background-color: #4caf50;
    color: white;
  }
  
  .update-btn {
    background-color: #3498db;
    color: white;
  }
  
  .advanced-btn {
    background-color: #ccc;
    color: #333;
    padding: 8px 20px; /* Adjusted width */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 200px;
  }
  
  .advanced-settings {
    display: flex;
    flex-wrap: wrap;
  }
  
  .advanced-settings .form-group {
    width: 50%; /* Two columns for advanced settings */
    margin-bottom: 5px; /* Adjusted margin */
  }
  
  .no-margin-bottom {
    margin-bottom: 0;
  }

  .dart-table td {
  width: 80%;
}

.dart-table td:nth-child(2) {
  width: 20%;
}

.table-action-button,
.table-view-button {
    color: #ffffff;
    width: 100%; 
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  
  </style>