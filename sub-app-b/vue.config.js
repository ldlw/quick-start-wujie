const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'sub-app-b',
  devServer: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: 'http://192.168.20.132:7002'
  }
})
