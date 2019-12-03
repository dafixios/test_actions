var path = require("path")
const webpack = require("webpack")
const webpackConfig = require("./webpack.development.config")

module.exports = {
  configureWebpack: webpackConfig,
}
