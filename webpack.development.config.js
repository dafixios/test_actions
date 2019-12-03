/* eslint-disable no-undef */
const path = require("path")
var fs = require("fs")
const { VueLoaderPlugin } = require("vue-loader")

const host = "build.ignisoftware.net"
const port = 80

module.exports = {
  mode: "development",
  entry: {},
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    contentBase: path.join(__dirname, "public"),
    host,
    port,
    disableHostCheck: true,
    hot: true,
    writeToDisk: true,
    https: {
      key: fs.readFileSync("/home/hector/Projects/m6connect/devel/privkey.pem"),
      cert: fs.readFileSync("/home/hector/Projects/m6connect/devel/cert.pem")
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {}
}
