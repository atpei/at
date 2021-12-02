import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
// px转换rem的插件
import reset from 'reset-css'
// 去除默认样式的文件
import './assets/reset.css'

const app = createApp(App)
axios.defaults.baseURL = '/json/axios/'
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(reset).mount('#app')
