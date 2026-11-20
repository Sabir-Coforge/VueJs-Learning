<script setup>
import { useCounterStore } from '@/Store/CounterStore';
import {ref} from 'vue';
const counterStore = useCounterStore();
const name = ref('Sabir');

const changeName = () => {
  counterStore.updateName(
    counterStore.name === 'Sabir' ? 'Ahmed' : 'Sabir'
  );
};

const increase = () => {
  counterStore.increment();
};
</script>

<template>
   <div>
    <header class="header">
      <h2>Welcome, {{ name }}</h2>
    </header>

  </div>
  <h2>Count: {{ counterStore.count }}</h2>
  <h2>Double Count: {{ counterStore.doubleCount }}</h2>
  <h2>Name: {{ counterStore.name }}</h2>

  <button @click="increase">Increment</button>
  <button @click="counterStore.decrement()">Decrement</button>
  <button @click="counterStore.reset()">Reset</button>
  <button @click="changeName">Change Name</button>
</template>


<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 16px 24px;
}

.content {
  padding: 24px;
}
</style>