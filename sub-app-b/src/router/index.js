export default [
  {
    path: '/',
    name: 'subPageB',
    component: () => import('../views/sub-page-b/index.vue'),
    redirect: '/webSupplyService',
    children: [
      {
        path: '/webSupplyService',
        name: 'webSupplyService',
        component: () => import('@/views/web-supply-service')
      }
    ]
  }
]
