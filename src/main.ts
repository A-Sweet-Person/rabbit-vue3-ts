import { createApp } from 'vue'
// import './assets/styles'
 import '@/assets/styles/common.less'
import App from './App.vue'
import 'normalize.css'
import router from './router'
createApp(App).use(router).mount('#app')
