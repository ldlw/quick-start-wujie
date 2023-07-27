<template>
  <div class="b">
    sub-page-b
    <h6>sub-page-b的子路由</h6>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  components: {
  },
  mounted() {
    console.log('进入子应用sub-page-b');
  },
}
</script>
