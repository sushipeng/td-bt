const path = require('path');
const resolve = dir => path.join(__dirname, dir)


module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => {
          args[0].title= '天地互联-区块链'
          return args
        })
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('layout',resolve('src/layout'))
        .set('base',resolve('src/base'))
        .set('static',resolve('src/static'))
    }
  }