<script setup>
import { reactive } from 'vue';
import { ref, computed, watchEffect } from 'vue';

 
// Fetching api using watchEffect
const userId = ref(1);
const userData = ref(null);
const loading = ref(false);
const error = ref(null);

watchEffect(async (onCleanup) => {
  const controller = new AbortController();

  onCleanup(() => {
    controller.abort(); // cancel previous request
  });

  try {
    loading.value = true;
    error.value = null;
    console.log(userId.value)
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId.value}`,
    { signal: controller.signal }
  );

    userData.value = await response.json();
    console.log(userData.value);
  } catch (err) {
    if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
      error.value = err.message;
    }
  } finally {
    loading.value = false;
  }
});


const email = ref('');

const emailPrefix = computed(() =>
  email.value.split('@')[0]
);

const firstName = ref('Sabir');
const lastName = ref('Ahmed');

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const user = reactive({
  name: 'Sabir',
  age: 30
});

const updateName = () => {
  user.name = 'Ahmed';
  user.age = 35
};
</script>

<template>

  <div>
  <select v-model="userId">
    <option value="1">User 1</option>
    <option value="2">User 2</option>
    <option value="3">User 3</option>
  </select>

  <p v-if="loading">Loading...</p>
  <p v-if="error">{{ error }}</p>

  <div v-if="userData">
    <h3>{{ userData.name }}</h3>
    <p>{{ userData.email }}</p>
  </div>
</div>
    <!-- Testing Reactivate -->
  <h2>{{ user.name }}</h2>
  <h2>{{ user.age }}</h2>

  <button @click="updateName">
    Update Name
  </button>

  <!-- Testing computed -->
   <p>First Name: {{ firstName }}</p>
   <p>Last Name: {{ lastName }}</p>

  <h2>Full Name: {{ fullName }}</h2>

  <!-- Testing watch -->
  <!-- <input v-model="email" placeholder="Enter Email" />

  <h3>Username: {{ emailPrefix }}</h3> -->

 
</template>
