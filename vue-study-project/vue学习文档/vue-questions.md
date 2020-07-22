# vue 相关问题

> 参考文献：
> https://juejin.im/post/5f0dab7df265da22cc286e70

## 渐进式 web 应用（PWA，Progressive web apps）

> 参考文献：
> https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps

定义：

- 使用新兴的 web api 和传统的渐进式增强策略的 web 程序

具备的功能：

- 安全的上下文（https）：必须通过安全的网络提供服务
- 服务工作脚本：允许和控制 web 浏览器如何处理网络请求和资源缓存（创建可靠的快速网页和脱机体验）
- 清单文件（json 文件）：package.json

特性：

- 可发现：通过搜索引擎搜索
- 可安装：出现在设备主屏幕上
- 可链接：通过 url 分享
- 独立的网络：离线/差的网络下工作
- **渐进式**：可在新旧浏览器中使用
  - 从一个基本的网站开始，逐步添加新的功能
  - 同时记住检测他们是否在浏览器中可用，并优雅的处理在没有任何支持的情况下出现的错误
  - 根据场景需要使用合适的框架特性，根据需要一步步增强，不需一下子就使用整个全家桶开发
  - 参考：https://www.zhihu.com/question/51907207
- 响应式：适用于不同的屏幕尺寸、视口、像素密度
- 安全的：链接安全

应用架构：

- PWA 将 SSR 和 CSR 混合：在服务端渲染网站并缓存内容，然后在客户端需要时更新渲染
- 由于 SSR，首次加载很快
- 页面之间是平滑过渡的，客户端仅使用已更改的部分重新渲染页面

## 服务端渲染（SSR）和客户端渲染（CSR）

### 服务端渲染（SSR）

定义：

- 在服务端渲染网页
- 首次加载快，但不同页面之间导航需要下载新的内容（加载速度制约，性能延迟）

优势：

- 利于 SEO
- 首屏渲染时间短

劣势：

- 网络传输数据量大，占用服务器运算资源
- 不易于维护

### 客户端渲染（CSR）

定义：

- 不同页面之间导航时几乎立即更新网站，但首次加载需要下载更多的资源和额外的客户端渲染（首次访问速度慢）
- 实现前后端分离

优势：

- 前后端分离
- 局部刷新

劣势：

- 不利于 SEO
- 首屏渲染慢
- 耗电

### 同构渲染

定义：解决客户端 SEO 和首屏渲染慢的问题（结合使用 ssr 和 csr）

## vue 的实例属性

### \$data

定义：vue 实例观察的数据对象，vue 实例代理了 data 对象属性（不包括以`$`, `_`开头的属性）的访问

用法：

- `this.data_property === this.$data.data_property`
- 以`$`, `_`开头的属性，只能通过`this.$data.data_property`访问
- **注意 组件中 data 选项必须是一个函数，而非一个对象：**
  - 每生成一个 vue 实例之后，由于各个实例有各自的实例方法，所以当 data 为函数时，每个实例的 data 都是不相同的，防止改动一个影响全局

#### [纯粹的对象 plain object](https://cn.vuejs.org/v2/api/#data)

纯粹的对象：只含有 0/多个键值对

- 使用`{}`创建
- 使用`new Object()`创建

### \$options

options 相当于 vue 实例的初始化选项，他能够访问和修改包含所有 vue 选项或自己创建的选项数据，像 data 函数，生命周期方法

用法：

- `this.$options.data()`, `this.$options.created()`
- 重置数据：`this.person = this.$options.data().person`

## loader 的作用

定义：loader 是一个加载器

1. vue-loader、coffee-loader、babel-loader：作用分别为：将特定文件转为 js 模块、将其他语言转为 js 语言、编译下一代 js
2. file-loader、url-loader：处理资源
   1. file-loader：复制放置资源位置，指定文件名模板，hash 命名方式
   2. url-loader：将小于配置大小的文件转为 data url 的形式，减少请求
   3. row-loader：将文件以字符串的形式返回
3. imports-loader、exports-loader：导入/出

## \$nextTick(callback)

> 参考：
> https://juejin.im/post/5a6fdb846fb9a01cc0268618

前置知识：

1. vue 是异步执行 DOM 的更新的：数据变化，将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变（同一个触发多次算一次，避免不必要的计算和 dom 操作），在下一次事件循环 tick 中，vue 刷新队列并执行队列任务（使用原生的 promise.then，不支持则使用 setTimeout）
2. 改变数据，组件不会立即重新渲染，而是执行一个队列任务

场景：

