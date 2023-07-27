<template>
  <div id="app">
    <nav>
      <router-link to="/pageA/">子应用A</router-link>|
      <router-link to="/pageB/">子应用B</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      active: false,
      react16Flag: this.$route.name === "react16-sub",
      react17Flag: this.$route.name === "react17-sub",
      vue2Flag: this.$route.name === "vue2-sub",
      vue3Flag: this.$route.name === "vue3-sub",
      viteFlag: this.$route.name === "vite-sub",
      degrade: window.Proxy,
    };
  },
  mounted() {
    window.addEventListener("message", this.handleMessage);
  },
  beforeDestroy() {
    window.removeEventListener("message", this.handleMessage);
  },
  methods: {
    handleMessage(event) {
      if (event.origin === location.origin && event.source !== window) {
        console.log("父应用接收到消息：", event.data);
        alert("父应用接收到消息：" + event.data);
        // 将消息发送给子应用
        event.source.postMessage("Hello 子应用，我是父应用!", event.origin);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
