import storeInstance from '@/store'
import WujieVue from "wujie-vue2"
const { bus } = WujieVue

// 更新主应用store数据
bus.$on("update-main-store-data", (type, payload) => {
  storeInstance.commit(type, payload) 
})