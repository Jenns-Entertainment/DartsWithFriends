<template>
  <div id="settings-box">  
    <div id="settings-navbar-left">
      <div class="navigation">
        <button @click="showSection('account')">Your Account</button>
        <button @click="showSection('privacy')">Privacy</button>
        <button @click="showSection('ui-preferences')">UI Preferences</button>
    </div>
    <div id="settings-content-right">
      <div v-if="selectedSection === 'account'" class="section">
        <AccountSettings />
      </div>
      <div v-if="selectedSection === 'privacy'" class="section">
        <PrivacySettings />
      </div>
      <div v-if="selectedSection === 'ui-preferences'" class="section">
        <UI_Preferences />
      </div>
    </div>
  </div>
</div>

</template>

<script>
import '../assets/styles/settings-style.css';
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
  components: { AccountSettings, PrivacySettings, UI_Preferences },
};
</script>

<style>





</style>
