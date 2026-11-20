// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isLoggedIn:false,
    selectedOptionValue:''
  }),
  actions: {
    login(email:any, isLoggedIn= false) {
      this.username = email.split('@')[0];
      this.isLoggedIn = isLoggedIn;
    },

    logout(email:any, isLoggedIn= false) {
      this.username = email;
      this.isLoggedIn = isLoggedIn;
    },
    setSelectedOption(option:string) {
      this.selectedOptionValue = option;
    },
  },
  persist: true,
});