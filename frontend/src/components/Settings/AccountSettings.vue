<template>
  <div>
    <div class="account-item">
      <label>Email Address</label>
      <div class="item-content">
        <span>{{ email }}</span>
        <i class="fas fa-pencil-alt" @click="editItem('email')"></i>
      </div>
    </div>

    <div class="account-item">
      <label>Password</label>
      <div class="item-content">
        <span>{{ password }}</span>
        <i class="fas fa-pencil-alt" @click="editItem('password')"></i>
      </div>
    </div>

    <div class="account-item">
      <label>Nickname</label>
      <div class="item-content">
        <span>{{ nickname }}</span>
        <i class="fas fa-pencil-alt" @click="editItem('nickname')"></i>
      </div>
    </div>
  </div>
</template>

<script>
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

.label {
  font-weight: bold;
}

.item-content {
  display: flex;
  flex: 1;
  align-items: center;
}

.fa-pencil-alt {
  margin-left: 10px;
  cursor: pointer;
}
</style>
