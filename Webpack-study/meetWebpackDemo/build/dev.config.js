const path = require('path')
const webpackMerge = require("webpack-merge")
const baseConfig = require("./base.config")
const webpack = require("webpack")

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    inline: true,
    // port: 57924,
    hot: true,
  }
})