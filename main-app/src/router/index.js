import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/pageA',
    name: 'pageA',
    component: () => import('../views/page-a/index.vue'),
  },
  {
    path: '/pageA/:path',
    name: 'pageA1',
    component: () => import('../views/page-a/index.vue'),
  },
  {
    path: '/pageB',
    name: 'pageB',
    component: () => import('../views/page-b/index.vue')
  },
  {
    path: '/pageB/:path',
    name: 'pageB',
    component: () => import('../views/page-b/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
