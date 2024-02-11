<template>
  <div>
    <h1 class="Settings-Heading">Account Settings</h1>
    <br>
    <div class="account-item">
      <label class="account-item-header">Email Address</label>
      <div class="item-content">
        <span>{{ email }}</span>
        <i class="fas fa-pencil-alt" @click="editItem('email')">Edit</i>
      </div>
    </div>

    <div class="account-item">
      <label class="account-item-header">Password</label>
      <div class="item-content">
        <span>{{ password }}</span>
        <i class="fas fa-pencil-alt" @click="editItem('password')">Edit</i>
      </div>
    </div>

    <div class="account-item">
      <label class="account-item-header">Nickname</label>
      <div class="item-content">
        <span>{{ nickname }}</span>
        <i class="fas fa-pencil-alt" @click="editItem('nickname')">Edit</i>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/styles/settings-style.css';
export default {
  data() {
    return {
      email: 'user@example.com',
      password: '********', // Display asterisks for password
      nickname: 'JohnDoe'
    };
  },
  methods: {
    editItem(item) {
      // Handle the edit functionality for each item
      console.log(`Editing ${item}`);
      // You can implement your edit logic here
    }
  }
};
</script>

<style scoped>
.account-item {
  margin-bottom: 20px;
}

.account-item-header{
  font-size: 20px;
  text-align: center;
  font-weight: 700;
}

.label {
  font-weight: bold;
}

.fa-pencil-alt {
  margin-left: 10px;
  cursor: pointer;
}
</style>
