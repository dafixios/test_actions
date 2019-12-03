var path = require("path")
const webpack = require("webpack")
const webpackConfig = require("./webpack.development.config")

module.exports = {
  configureWebpack: process.env.NODE_ENV === "production" ? {} : webpackConfig,
  publicPath: "/sites/all/modules/custom/m6_platform/vue_apps/dist"
}
