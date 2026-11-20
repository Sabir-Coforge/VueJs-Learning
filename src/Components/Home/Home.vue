<script setup>
import { useCounterStore } from '@/Store/CounterStore';

import { useUserStore } from '@/Store/UserStore';
const counterStore = useCounterStore();
const userStore = useUserStore();
import { useRouter } from 'vue-router';
const router = useRouter();
import {onMounted, ref} from 'vue';
const error = ref('');



const changeName = () => {
  counterStore.updateName(
    counterStore.name === 'Sabir' ? 'Ahmed' : 'Sabir'
  );
};

const increase = () => {
  counterStore.increment();
};

const handleLogout = () => {
  userStore.logout('', false);
  router.push('login');
}

// Fetching list data from api
   const listData = ref ([]);  
    onMounted(async ()=>{
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        listData.value = data.map((list) => list.title);
      }catch(e){
        console.log(`Error: ${e}`)
      }
    })

  const handleContinue = ()=> {
   if (
    !userStore.selectedOptionValue ||
    userStore.selectedOptionValue === 'Select an option'
  ) {
    error.value = 'Please select an option';
    return;
  }
   router.push('/dashboard');
  }

const handleChange = (event) => {
  error.value = '';
  userStore.setSelectedOption(event.target.value);
};

</script>

<template>
   <div>
    <header class="header">
  <h2>Welcome, {{ userStore.username }}</h2>

  <button @click="handleLogout" class="logout-btn">
    Logout
  </button>
</header>

      <select
        :value="userStore.selectedOptionValue"
        @change="handleChange"
      >
        <option value="">Select an option</option>
        <option
          v-for="option in listData"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
       <p v-if="error" class="error">{{ error }}</p>
  </div>
  <button class="btn" @click="handleContinue">Continue</button>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #42b883;
}

.logout-btn {
  background: #dc2626;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background: #b91c1c;
}

select {
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error {
  color: red;
  margin-top: 8px;
}
.btn {
  margin-top: 5px;
  background-color: #28a745; /* Green */
  color: white;
  font-size: 20px; /* Big font */
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>