1. 在生命周期 created 钩子函数中，由于此时 template 尚未挂载，故而无法操作 DOM，但是将操作 DOM 的代码放入到`this.$nextTick(callback)`中，与之对应的就是 mounted 钩子函数，此时可以操作 DOM
2. 数据变化需要执行的操作，且操作需要使用随数据变化的 DOM 时，应该放入`this.$nextTick(callback)`中

## Vue 的项目结构

> 参考
> https://juejin.im/entry/5abd80fa518825558a06b7ce#comment > https://lq782655835.github.io/blogs/team-standard/recommend-vue-project-structure.html

```bash
project
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
│   │
│   |____assets    // css、image、svg等资源
│   |   |____css   // 所有sass资源
|   |   |    |  reset.scss       // 兼容各浏览器
|   |   |    |  global.scss      // 全局css
|   |   |    |  variable.scss    // sass变量和function等
│   |   |____img   // image图标库
|   |   |____svg   // svg图标库
|   |
|   |____components    // 组件
│   |   |____common    // common自注册组件
│   |        |____base // 原子组件(如果是引入第三方，该文件夹可省略)
│   |        |   ...   // 业务公用组件
│   |   |____entity    // entity页面组件
│   |   |____about     // about页面组件
|   |
|   |____pages     // UI层(原则：轻page，重component)
|   |   |____entity
|   |   |    |  list.vue      // 列表页
|   |   |    |  create.vue    // 新增页
|   |   |    |  edit.vue      // 修改页
|   |   | main.vue
|   |
|   |____plugins   // 自己或第三方插件
|   |   | index.js       // 插件入口文件
|   |   | directives.js  // 所有Vue指令
|   |   | filters.js  // 所有Vue过滤
|   |
|   |____server    // 接口层
|   |   | index.js   // 所有接口
|   |   | http.js  // axios二次封装
|   |
|   |————api（和server功能一致）
|   |   | api.js    // 提供网络处理基本封装方法
|   |   |____moduleName   // 按模块划分的处理目录
|   |   |    |   componentsName.js    // 模块下的组件划分，处理每个组件的网络请求
|   |____router     // 存放路由配置
|   |   |____index.js     // 实现路由配置的分离
|   |____store     // vuex数据
|   |   | index.js
|   |   |____moduleName     // 按模块划分的vuex
|   |   |     |  index.js   // 导出该模块的vuex配置
|   |   |     |  states.js
|   |   |     |  getters.js
|   |   |     |  mutations.js
|   |   |     |  mutation_types.js
|   |   |     |  actions.js
|   |
|   |____utils     // 工具层
|   |   | config.js// 配置文件，包括常量配置
|
└───public         // 公用静态资源文件，不经过webpack处理
│   │   favicon.ico
│   │   index.html
│   vue.config.js  // vue-cli3主配置
│   babel.config.js// babel配置
│   .eslintrc.js   // eslint配置
│   .prettierrc.js // perttier配置
│   package.json   // npm配置
│   README.md      // 项目说明

```

### assets 目录和 static/public 目录的区别

相同点：

1. 存放项目中所需的静态资源文件

不同的：

1. assets 在代码构建时会打包（压缩体积，代码格式化等）
   1. 建议未被处理的文件放入 assets 中，打包以减小体积
2. static/public 的文件不会被打包
   1. 第三方引入的资源文件放入 public 目录中

## vue 初始化页面出现闪动的情况

原因：vue 初始化页面之前，元素是不归 vue 管的，所以在未解析情况下容易出现花屏现象

解决：

1. 在 css 上加上代码：`[v-cloak] { display: none; }`
2. 根元素上加上：`style="display: none;" :style="{ display: 'block'}`

# vuex

## vuex 是什么

定义：

1. 专为 vue app 开发的状态管理工具
2. 采用集中式存储管理应用的所有组件的状态，以相应规则保证状态以一种可预测的方式发生变化
3. vuex 集成到了 vue 的调试工具 devtools 中，提供了状态快照等功能

## 四种特性

1. state(data):
2. getters(computed):
3. mutations(methods, event): 同步，更改 state 的唯一方法
4. actions(methods, event): 异步，提交的是 mutations

注意：

1. 更改状态使用 commit/dispatch，便于 vuetools 追溯，尽量不使用 this.\$store.state.xxx
2. 在相应的 computed/methods 选项中使用...mapXxx(['xxx-name',...])直接展开这些方法（不用麻烦的一个个手写 this.\$store.commit('xxx-name', payload)/dispatch('xxx-name')），此时可以直接使用该方法名调用 commit/dispatch（不用在组件中重新设立一个新的方法名）
3. actions 中的参数是 context，代表整个 store，可以使用 context.state/getters/commit/dispatch，或者参数使用解构赋值({ state, getters, commit, dispatch})
4. actions 可以是异步的函数，故而可以直接使用 async actions-name(context)，在内部可以使用 await xxx;

