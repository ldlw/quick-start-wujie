<template>
  <div class="a">
    <h5>进入子应用A路由了，下面是嵌入的子应用</h5>
    <WujieVue width="100%" height="100%" name="sub-app-a" :url="url" :props="{jump}"></WujieVue>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  components: {
  },
  data () {
    return {
      base: '//localhost:9001'
    }
  },
  computed: {
    url () {
      const path = this.$route.params.path || 'webLoanService'
      return `${this.base}#/${path}`
    }
  },
  methods: {
    jump(location) {
      this.$router.push(location);
    }
  }
}
</script>
