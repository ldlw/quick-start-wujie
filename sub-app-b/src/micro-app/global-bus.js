import { store } from '@/store'

// 更新子应用store数据
window.$wujie?.bus.$on("update-child-store-data", (type, payload) => {
  store.commit(type, payload)
})