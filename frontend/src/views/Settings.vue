<template>



    <div id="settings">
      <div class="navigation">
        <button @click="showSection('account')">Your Account</button>
        <button @click="showSection('privacy')">Privacy</button>
        <button @click="showSection('ui-preferences')">UI Preferences</button>
      </div>
  
      <div v-if="selectedSection === 'account'" class="section">
        <AccountSettings/>
      </div>
  
      <div v-if="selectedSection === 'privacy'" class="section">
        <PrivacySettings/>
      </div>
  
      <div v-if="selectedSection === 'ui-preferences'" class="section">
        <UI_Preferences/>
      </div>
    </div>
  </template>
  
  <script>
  import AccountSettings from '../components/Settings/AccountSettings.vue';
  import UI_Preferences from '../components/Settings/UI_Preferences.vue';
  import PrivacySettings from '../components/Settings/PrivacySettings.vue';
  export default {
    name: "Settings",
    data() {
        return {
            selectedSection: "account", // Default to Your Account
        };
    },
    methods: {
        showSection(section) {
            this.selectedSection = section;
        },
    },
    components: { AccountSettings, PrivacySettings, UI_Preferences }
};
  </script>
  
  <style>
  #settings {
    display: flex;
  }
  
  .navigation {
    width: 200px;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .navigation button {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .navigation button:hover {
    background-color: #f5f5f5;
  }
  
  .section {
    padding: 20px;
  }
  </style>