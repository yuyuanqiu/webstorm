# webpack

## 安装

安装时最好和vue cli的版本一致
  1. 先要进行全局安装，在任何地方都能使用，并且能够在命令行直接使用包的命令（在终端使用npm包的命令，只能是全局包）
     1. 项目包命令需要自己在scripts中配置
  2. 局部安装：开发时依赖，项目打包后不需要使用：--save-dev 

## 使用

在webpack4中还需要全局安装webpack-cli才能进行下面操作（下面知识都是webpack3中）

webpack配置别名：在vue.config.js中配置

**注意**：
  1. 引入图片等资源：
     1. 在template模板中，比如src应该在最前面加 **~**
     2. 在样式中，比如url应该在最前面加 **~**
     3. **这条有待验证**：在脚本中：若引用assets中的图片，应使用require引用，引用public中的文件，比如public/img/logo.png，应该使用(./)img/logo.png
  2. 引用其他资源，可直接使用别名
 
手动打包文件：webpack app.js bundle.js
  1. 其中app.js是项目的主入口文件，bundle.js是打包之后的文件
  2. 其中可以在文件中同时使用commonJS（require）和ES6（import）模块化开发
  3. 注意混合使用不同模块化工具时，应该对应导入导出的关系，即es6的导入对应es6的导出

当在项目中要使用node相关的内容，则需要进行初始化操作：npm init   => 即生成一个package.json文件
npm install 安装项目依赖

智能打包：webpack
  1. 新建一个webpack.config.js配置
  2. 安装开发依赖npm i webpack -D

webpack可以处理与js相关的依赖和其他资源（css,img,es6,ts,sass,less,vue...）：
  1. 此时则需要给webpack扩展对应的loader（通过npm安装）I（**此时应该查看webpack官网文档进行操作，习惯性的**）
  2. 在webpack.config.js的modules下进行配置
  3. 其中在配置css-loader时：
     1. css-loader只负责将css文件进行加载，
     2. 此时还需要style-loader：注入一个style标签将css添加到dom中
     3. webpack读取loader有顺序（从右向左）：即先加载css，然后注入（先css-loader，后style-loader），若顺序写错会出错

使用webpack插件：
  1. webapck有内置的插件：比如BannerPlugin（在打包的文件中插入版权声明）
  2. 步骤：
     1. 在webpack.config.js中导入require
     2. 在plugins选项中：new Webpack.BannerPlugin('版权信息')

使用第三方插件：
  1. 使用html-webapck-plugin将模板index.html文件也打包进打包目录
  2. 安装开发依赖
  3. 配置plugins选项
  4. 删除项目中模板index.html文件中引用的入口文件js
     1. （该插件会自动根据设置的模板生成一个html文件，并将入口js自动引入到html中）

webpack占位符，最常用的是：
    [ id ] – 返回块ID。
    [ path ] – 返回文件路径。
    [ name ] – 返回文件名称。
    [ ext ] – 返回扩展名。它适用于大多数可用的字段。ExtractTextPlugin是一个明显的例外。
    [ hash ] – 返回构建Hash。如果构建任何部分发生更改，则也会发生更改。
    [ chunkhash ] – 返回条目块特定的hash。在配置中定义的每个entry都会收到自己的hash。如果entry的任何部分发生变化，那么hash也会发生改变。[chunkhash]比[hash]定义更细。
    [ contenthash ] – 返回特定于内容的hash。[contenthash]只适用于ExtractTextPlugin，是可用的、最具体的选项。

## 使用webpack搭建一个本地服务器

步骤：
  1. 安装开发依赖webpack-dev-server
  2. 在package.json中选项scripts配置该命令
  3. 在webpack.config.js中配置devServer选项，包括监听目录和端口号等

分离webpack.config.js文件：分为基础配置，开发配置，生产配置
  1. 安装开发依赖webpack-merge
  2. 根目录创建build文件夹分别存放上面三个配置
  3. 必须引入开发依赖，使用module.exports = webpackMerge(..config)
  4. 此时还要改动配置中的打包目录

**本地服务器不能热更新**：**出现以下错误**
```bash
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  libd8ad321596691d327616.js (249 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (255 KiB)
      libd8ad321596691d327616.js
      maind8ad321596691d327616.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```

**[webpack分离第三方库及公用文件](https://yi-jy.com/2018/06/09/webpack-split-chunks/)**

## webpack在vue中

**vue中el、template模板、render的区别：**
  1. 如果同时有el和template时，el元素的内容最终会被template替换，

webpack打包vue文件（包括其中的template、script、style）也要安装相应的loader：vue-loader及其他依赖，[可参照官网](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)
  1. 并且需要设置相关的plugins选项，都参见官网





