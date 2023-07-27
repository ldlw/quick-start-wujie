import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'lodash'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cloneDeep from 'lodash/cloneDeep'

Vue.use(Vuex)

export let store = null

export function initStore () {
  const WuJieChildDataSharePlugin = (store) => {
    const prevState = cloneDeep(store.state)
    // 当 store 初始化后调用,使用 vuex 插件去监听每一次的数据变化，将变化后的数据同步给父容器
    store.subscribe((mutation, state) => {
      const nextState = cloneDeep(state)
      if (!lodash.isEqual(prevState, nextState)) {
        console.log('将变化后的数据同步给父容器', mutation, nextState)
        const { type, payload } = mutation
        window.$wujie?.bus.$emit('update-main-store-data', type, payload)
      }
    })
  }
  store = new Vuex.Store({
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
      WuJieChildDataSharePlugin
    ]
  })
  return store
}
