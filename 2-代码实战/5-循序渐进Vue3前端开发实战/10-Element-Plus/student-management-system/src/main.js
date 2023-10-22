import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const debounce = (fn, delay) => {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

const _ResizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor (callback) {
    callback = debounce(callback, 16)
    super(callback)
  }
}

const Application = createApp(App)
Application.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  Application.component(key, component)
}
Application.mount('#app')
