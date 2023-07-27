import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WujieVue from "wujie-vue2";
import './micro-app/global-bus'
import { hostMap, attrs, props, credentialsFetch, degrade, lifecycles } from "@/public/constant.js"

const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

Vue.config.productionTip = false
Vue.use(WujieVue);

setupApp({
  name: "sub-app-a",
  url: hostMap("//localhost:9001/"),
  attrs,
  // alive: true,
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
  ...lifecycles,
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
