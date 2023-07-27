import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import { initStore } from './store'
import VueRouter from 'vue-router'
import './micro-app/global-bus'
import { scrollToTop } from '@/utils'

Vue.use(VueRouter)

Vue.config.productionTip = false

export let router = null
export let vueInstance = null
const byWuJie = window.__POWERED_BY_WUJIE__

function render () {
  router = new VueRouter({
    mode: 'hash',
    routes
  })
  router.beforeEach((to, from, next) => {
    scrollToTop()
    next()
  })
  vueInstance = new Vue({
    router,
    store: initStore(),
    render: h => h(App)
  }).$mount('#app')  
  if (byWuJie) {
    Vue.prototype.$postMessage = postMessage
  } else {
    Vue.prototype.$postMessage = () => {}
  }
}

render()