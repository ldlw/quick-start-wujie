<template>
  <div class="a">
    <h5>进入子应用B路由了，下面是嵌入的子应用</h5>
    <div>主应用的store: {{userInfo.name}} {{userInfo.age}}</div>
    <div>主应用设置store: 
      <button @click="setUser">
        设置userInfo
      </button>
    </div>
    <WujieVue width="100%" height="100%" name="sub-app-b" :url="url" :props="{jump}"></WujieVue>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import storeInstance from '@/store'
export default {
  name: 'pageB',
  components: {
  },
  data () {
    return {
      base: '//localhost:9002'
    }
  },
  computed: {
    url () {
      const path = this.$route.params.path || 'webSupplyService'
      return `${this.base}#/${path}`
    },
    ...mapState('user', {
      userInfo: 'userInfo'
    })
  },
  methods: {
    jump(location) {
      this.$router.push(location);
    },
    setUser () {
      storeInstance.commit('user/setUserInfo', { 
        name: 'lw',
        age: this.userInfo.age + 1
      })
    }
  }
}
</script>
