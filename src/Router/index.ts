// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Components/Login/Login.vue';
import Home from '../Components/Home/Home.vue';
import Dashboard from '../Components/Dashboard/Dashboard.vue';
import { useUserStore } from '../Store/UserStore.ts';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    }
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login');
  } else if (to.path === '/login' && userStore.isLoggedIn) {
    next('/home');
  } else {
    next();
  }
});

export default router;