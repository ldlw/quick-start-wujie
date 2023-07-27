// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

export default [
  {
    path: '/',
    name: 'subPageA',
    component: () => import('../views/sub-page-a/index.vue'),
    redirect: '/webLoanService',
    children: [
      {
        path: '/webLoanService',
        name: 'webLoanService',
        component: () => import('@/views/web-loan-service')
      }
    ]
  }
]

// const router = new VueRouter({
//   routes
// })

// export default router
