const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('style', resolve('src/assets/style'))
  //     .set('api', resolve('src/api'))
  //     .set('assets', resolve('src/assets'))
  //     .set('common', resolve('src/common'))
  //     .set('components', resolve('src/components'))
  //     .set('views', resolve('src/views'))
  //     .set('public', resolve('public'))
  // },
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"],
      alias: {
        // vue: "vue/dist/vue.js",
        "@": path.resolve(__dirname, "./src"),
        public: path.resolve(__dirname, "./public"),
        components: path.resolve(__dirname, "./src/components"),
        common: path.resolve(__dirname, "./src/common"),
        api: path.resolve(__dirname, "./src/api"),
        views: path.resolve(__dirname, "./src/views"),
        assets: path.resolve(__dirname, "./src/assets"),
        test: path.resolve(__dirname, "./src/test")
      }
    };
  },
}
// // }

// const path = require("path");
// module.exports = {
//   // 基本路径
//   publicPath: process.env.NODE_ENV === "production" ? "" : "/",
//   // 输出文件目录
//   outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
//   // eslint-loader 是否在保存的时候检查
//   lintOnSave: true,
//   //pages相关配置

//   // pages: {
//   //   index: {
//   //     // page 的入口
//   //     entry: "src/main.js",
//   //     // 模板来源
//   //     template: "public/index.html",
//   //     // 在 dist/index.html 的输出
//   //     filename: "index.html",
//   //     // 当使用 title 选项时，
//   //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//   //     title: "Index Page",
//   //     // 在这个页面中包含的块，默认情况下会包含
//   //     // 提取出来的通用 chunk 和 vendor chunk。
//   //     chunks: ["chunk-vendors", "chunk-common", "index"]
//   //   },
//   //   // 当使用只有入口的字符串格式时，
//   //   // 模板会被推导为 `public/subpage.html`
//   //   // 并且如果找不到的话，就回退到 `public/index.html`。
//   //   // 输出文件名会被推导为 `subpage.html`。
//   //   subpage: "src/subpage/main.js"
//   // },

//   /**
//    * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
//    **/
//   chainWebpack: config => {
//     //修改img相关配置
//     config.module
//       .rule("images")
//       .test(/\.(jpg|png|gif|bmp|jpeg)$/)
//       .use("url-loader")
//       .loader("url-loader")
//       .tap(options => {
//         options = {
//           limit: 4096,
//           fallback: {
//             loader: "file-loader",
//             options: {
//               name: "img/[name]-[hash:8].[ext]"
//             }
//           },
//           name: "[name]-[hash:8].[ext]"
//         };
//         return options;
//       })
//       .end()
//       .rule("fonts")
//       .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
//       .use("url-loader")
//       .loader("url-loader\\dist\\cjs.js")
//       .tap(options => {
//         options = {
//           limit: 4096,
//           fallback: {
//             loader: "file-loader",
//             options: {
//               name: "fonts/[name].[hash:8].[ext]"
//             }
//           }
//         };
//         return options;
//       })
//       .end();
//     const svgRule = config.module.rule("svg");
//     svgRule.uses.clear();
//     svgRule
//       .use("svg-sprite-loader")
//       .loader("svg-sprite-loader")
//       .options({
//         symbolId: "icon-[name]",
//         include: ["./src/icons"]
//       });
//   },
//   configureWebpack: config => {
//     config.resolve = {
//       // 配置解析别名
//       extensions: [".js", ".json", ".vue"],
//       alias: {
//         vue: "vue/dist/vue.js",
//         "@": path.resolve(__dirname, "./src"),
//         public: path.resolve(__dirname, "./public"),
//         components: path.resolve(__dirname, "./src/components"),
//         common: path.resolve(__dirname, "./src/common"),
//         api: path.resolve(__dirname, "./src/api"),
//         views: path.resolve(__dirname, "./src/views"),
//         data: path.resolve(__dirname, "./src/data"),
//         mock: path.resolve(__dirname, "./src/mock"),
//         router: path.resolve(__dirname, "./src/router"),
//         utils: path.resolve(__dirname, "./src/utils"),
//         assets: path.resolve(__dirname, "./src/assets"),
//         styles: path.resolve(__dirname, "./src/styles"),
//         icons: path.resolve(__dirname, "./src/icons")
//       }
//     };
//   },
//   // 生产环境是否生成 sourceMap 文件
//   productionSourceMap: false,
//   // css相关配置
//   css: {
//     // 是否使用css分离插件 ExtractTextPlugin
//     extract: false,
//     // 开启 CSS source maps?
//     sourceMap: false,
//     // css预设器配置项
//     loaderOptions: {
//       scss: { prependData: `@import "./src/styles/main.scss";` },
//       sass: { prependData: `@import "./src/styles/main.sass"` }
//     }
//     // 启用 CSS modules for all css / pre-processor files.
//     // modules: false
//   },
//   // use thread-loader for babel & TS in production build
//   // enabled by default if the machine has more than 1 cores
//   parallel: require("os").cpus().length > 1,
//   /**
//    *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//    */
//   pwa: {},
//   // webpack-dev-server 相关配置
//   devServer: {
//     open: true, // 编译完成是否打开网页
//     host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
//     port: 8080, // 访问端口
//     https: false, // 编译失败时刷新页面
//     hot: false, // 开启热加载
//     hotOnly: false,
//     proxy: null, // 设置代理
//     overlay: {
//       // 全屏模式下是否显示脚本错误
//       warnings: true,
//       errors: true
//     }
//     // before: app => { }
//   },
//   /**
//    * 第三方插件配置
//    */
//   pluginOptions: {}
// };
