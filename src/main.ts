import { createApp } from 'vue'
import App from './App.vue';
import router from './Router/index.ts'
import { createPinia } from 'pinia'

const pinia = createPinia()

//import '../src/assets/main.css' 

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
