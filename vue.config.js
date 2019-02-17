const { resolve } = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'src/renderer/main.ts'
    }
  },
  // configureWebpack: config => {
  //   console.log(config.resolve)
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/renderer')
      }
    }
  },
  pluginOptions: {
    // vue-cli-plugin-electron-builder Doc, check ou: https://nklayman.github.io/vue-cli-plugin-electron-builder/
    electronBuilder: {
      // To see available options, check out https://www.electron.build/configuration/configuration
      builderOptions: {
        appId: 'com.example.app'
      },
      mainProcessFile: 'src/main/background.ts'
    }
  }
}
