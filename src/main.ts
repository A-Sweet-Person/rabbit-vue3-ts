import { createApp } from 'vue'
// import './assets/styles'
// 引入项目中一些通用样式
 import '@/assets/styles/common.less'
import App from './App.vue'
// 引入通用样式，浏览器表现是一致的
import 'normalize.css'
// 引入路由
import router from './router'
// 引入pinia

import {createPinia} from 'pinia'
import XtxUI from './components'
createApp(App).use(router).use(XtxUI).use(createPinia()).mount('#app')
