const uglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const webpackMerge = require("webpack-merge")
const baseConfig = require("./base.config")

module.exports = webpackMerge(baseConfig, {
  // 配置vue的
  plugins: [
    new uglifyWebpackPlugin({
      include: /\*/,
      parallel: 10
    })
  ],

})