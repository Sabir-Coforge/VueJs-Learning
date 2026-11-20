<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>

      <div class="form-group">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          required
        />
      </div>

      <button type="submit">Login</button>

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/Store/UserStore';
const router = useRouter();
const userStore = useUserStore();




const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

const handleLogin = () => {
  error.value = '';
  success.value = '';

  if (!email.value || !password.value) {
    error.value = 'Please fill all fields';
    return;
  }

  // Dummy validation
  if (
    email.value === 'sabir@gmail.com' &&
    password.value === 'password123'
  ) {
    success.value = 'Login successful!';
    userStore.login(email.value, true);
    router.push('/home');
  } else {
    error.value = 'Invalid email or password';
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.login-form {
  width: 350px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #369870;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>