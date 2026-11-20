import { createApp } from 'vue'
import App from './App.vue';
import router from './Router/index.ts'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const createStore = createPinia();
const pinia = createStore.use(piniaPluginPersistedstate)


//import '../src/assets/main.css' 

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