### Ajax 请求代码应写在组件的 methods 还是 vuex 的 actions 中

1. 若请求的数据只在组件内部使用，而非公用数据，则应写在 methods 中
2. 若可被重复使用的数据，则应该放在 actions 中

### vuex 数据在页面刷新消失

解决：使用 sessionStorage 或 localStorage 存储

示例：

- 存储：`sessionStorage.setItem("data-name", JSON.stringify(data))`
- 获取：`JSON.parse(sessionStorage.getItem("data-name"))`

### vuex 的严格模式作用

严格模式：在 store 对象中设置`strict: true,`

作用：

- 当发生了由非 mutations 函数引起的状态变更，将会抛出错误
- 保证所有状态变更都能被调试工具跟踪到

### 在组件中批量使用 vuex 的 getters 属性、mutations 方法、actions 方法

1. 导入：`import {mapGetters, mapMutations, mapActions } from 'vuex';`
2. 使用：
   1. 在 computed 中：`computed: { ...mapGetters(['g1', 'g2'])}`
   2. 在 methods 中： `methods: { ...mapMutations({ m1: m1, m2: m2 })}`
      1. 调用：`this.m1()`，相当于`this.$store.commit('m1')`

### mutations 和 actions 的区别

mutations：

- 函数内部可以直接变更状态
- 不包含异步操作
- 调用方式：`this.$store.commit("m1", payload)`
- 函数第一个参数：state

actions：

- 函数内部提交的是 mutations：`context.commit('m1')`
- 包含异步操作
- 调用方式：`this.$store.dispatch('a1', data)`
- 函数第一个参数：`a1(context)`，其中 context 包含了 state、getters、commit、dispatch、rootState、rootGetters

### v-model 使用 vuex 的值

解决：通过 computed 计算属性来转换 vuex 的值

示例：在 computed 中

```JavaScript
computed: {
  message: {
    get() {
      return this.$store.state.message;
    },
    set(value) {
      this.$store.commit('updateMSG', value)
    }
  }
}
```

## vue-router：路由页面管理

定义：

- vue-router 是 vue 官方的路由管理器
- 和 vue.js 核心深度集成，使构建 SPA 很容易

功能：

- 嵌套路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 vue 过渡系统的过渡视图效果
- 细粒度的导航控制
- 带有自动激活的 css class 链接
- html5 的 history 模式和 hash 模式
- 自定义滚动条行为

### 路由使用

1. npm 安装
2. 在 main.js 中导入 vue-router，并且使用 Vue.use()
3. 配置路由
   1. 导入需要路由的组件（可使用懒加载模式，异步加载）
      1. `() => import('component-path')`
   2. 定义路由对象数组
   3. 实例化 vue router 对象
4. 在 main.js 中挂载到根实例
   1. **_注意：挂载时，必须使用 router，不能为其他名字，因为导入的 router 就是它，否则会发生错误_**，TypeError: Cannot read property 'matched' of undefined
5. 使用路由：`router-link`, `router-view`以及其他功能
   1. 使用 router-link 可能在 Android 上有 Babel 的问题，可安装 Babel polyfill 解决
   2. router-link 上事件无效，可使用@click.native

### vue 生成动态路由

> 参考：https://segmentfault.com/a/1190000018727683

#### 前端路由

1. 前端写出所有包含**角色权限**（`meta.roles`）的路由表，包括公共路由和权限路由
2. 访问页面的时候，判断是否有登录用户权限信息，没有就请求登录用户的角色
   1. 在beforeEach中进行路由拦截，根据获取的角色信息和路由表中的角色进行对比，过滤出对应的用户路由，并进行路由菜单渲染
   2. 此处要对路由角色进行遍历确认是否有权限（可使用数组的filter，some）

#### 后端路由

1. 在全局前置导航钩子 beforeEach 中拦截路由
2. 从后台获取路由信息
   1. 后端返回一个 json 格式的路由表
   2. 前端将路由表转成一个路由对象，
      1. 注意要对路由进行嵌套遍历
      2. 然后使用**addRouters**将路由添加到总路由中
      3. 同时将转换好的路由对象保存起来（vuex，localstorage），此时是为了方便生成一个路由菜单

注：
1. 为了避免导入组件产生的重复代码，可以将组件导入封装成一个方法，例如：
   1. `module.exports = file => () => import('@/views/' + file + '.vue')`

### 定义动态路由，获取动态路由参数

动态路由：

- 以冒号开头，`{path: '/user/:username', component: c1}`，匹配路径：`/user/xyy`, `/user/yyx`
- 可在 path 中设置多个路径参数：`path: '/user/:username/age/:age'`

