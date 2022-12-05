import { createRouter, createWebHashHistory } from 'vue-router'
// webpack在打包的时候会把整个路由打包成一个js文件，
// 如果页面一多，会导致这个文件非常大，加载缓慢
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/recommend.vue')
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('../views/singer.vue')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('../views/rank.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
