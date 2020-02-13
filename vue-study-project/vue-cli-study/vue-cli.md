# Vue CLI

## 介绍

1. Vue cli是一个基于Vue.js进行快速开发的完整系统，提供了：
   1. 通过`@vue/cli`搭建交互式项目脚手架
   2. 通过`@vue/cli`和`@vue/cli-service-global`快速开始零配置原型开发
   3. 一个运行时依赖`@vue/cli-service`，该依赖：
      1. 可升级
      2. 基于webpack构建，且带有合理默认配置
      3. 可通过项目内配置文件进行配置
      4. 可通过插件进行扩展
   4. 一个丰富的官方插件集合，集成了前端生态中最好的工具
   5. 一套完全图形化的创建和管理Vue.js项目的用户界面
2. Vue CLI的包：
   1. CLI（`@vue/cli`）：
      1. 一个全局安装的npm包（**安装需要使用默认源，不能使用淘宝源，会产生错误**）
         1. 注：安装错误，记得换源
         2. 设置淘宝源：`npm config set registry https://registry.npm.taobao.org`和`npm config set disturl https://npm.taobao.org/dist`
         3. 取消淘宝源：`npm config delete registry/disturl`
         4. 使用cnpm并设置淘宝源：`npm install -g cnpm --registry https://registry.npm.taobao.org`
            1. cnpm install [name]
         5. **注意**：
            1. 安装npm包时，若出现错误，解决方法
               1. 取消淘宝源，使用默认源
               2. 或者清除npm缓存`C:\Users\jousi\AppData\Roaming\npm-cache`
      2. 提供`vue`命令
      3. 可通过`vue create`快速创建新项目脚手架
      4. 通过`vue serve`构建新想法原型
      5. 通过`vue ui`（图形化界面）管理项目
   2. CLI服务（@vue/cli-service）：
      1. 是一个开发环境依赖
      2. 局部安装在每个`@vue/cli`创建的项目中
      3. 是构建在webpack和webpack-dev-server之上的，包含了：
         1. 加载其他cli插件的核心服务
         2. 一个针对绝大部分应用优化过的内部webpack配置
         3. 项目内部的`vue-cli-service`命令，提供`serve`,`build`和`inspect`命令
   3. CLI插件：
      1. 是给vue项目提供可选功能的npm包，比如Babel/typescript转译、eslint集成、单元测试和end-to-end测试
      2. cli插件名字以`@vue/cli-plugin-`（内建插件）或`vue-cli-plugin-`（社区插件）开头
      3. 在项目内部运行`vue-cli-service`命令时会自动解析并加载package.json中列出的所有cli插件

## 快速原型开发

1. 使用`vue serve`和`vue build`命令对单个`.vue`文件进行快速原型开发，此时需要安装一个全局扩展`@vue/cli-service-global`（**安装需要使用默认源，不能使用淘宝源，会产生错误**）
   1. vue serve缺点是需要安装全局依赖，这在不同机器中不能保证一致性，故而只适用于快速原型开发

### `vue serve`


1. 用法：`vue serve [options] [entry]`，其中 options：
      1. -o,--open：打开服务器
      2. -c,--copy：将本地url复制到剪切板
      3. -h,--help：帮助
2. 功能：在开发环境模式下零配置为js或vue文件启动一个服务器
3. 使用：在某文件所在目录下运行该命令
4. 其他：
   1. `vue serve`使用了和`vue create`创建的项目相同默认配置（webpack、Babel、postcss、eslint），它会在当前目录自动推导入口文件（例如main.js、index.js、App.vue、app.vue中的一个），或显式指定入口文件`vue serve entry.vue`

### `vue build`

1. 用法：`vue build [options] [entry]`，其中options：
   1. -t,--target <target>：构建目标，默认为app
   2. -n,--name <name>：库/组件的名字，默认为入口文件
   3. -d,--dest <dir>：输出目录，默认为dist
   4. -h
