var path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

module.exports = {
  configureWebpack: webpackConfig,
  publicPath: '/sites/all/modules/custom/m6_platform/vue_apps/dist'
}
