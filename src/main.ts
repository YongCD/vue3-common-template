import '@/assets/less/index.less'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
// 引入pinia
import {createPinia} from 'pinia'
// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入网络请求API文件
import api from '@/api/api'

// 以下是全局组件
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$api = api
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('Header', Header)
app.component('Aside', Aside)
app.use(router).use(pinia).use(ElementPlus).mount('#app')