const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: false,
      preload: "src/preload.js",
      builderOptions: {
        publish: ['github']
      }
    }
  }
})