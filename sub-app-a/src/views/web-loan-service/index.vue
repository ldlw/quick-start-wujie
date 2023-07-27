<template>
  <div class="a">
    web-loan-service
    <div>
      {{count}}
      <button @click="count++">
        count+1
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'web-loan-service',
  components: {
  },
  data () {
    return {
      count: 1
    }
  },
  mounted() {
    console.log('进入子应用web-loan-service');
  },
  methods: {
  }
}
</script>
