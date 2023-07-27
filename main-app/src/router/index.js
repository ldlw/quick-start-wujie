import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/pageA',
    name: 'pageA',
    alias: ['/pageA/:path'],
    component: () => import('../views/page-a/index.vue'),
  },
  {
    path: '/pageB',
    alias: ['/pageB/:path'],
    name: 'pageB',
    component: () => import('../views/page-b/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
