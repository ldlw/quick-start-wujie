const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'sub-app-a',
  devServer: {
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: 'http://192.168.20.132:7002'
  }
})
