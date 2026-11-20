import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Sabir'
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },

    incrementBy(value:any) {
      this.count += value;
    },

    reset() {
      this.count = 0;
    },

    updateName(name:any) {
      this.name = name;
    }
  }
});
