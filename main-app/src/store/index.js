import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import lodash from 'lodash'
import cloneDeep from 'lodash/cloneDeep'
import WujieVue from "wujie-vue2"
const { bus } = WujieVue


Vue.use(Vuex)

function executeOnce(fn) {
  let executed = false
  return () => {
    if (!executed) {
      executed = true
      fn.apply(this, arguments)
    }
  }
}


const WuJieMainDataSharePlugin = (store) => {
  let prevState = {}
  // 当 store 初始化后调用,使用 vuex 插件去监听每一次的数据变化，将变化后的数据同步给子容器
  store.subscribe((mutation, state) => {
    executeOnce(() => {
      const nextState = cloneDeep(state)
      if (!lodash.isEqual(prevState, nextState)) {
        const { type, payload } = mutation
        // 更新上一次状态的值
        prevState = nextState;
        console.log('将变化后的数据同步给子容器', JSON.stringify(prevState), JSON.stringify(nextState), lodash.isEqual(prevState, nextState))
        bus.$emit("update-child-store-data",  type, payload)
      }
    })()
  })
}

const storeInstance = new Vuex.Store({
  // 注册模块
  modules: {
    user
  },
  plugins: [
    createPersistedstate({
      key: 'main-app-store',
      // 需要缓存的模块
      paths: ['user'],
      storage: window.sessionStorage
    }),
    WuJieMainDataSharePlugin
  ]
})

export default storeInstance
