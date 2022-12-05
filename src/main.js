import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/index.scss'
// 图片懒加载指令(使用插件) .use(imgPlugin)  './directive/lazy.js'
// 手写图片懒加载
import lazy from './directive/lazy-hand.js'
// 引入加载自定义指令
import loading from './directive/loading.js'

createApp(App)
  .use(store)
  .use(router)
  .directive('lazy', lazy)
  .directive('loading', loading)
  .mount('#app')
