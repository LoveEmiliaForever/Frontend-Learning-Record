import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

const Application = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  Application.component(key, component)
}
Application.use(ElementPlus).use(VueAxios, axios).use(store).use(router).mount('#app')
