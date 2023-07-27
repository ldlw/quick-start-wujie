<template>
  <div class="a">
    <h6>sub-page-a</h6>
    <button @click="handleJump">去子应用b</button>
    <h6>sub-page-a的子路由</h6>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  components: {
  },
  data () {
    return {
    }
  },
  mounted() {
    console.log('进入子应用sub-page-a');
  },
  methods: {
    handleJump() {
      window.$wujie?.props.jump({ path: "/pageB" });
    }
  }
}
</script>
