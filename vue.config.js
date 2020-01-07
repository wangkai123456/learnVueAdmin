const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  devServer: {
    disableHostCheck: true
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }
}