### 路由匹配

使用通配符：`*`

- `path: '*'`：匹配所有的，通常放在末尾用于 404 路由
- `path: '/user-*'`：匹配以/user-开头的路径

### 组件复用，及监测路由参数变化

- 相同的动态路由切换到不同的路径参数，组件将被复用，同时生命周期钩子函数将不再调用
- 复用组件时，若想切换路径参数时发生响应，可以使用 watch 监测 route 对象的变化
  - `watch: {$route(to, from) { ... }}`
  - 使用路由导航守卫：beforeRouteUpdate(to, from, next)

### 路由对象 route

定义：在组件中使用\$route 会使它和对应的路由形成高度耦合，使组件只能在特定的 url 使用，限制了灵活性

**解决：使用 props 将组件和路由解耦**

```javascript
router = new VueRouter({
  routes: [
    {
      path: "/user/:id",
      component: User,
      props: true,
    },
    {
      path: "/person/:id",
      components: {
        default: User1,
        sidebar: User2,
      },
      props: {
        // 命名视图的路由，每个视图都需添加props
        default: true,
        sidebar: false,
      },
    },
  ],
});
```

使用：

1. 布尔模式：当 props 是 true 时，route.params.xx 将被设置为对应组件的属性，可直接使用，前提是该组件的 props 包括了 xx
2. 对象模式：props 的对象时，原样设置为组件属性，当 props 是静态时有用
3. 函数模式：创建一个返回 props 的函数，可将参数转为另一种类型，将静态值和基于路由的值相结合

> 参考：
> https://www.cnblogs.com/sea-breeze/p/11322902.html

```JavaScript
// 假设这些props均在组件my-com上
<my-com> {{ id }}</my-com>
props: ['id']

// 布尔模式：
props: true
// 对象模式
props: {new: false}
// 函数模式: 比如url为/search?q=aaa会将{query: "aaa"}作为属性传给组件my-com
props(route) => ({query: route.query.xx})

```

获取路由路径参数：

- `this.$route.params.xxx`

获取通配符匹配的路径参数：

- `this.$route.params.pathMatch`

获取 url 的查询参数：冒号开头的`？`

- `this.$route.query`

获取 hash

- `this.$route.hash`

### route 和 router 区别

route：

- 当前 router 跳转对象可以获取 name，path，params，query

router：

- 为 vuerouter 实例，想要导肮到不同 url，使用 router.push 等方法

### 导航守卫

定义：导航表示路由正在发生改变

注意：

- 参数/查询改变不会触发进入/离开的导航守卫，可通过观察\$route 或使用路由更新守卫

**next 方法**

- 一个守卫在 resolve 前一直是 pending 状态，一定要调 next 方法 resolve 该钩子
  - next()：进行管道中的下一个钩子
  - next(false)：中断当前导航，若路由改变会重置到 from 的路哟
  - next('/')或 next({path: '/'})：跳转到一个指定的地址
  - next(error)：导航终止，且错误传递给 router.onError 的回调
  - 保证 next 在导航中严格调用一次，切记不要重复调用多次

全局：

- 全局前置守卫：router.beforeEach(to, from, next)
- 全局解析守卫：router.beforeResolve(to, from, next)
- 全局后置守卫：router.afterEach(to, from)

路由独享的守卫：在**配置组件路由时的属性**

- beforeEnter(to, from, next)

组件守卫：在组件的选项中使用，和 data，created 类似

- beforeRouteEnter(to, from, next)
  - 不能获取当前组件的实例 this，此时还未创建
  - 可以通过传入一个 vm 参数给 next 获取组件 this
    - `next(vm => {// ...})`，只有这一个守卫有效
- beforeRouteUpdate(to, from, next)
  - 组件复用时调用，路径参数/查询改变
  - 可以访问组件的 this
- beforeRouteLeave(to, from, next)
  - 组件离开时调用，可访问组件的 this

#### 导航守卫解析过程

1. 导航被触发（路由即将跳转）
2. 在失活的组件（上一个组件）调用 beforeRouteLeave 守卫
3. 调用全局的 beforeEach 守卫
4. 重用组件则调用 beforeRouteUpdate 守卫
5. 在路由配置里调用 beforeEnter 守卫
6. 解析异步路由组件
7. 在被激活（当前进入的）组件调用 beforeRouteEnter 守卫
8. 调用全局的 beforeResolve 守卫
9. 导航被确认
10. 调用全局的 afterEach 守卫
11. 触发 DOM 更新
12. 用创建好的实例调用 beforeRouteEnter 传给 next 回调函数
