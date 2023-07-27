<template>
  <div class="a">
    web-supply-service
    <button @click="handleJump">去子应用a</button>
    <div>子主应用的store: {{userInfo.age}}</div>
    <button @click="setUser">
      设置userInfo.age+1
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { store } from '@/store'
export default {
  name: 'web-supply-service',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: 'userInfo'
    })
  },
  mounted() {
    console.log('web-supply-service');
  },
  methods: {
    handleJump() {
      window.$wujie?.props.jump({ path: "/pageA" });
    },
    setUser () {
      store.commit('user/setUserInfo', { 
        name: 'lw',
        age: this.userInfo.age + 1
      })
    }
  }
}
</script>
