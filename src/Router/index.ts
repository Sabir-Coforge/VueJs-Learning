import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Components/Login/Login.vue';
import Home from '../Components/Home/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
     {
    path: '/',
    redirect: '/login', // Default Route
  },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});

export default router;