2. 功能：在生产环境模式下零配置构建一个js或vue文件
3. 使用：在某文件所在目录下运行该命令，将目标文件构建成一个生产环境的包用来部署：`vue build MyComponent.vue`

## 创建一个项目

1. 准备工作：
   1. npm install -g webpack
   2. npm install -g @vue/cli
2. 创建一个新项目：`vue create app-name`，之后的提示：
   1. 选取一个preset（预设）：default和手动
      1. 当选择手动时，可在操作最后将已有选项保存为可复用的preset，该文件将在home目录下.vuerc中，可编辑
         1. 之后创建项目时就可以选择保存的preset
         2. 删除保存的preset，可在.vuerc文件presets删除相关preset即可
         3. 类似vuerc中的rc意义：run commands/configure
   

### `vue create`

- 用法：`vue create [options] <app-name>`
  - -h：详细查看命令
- 功能：创建一个由`vue-cli-service`提供支持的新项目

### `vue ui`

1. 功能：以图形化界面创建和管理项目

### 拉取2.x项目

- 若先使用了vue cli 3,所以同时使用cli 2项目可使用：
  - npm install -g @vue-cli-init
  - vue init webpack vue-app

## 插件和preset

1. 每个cli插件包含一个用来创建文件的生成器和一个用来调整webpack核心配置和注入命令的运行时插件
2. 在一个已经被创建好的项目中安装一个插件，可使用`vue add plugin-name`命令
   1. `vue add`的设计意图是安装和调用cli插件，不意味着替换掉普通的npm包
   2. 在运行vue add之前将项目最新状态提交，该命令可能调用插件文件生成器并更改现有文件
   3. `vue add eslint`或 `vue add cli-plugin-eslint`将`@vue/eslint`解析为完整包名`@vue/cli-plugin-eslint`，然后从npm安装它，调用它的生成器
   4. 添加时不带@vue前缀，该命令会替换解析一个unscoped的包，比如`vue add apollo`将会安装插件vue-cli-plugin-apollo
   5. 也可指定scope，`vue add @foo/bar`将会安装@foo/vue-cli-plugin-bar`
   6. 可为插件提供生成器选项（跳过命令提示）：`vue add eslint --config airbnb --lintOn save`
   7. 若插件已安装，可使用`vue invoke`命令跳过安装过程，只调用它的生成器，该命令接受和vue add相同参数
   8. 若某些插件列在了该项目外其他package.json文件，可在项目的package.json设置vuePlugins.resolveFrom选项指向包含其他package.json的文件夹
3. 项目本地的插件：
   1. 若在项目中直接访问插件API而不需要创建完整插件，可在package.json文件使用vuePlugins.service选项
   2. 通过vuePlugins.ui选项添加类似ui插件文件
4. Preset：包含创建新项目所需预定义选项和插件的JSON对象，让用户无需在提示中选择它们
   1. preset（`.vuerc`的数据会被插件生成器用来生成相应的项目文件，这些配置会根据文件中useConfigFiles的值是否合并到package.json或相应配置中
   2. 可显式指定用到的插件版本，忽略会自动使用最新的（推荐为preset列出所有第三方插件提供显式版本范围）
5. 允许插件的命令提示：在插件选项中指定`"prompts": true`允许注入命令提示（创建项目时不会跳过某些插件提示）
6. 远程preset：可通过发布git repo分享，应包含：
   1. preset.json：包含preset数据
   2. generator.js：可注入/修改项目中文件的generator
   3. prompts.js：可通过命令行为generator收集选项的prompts文件
   4. 此时使用远程preset：`vue create --preset username/repo-name vue-app`
7. 加载本地repo的preset：
   1. vue create --preset [path]
   2. vue create --preset preset.json

## CLI服务

1. vue cli项目中，@vue/cli-service安装了一个vue-cli-service的命令，可在packag.json中scripts中以vue-cli-service访问该命令
   1. 通过npm/yarn调用这些scripts：
      1. npm run serve或者yarn serve
   2. 通过npx（最新版npm中的）调用：
      1. npx vue-cli-service serve
         1. 用法：`vue-cli-service serve [options] [entry]`
         2. 选项：
            1. --open：在服务器启动时打开浏览器
            2. --copy：在服务器启动复制url
            3. --mode：指定环境模式
            4. --host，--port
            5. --https：false/true
         3. 其他：
            1. 该命令会启动一个基于webpck-dev-server的开发服务器并附带模块热加载
            2. 可使用vue.config.js中的devServer字段配置开发服务器（上述选项）
      2. npx vue-cli-service build [options] [entry|pattern]
         1. 会在dist/目录产生一个可用于生产环境的包，带有JS/CSS/HTML压缩
         2. 有用的命令参数：
            1. --modern：使用现代模式构建应用，es6
            2. --target：将组件以库/组件的方式进行构建
            3. --report[-json]：根据构建统计生成报告
      3. npx vue-cli-service inspect [options] [...paths]
         1. 选项：--mode：指定环境模式默认为development
         2. 可使用它审查一个cli项目的webpack config
      4. 查看vue-cli-service中所有注入命令：
         1. npx vue-cli-service help [command]
   3. 通过vue ui图形界面运行
2. 缓存和并行处理：
   1. cache-loader会默认为Vue/Babel/TypeScript编译开启，文件缓存在node_modules/.cache中（**出现问题可先删除缓存目录**）
   2. thread-loader会在多核cpu的机器中为Babel/TypeScript转译开启
3. Git Hook：
   1. 在安装之后，@vue/cli-service会安装yorkie，它会让你在package.json的gitHooks字段方便指定Git Hook
4. 配置时无需Eject：
   1. 通过vue create创建的项目无需额外的配置就可运行，通过cli创建的项目无需eject就能够配置工具的每个角落

## 浏览器兼容性

### browserslist

1. package.json文件中的browserslist字段（或单独的.browserslistrc文件）指定项目的目标浏览器范围，这个值会被@babel/preset-env和Autoprefixer用来确定需要转译的JS特性和需要添加的CSS浏览器前缀

### Polyfill

1. 一个默认的cli项目会使用@vue/babel-preset-app，它通过@babel/preset-env和browserslist配置来决定项目需要的polyfill
   1. 默认情况会将useBuiltIns: 'usage'传递给@babel/preset-env，它会根据源代码中出现的语言特性自动检测需要的polyfill，确保了包里polyfill数量最小化，意味着若其中一个依赖需要特殊的polyfill，默认情况下Babel无法将其检测出来
   2. 如果需要依赖polyfill，则：
      1. 若该依赖基于目标环境不支持的es版本编写的：将其添加到vue.config.js中的transpileDependencies选项，这会为该依赖同时开启语法转换和根据使用情况检测polyfill
      2. 若该依赖交付了es5代码并显式列出需要的polyfill：可使用@vue/babel-preset-app的polyfills选项预包含所需要的polyfill，注意es6.promise将被默认包含，因为现在的库依赖promise非常普遍（**推荐该方式添加polyfill**）
      3. 若该依赖交付es5代码且使用了es6特性但未显式列出需要的polyfill：应使用useBuiltIns: 'entry'然后在入口文件添加import 'core-js/stable';import 'regenerator-runtime/runtime';，这会根据browserslist目标导入所有polyfill，此时就不用担心依赖的polyfill问题
2. 当使用cli构建一个库/web component时，推荐给@vue/babel-preset-app传入useBuiltIns: false选项，这能确保库/组件不包含不必要的polyfills

### 现代模式

1. cli的现代模式：`vue-cli-sevice build --modern`会产生两个版本：
   1. 现代版的包（面向支持es module的浏览器）
      1. 会通过`<script type="module">`在被支持的浏览器中加载，还会使用<link rel="modulepreload">预加载
      2. type=module需要配合始终开启的cors进行加载，意味着服务器必须返回Access-Control-Allow-Origin: *的有效cors头，想要通过认证获取脚本，可将crossorigin选项设置为use-credentials
   2. 旧版包：
      1. 通过`<script nomodule>`加载，且会被现代浏览器忽略

## HTML和静态资源

### HTML

1. public/index.html文件是会被html-webpack-plugin处理的模板，构建时资源链接会被自动注入
   1. cli项目也会自动注入resource hint以及构建过程中处理的JS和css文件资源链接
2. 插值：可使用lodash template语法插入内容
   1. <%= VALUE %>用来做不转义插值
   2. <%- VALUE %>用来做HTML转义插值
   3. <% expression %>用来描述JS流程控制
   4. 注意：除了被html-webpack-plugin暴露的默认值之外，所有环境变量可直接使用，例如BASE_URL：`<link rel="icon" href="<%= BASE_URL %>favicon.ico">`
   5. Preload：`<link rel="preload">`
      1. 用来指定页面加载后很快被用到的资源
      2. 默认cli项目会为所有初始化渲染需要的文件自动生成preload提示，该提示会被@vue/preload-webpack-plugin注入，可通过chainWebpack的config.plugin('preload')进行修改删除
   6. Prefetch：<link rel="prefetch">
      1. 用来告诉浏览器在页面加载完后利用空闲时间提前获取用户可能会访问的内容
      2. 默认cli项目会为所有async chunk生成的JS文件（通过动态import()按需code splitting的产物）自动生成prefetch提示，该提示会被@vue/preload-webpack-plugin注入，可通过chainWebpack的config.plugin('prefetch')修改删除（在vue.config.js文件中）
   7. 当基于已有后端使用cli，不需要生成index.html时可向vue.config.js加入一些代码（不推荐）
   8. 构建多页应用：cli支持使用vue.config.js中的pages选项构建一个多页面应用，该应用将会在不同入口之间高效共享通用的chunk以获取最佳加载性能

### 处理静态资源

静态资源处理方式：
   1. 在JS被导入或在template/CSS中通过相对路径被引用，该类引用会被webpack处理
   2. 放置在public目录下或通过绝对路径被引用，该类资源被直接拷贝，不经过webpack处理

从相对路径导入：
   1. 当在JS/css/vue文件中使用相对路径（必须以.开头）引用静态资源，该资源被包含进webpack的依赖图中，编译时所有资源引用的url将会被解析为一个模块依赖
      1. 例如`url(./image.png)`会被翻译为`require('./image.png')`等
   2. 可同chainWebpack选项调整内联文件的大小限制

url转换规则：
   1. url是一个绝对路径，将被保留不变
   2. 若以.开头将作为一个相对模块请求被解释，且基于目录结构进行解析
   3. 若以~开头，其后任何内容被作为一个模块请求被解析，意味着可引用node模块中的资源
   4. 若以@开头，会作为模块请求被解析，用处在于cli默认会设置一个指向`<projectRoot>/src`的别名（仅作用于模板）

public文件夹：
   1. 放在该文件夹的静态资源会被简单复制（原封不动复制到dist文件夹中），而不经过webpack，需使用绝对路径引用
   2. 推荐将资源作为模块依赖图的一部分导入，此时会通过webpack处理，好处是：
      1. 脚本/样式表被压缩和打包在一起，避免额外网络请求
      2. 文件丢失在编译时保持，而非在用户端产生错误
      3. 最终文件名包含了内容哈希，不必担心浏览器缓存老版本
   3. 该文件夹提供了应急手段，若应用没有部署在服务器根部，需要为url配置publicPath前缀
      1. 在public/index.html或其他通过html-webpack-plugin用作模板的html文件中，需要通过`<%= BASE_URL %>`设置链接前缀
      2. 在模板中，需要向组件传入基础URL，然后再引用
   4. 使用public文件夹场景：
      1. 需要在构建输出中指定文件名字时
      2. 有大量图片需要动态应用它们路径时
      3. 库与webpack不兼容时

## css相关

1. cli项目支持postcss、css module、sass、less、stylus
2. 引用静态资源：
   1. 所有编译后的css会通过css-loader解析其中的url()引用，并将其作为模块请求处理，意味着可根据本地文件结构用相对路径引用静态资源
   2. 若引用一个npm依赖中的文件，或用webpack alias，需要在路径前加上~的前缀避免歧义

### 预处理器

1. 可在创建项目时选择预处理器，可手动安装相应的webpack loader
   1. npm install -D sass-loader node-sass
   2. npm install -D less-loader less
   3. npm install -D stylus-loader stylus
   4. 使用：导入相应文件类型/在vue文件中`<style lang="scss">`
2. 自动化导入：
   1. 自动化导入文件（用于颜色、变量、mixin等），可使用style-resources-loader或vue-cli-plugin-style-resources-loader

### PostCSS

1. cli内部使用了postcss，可通过`.postcssrc`或任何postcss-load-config支持的配置源配置postcss，可通过vue.config.js中的css.loaderOptions.postcss配置postcss-loader
   1. 默认开启了autoprefixer，若要配置目标浏览器，使用package.json中的browserslist字段

### CSS Modules

1. 通过`<style module>`以开箱即用方式在vue文件使用css modules
2. 若在JS中作为CSS Modules导入CSS/其他预处理文件，该文件应以.module.(css|less...)结尾
   1. 若想去掉.module，可设置vue.config.js中css.requireModuleExtension值为false
   2. 若想自定义css模块类名，可通过vue.config.js中的css.loaderOptions.css选项实现，所有的css-loader选项在这里都支持

### 向预处理器loader传递选项

- 向webpack中的预处理器loader传递选项使用vue.config.js的css.loaderOptions选项（推荐）
  - loaderOptions可配置css/postcss/sass/less/stylus-loader

## webpack相关

### 简单配置方式

1. 调整webpack配置最简单方式在vue.config.js中的configureWebpack选项提供一个对象，该对象会被webpack-merge合并入最终webpack配置中
   1. 有些webpack选项基于vue.config.js的值设置的，故不能直接修改，这样做是vue.config.js的值会被用作配置里的多个地方确保能正常工作
2. 若想基于环境有条件配置/直接修改配置，应该换成一个函数（该函数会在环境变量被设置之后懒执行），该方法的第一个参数会收到已经解析好的配置，在函数内可直接修改配置或返回一个合并的对象

### 链式操作

1. 在vue.config.js中修改chainWebpack：
   1. 修改loader选项：对css相关loader推荐使用css.loaderOptions
   2. 添加新的loader
   3. 替换loader：需要先清除，然后再替换
   4. 修改选项插件：（可通过vue inspect确认变更）

### 审查项目的webpack配置

1. vue-cli-service暴露了inspect命令用于审查解析好的webpack配置，全局的vue同样提供了inspect命令
   1. 该命令会将解析的webpack配置、包括链式访问规则和插件提示打印到stdout
   2. 可输出到文件进行查阅：`vue inspect > output.js`
   3. 可通过指定路径审查配置的一小部分
      1. 只审查第一条规则：vue inspect module.rules.0
      2. 指向一个规则/插件名：vue inspect --rule vue
      3. 列出所有规则/插件名：vue inspect --rules/plugins

## 环境变量和模式

1. 可替换项目根目录中的下列文件指定环境变量：
   1. .env在所有环境被载入
   2. .env.local在所有环境被载入，被git忽略
   3. .env.[mode]在指定模式被载入
   4. .env.[mode].local在指定模式被载入，被git忽略
   5. 优先级：
      1. 特定模式环境比一般环境文件有更高优先级
      2. cli启动时已存在的环境拥有最高优先级，不会被.env文件覆盖
2. 一个环境文件只包含环境变量的键值对：例如FOO=bar，被载入的变量将对vue-cli-service的所有命令、插件、依赖可用
3. 若在环境中有默认的NODE_ENV，应该移除它或运行vue-cli-service命令时明确设置NODE_ENV

### 模式

1. 默认情况下，cli项目有三个模式：
   1. development模式用于vue-cli-service serve
   2. production模式用于vue-cli-service build和vue-cli-service test:e2e
   3. test模式用于vue-cli-service test:unit
2. 模式和NODE_ENV不同，一个模式可包含多个环境变量，每个模式都将NODE_ENV的值设置为模式的名称
3. 可通过为.env文件增加后缀设置某个模式下特有的环境变量，比如.env.development文件只会在development模式下被载入
4. 可通过--mode选项参数为命令行覆写默认模式

### 在客户端代码中使用环境变量

1. 只有以VUE_APP_开头的变量会被webpack.DefinePlugin静态嵌入到客户端的包中，访问`process.env.VUE_APP_SECERET`
2. 除了VUE_APP_*变量之外，应用代码中始终可用的还有两个特殊变量：  
   1. NODE_ENV：会是'development'、'production'、'test'的一个
   2. BASE_URL：会和vue.config.js中的publicPath选项相符

## 构建目标

- 运行vue-cli-service build可通过--target选项指定不同的构建目标




## vue-router

修改url不刷新页面的方式：
   1. 通过hash：location.hash = 'xxx'
   2. 通过HTML5的history：history.pushState({}, 'title', 'url')，（操作相当于栈结构，出栈/入栈，所以可返回历史记录
      1. history.back()返回后面一个url，history.forward()返回前面一个url（相当于浏览器的前进后退功能）
      2. history.go(num)，返回压入栈的页面，可为正/负数，go(-1)相当于一次back()，go(1) === froward()
   3. 通过history：history.replaceState({}, 'title', 'url')，不能返回之前页面状态
   4. 注意：
      1. 当在hash模式时使用history方法，则url变更时会出现一个#号

安装vue-router
   1. npm install vue-router --save

执行npm run build进行打包时产生的文件：
   1. app.xxx.js：应用程序的代码
   2. vendors.xxx：引用的第三方库的代码

路由懒加载：需要时才加载代码（分割成一个个小文件，而不是放在一个大文件中）
   在路由选项中使用：component: () => import('../xxx')


## Vuex

安装：npm install vuex --save

Vue.Store中mutation中的响应规则：
   只有提前在store中初始化的属性是响应式的
   新增/删除数据也要响应式（参考vue中对数组/对象的响应式）：使用Vue.set/delete

## axios

安装：npm install axios --save

## 疑惑

1. vue create app-name之后的选项中vue build选项runtime+compiler和runtime only的区别
   1. runtime+compiler：程序运行过程：compiler(template -> 抽象组件树（AST）)-> render -> vdom -> UI
   2. runtime-only：程序运行过程：render -> vdom -> UI（性能更高，代码更少）
   3. 关闭eslint：可在config/index.js文件中查找(vue-cli2)
2. node可以直接执行js文件，就像package.json配置中的命令
3. package.json文件中的插件版本符号（~，^）什么意思
4. 在package.json文件中：dependencies选项是运行时依赖，devDependencies是开发时依赖
   1. 故而可以从运行时依赖选项导入相关模块到项目中
5. vue-cli3中的配置隐藏在node modules中，引用的每个包依赖都在那里（自己定义配置可在根目录创建一个vue.config.js文件），会自动合并这些配置
6. 前端渲染和后端渲染：
   1. 后端路由阶段：后端处理URL和页面之间的映射关系
   2. 前后端分离阶段：后端处理数据，前端交互
   3. SPA阶段：
7. npm中--save的含义
8. 当使用import导入一个组件时，若传入一个目录会自动找文件夹下的index文件（故而导入时可省略index）