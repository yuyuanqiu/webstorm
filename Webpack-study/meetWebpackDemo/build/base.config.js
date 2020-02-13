const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const uglifyWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  // 输出必须要绝对路径：使用path模块
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash:32].js',
    // 若要将html入口文件也打包，则需要注释掉publicPath
    // publicPath: 'dist/'
    publicPath: './'
  },
  module: {
    rules: [{

        // 两种加载方式，字符串数组和对象数组

        // 将 css-loader、style-loader 和 less-loader 链式调用，可以把所有样式立即应用于 DOM。
        test: /\.less$/,
        // loader的顺序从右向左，此时顺序写反会出错
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
      // 在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
      {
        test: /\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader"]
      },

      // 在这里使用url-loader解析图片会生成base64，
      // 无论是否超过大小限制
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            // 下面表示打包的路径是在设置的打包目录下的img文件夹
            // 而中括号表示webpack的语法，
            // [name]：表示原先文件的名字，[ext]表示原先文件的扩展名
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      /* {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
              // useRelativePath: true,
            }
          }
        ]
      }, */
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 此处的preset-env取babelrc文件的配置，若要es6转ese5，则直接安装preset-es2015，然后在presets中设置es2015即可
            presets: ['babel-preset-es2015'],
            plugins: [ /* require('babel-plugin-transform-object-rest-spread') */ /* require('babel-plugin-transform-runtime') */ ],
          },
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
    ]
  },

  resolve: {
    alias: {
      // 如果不指定这个，则不会进行模编译即vue的内容不会正常显示
      "vue$": "vue/dist/vue.esm.js",
    },

    // 自动解析扩展
    extensions: [".js", ".vue"],
  },
  // 配置vue的
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner() {
        let name = 'copyright by ioiy aig';
        let date = "created in " + new Date();
        return `${name}\n${date}
        `;

      }
    }),
    new htmlWebpackPlugin({
      template: "index.html",
      // inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },

    }),
  ],
  // 分离第三方库和工具函数等代码
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 300 /* 30000 */ ,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'lib'
        },
        default: {
          minSize: 0,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'utils'
        }
      }
    }
  }
}