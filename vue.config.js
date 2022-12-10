
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    pwa: {
      workboxOptions: {
          exclude: [/\.map$/, /web\.config$/],
      },
  },
  transpileDependencies: true
})
