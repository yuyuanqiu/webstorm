# express

express：是一个自身功能极少的路由和中间件web框架，本质上是一系列中间件功能的调用

建立项目：npm init：在当前目录生成一个package.json文件

[常见问题](http://expressjs.com/en/starter/faq.html)
  1. [express支持的模板引擎](https://github.com/tj/consolidate.js)：ejs，jade，pug等等
  2. 在express中404响应不是错误，
     1. 它表示没有其他工作要做，即当express执行所有中间件和路由时，发现它们都未响应时才会使用404，
     2. 因此错误处理程序中间件不会捕获它们，所以需要在堆栈的最底部（所有功能下方）添加一个中间件功能处理404响应
     3. 在express.Router()实例运行时动态添加路由，该路由就不会被中间件函数取代
  3. 设置错误处理程序：
     1. 和其他中间件处理方式相同，但需要使用4个参数(err, req, res, next)
  4. 渲染纯HTML：
     1. 不需要使用res.render()函数呈现html
     2. 若有特定文件，应使用res.sendFile()函数
     3. 若要为目录中的许多资源提供服务，应使用express.static()中间件函数
  5. 配置express热部署，即修改内容不用重启命令
     1. 使用node-dev包：npm install -g node-dev
     2. 配置命令："dev": "node-dev ./index.js"
     3. 之后可用npm run dev启动项目



安装：npm install express --save
  1. 无参数：安装到项目目录下，运行npm install初始化项目不会下载该模块，需要提前下载
  2. `--save(-S)`：
     1. 将模块安装到项目目录下，并在package文件的dependencies节点写入依赖
     2. 运行npm install初始化项目会下载该模块
     3. 运行npm install --production或者NODE_DEV值为production时，会自动下载模块到项目目录（项目运行必备的，生产环境使用的）
  3. `--save-dev(-D)`：
     1. 将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖
     2. 运行npm install初始化项目会下载该模块
     3. 运行npm install --production或者NODE_DEV值为production时，不会自动下载模块到项目目录（开发环境使用的）

运行单个文件：可使用node index.js运行文件，然后在浏览器打开相应端口查看输出

使用express应用程序生成器生成项目：npx express-generator(nodejs8.2+)
  1. 此时应该在一个空目录下执行该命令，该目录即项目目录
  2. 安装依赖：npm install
  3. 启动项目：在package.json文件中查看启动命令，npm start
  4. 然后在浏览器打开相应端口（例如3000）加载该应用

## 基本路由

路由：
  1. 指确定应用程序如何响应客户端对特定端点的请求，该特定端点是url和特定http请求方法（post/get）
  2. 每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行
  3. 路由定义：`app.METHOD(PATH, HANDLER)`
     1. app是实例express
     2. method为小写的http请求方法（get/post/put/delete/all）
     3. path是服务器路径：表示在该路径下响应请求
     4. handler是当前路由匹配时执行的函数（**中间件函数**）
     5. 可使用app.all()处理所有http方法，并使用app.use()将中间件指定为回调函数
     6. 路由方法可以有多个回调函数作为参数
        1. 对于多个回调函数，需要提供next作为回调函数的参数，然后在函数体调用next()将控制权交给下一个回调

路由路径：
  1. path可以是字符串、字符串模式、正则表达式
     1. 字符?, +, *对应正则的子集
        1. 在express4.x中，应该使用{0，}代替`*`
     2. 连字符-和点.由基于字符串路径的字面意义解释
     3. 使用$需要将其放在`[]`中且转义：`[\$]`
     4. express使用npm包path-to-regexp匹配路由路径

路由参数：
  1. 路由参数被命名为url段，用于捕获url中指定位置的值
  2. 捕获的值被填充到req中，在路径中指定路由参数作为它们各自的键
  3. 使用路由参数定义路由，在路由路径中指定路由参数：
     1. PATH值: '/users/:userId/books/:bookId'
     2. 使用：请求路径：'users/xia/books/30'
     3. 路由参数：req.params：{'userId': 'xia', 'bookId': '30'}
     4. 路由参数名称必须是：[a-zA-Z0-9]
     5. 连字符-和.与路由参数一起使用时：
        1. -
           1. /flights/:from-:to => {'from': 'xia', 'to': 'yu'}
           2. /flights/xia-yu
        2. .
           1. /flights/:foo.:bar => {'foo': 'xia', 'bar': 'yu'}
           2. /flights/xia.yu
     6. 路由参数可结合re使用，即在path结尾使用括号()，然后在括号使用re，之后路由参数只能匹配指定的re
        1. /user/:userId(\\d+) => 只能是正数
        2. 注意要将\转义

路由处理函数（即中间件）：
  1. HANDLES：
     1. fn1, fn2...
     2. fn1, [fn2, fn3...]...
     3. [fn1, fn2...]
  2. 一个路由可以提供多个回调函数（记得使用next），这些回调会调用next('route')绕过剩余路由回调，可以是使用此机制对路由施加前置条件，然后再没有理由继续当前路由时将控制权传给后续路由
  3. 路由处理函数可以是函数、函数数组、或两者组合
     1. 注意若由多个处理函数，则只能由一个函数可以发送响应

响应方法：
  1. res.download()：提示要下载的文件
  2. res.end()：结束响应进程
  3. res.json()：发送一个json响应
  4. res.jsonp()：发送一个jsonp支持的json响应
  5. res.redirect()：重定向请求
  6. res.render()：渲染一个视图模板
  7. res.send()：发送各种类型的响应
  8. res.sendFile()：以八位字节流形式发送文件
  9. res.sendStatus()：设置响应状态码并将其字符串表示形式作为响应主体发送

app.route()：
  1. 定义：类似app.route(path).get(fn).post(fn).put(fn)
  2. 可以使用app.route()为路由路径创建链式路由处理程序
  3. 由于路径是在单一位置指定的，所以创建模块化路由很有哦帮助，这样可以减少冗余和打印错误

express.Router()：
  1. 使用步骤
     1. var express = require('express')
     2. var router = express.Router()
     3. 自定义该路由的中间件处理函数router.use(fn)
     4. **自定义该路由下其他子路由**：router.get(path, fn)
  2. 使用它来创建模块化的、可挂载的路由处理程序
  3. Router实例是一个完整的中间件和路由系统（迷你app）

## 提供静态文件

提供静态文件（img、css、js）使用：express.static(root, [options])
  1. root：指定静态文件的根目录
  2. options：
  3. 之后就可以在服务器路径加载（查看）root目录下的文件
     1. 例如public/images目录下：http://localhost:3000/images/apple.jpg
     2. 查看忽略public路径
  4. 使用多个静态文件目录，使用上述函数多次调用即可
     1. express使用express.static中间件功能**按设置的静态目录顺序查找文件**
     2. 为了获得最佳结果，使用反向代理缓存提高静态资源服务的性能
  5. 为static功能服务的静态资源创建虚拟路径前缀（实际上不存在该路径），可为静态目录指定安装路径：
     1. app.use('/static', express.static('public'))
     2. 则访问静态文件还可以使用：http://localhost:3000/static/images/kitten.jpg
  6. 上面的static参数path使用的是相对于运行node程序的目录，如果从另一个目录启动程序，使用目录的绝对路径更安全:
     1. app.use('/static', express.static(path.join(_dirname, 'public')))
     2. 注：
        1. _dirname：获得当前执行文件所在**文件夹的绝对路径**
        2. _filename：获得当前执行**文件的绝对路径**
        3. process.cwd()：获得运行node命令时所在的文件夹的绝对路径

## 编写用于express app的中间件

中间件函数middleware：
  1. 它是可以访问请求对象req、响应数据res、app请求响应周期的next函数
  2. next函数是express路由器中的函数，当调用该函数时，他将在当前中间件之后执行中间件
  3. middleware函数执行的任务：
     1. 执行任何代码
     2. 更高请求和响应对象
     3. 结束请求响应周期
     4. 调用堆栈中的下一个中间件函数
  4. 如果当前中间件函数没有结束请求响应周期，则必须调用next()将控制权传给下一个中间件函数，否则请求将被挂起
     1. next()函数不是nodejs/express中的一部分，它是传递给中间件函数的第三个参数
     2. next()函数可以命名为任何名称，按照惯例命名为next
  5. 调用app.use(fn)或app.get(path, fn)加载中间件函数
     1. 中间件函数的执行依照加载顺序依次执行
     2. 若某个中间件函数没有next方法，则其后面的所有中间件函数将被挂起（不被执行）
     3. 若未指定路径，则在该路由路径（包括子路由）都会执行该路由中间件函数
   
可配置的中间件：
  1. 若想要中间件是可配置的，可导出一个带有options对象或其他参数的函数，然后返回一个基于输入参数的中间件实现
  2. 步骤：
     1. module.exports = fn(options)
     2. var mw = require('xxx')
     3. app.use(mw(options))

## 中间件的使用

express app可使用以下中间件：
  1. application-level middleware
  2. router-level middleware
  3. error-handling middleware
  4. built-in middleware
  5. third-party middleware
  6. 可以使用可选的挂载路径加载应用级和路由级中间件
  7. 可以将一系列中间件一起加载，从而在一个挂载点创建中间件系统的子堆栈

### application-level middleware：
  1. 使用app.use()和app.METHOD()将应用级中间件绑定到app对象的实例
     1. 无路径的use()将在每次接收到任何类型http请求时执行
     2. 有路径的use()将在接收到任何类型http请求时在指定路由上执行
     3. app.use()可接受一系列函数或函数数组
     4. 一条路径可定义多个路由（中间件），当中间某个路由中间件函数没有使用next时，后面中间件不会执行
     5. 要跳过路由器中间件堆栈的其余中间件，可调用next('route')将控制权传递给下一个路由，
        1. next('route')只适用于通过使用app.METHOD()或router.METHOD()加载的中间件
        2. 下一个路由是指同一个路径下的路由（中间件），只有当下一个路由的path与该路由path相匹配时才会跳转，否则出现error

### router-level middleware：
  1. 路由级中间件与应用级中间件工作工作方式相同，只是它绑定到express.Router()的一个实例
     1. 步骤：
        1. var express = require('express')
        2. var router = express.Router()
        3. 使用中间件：
           1. router.use()
           2. router.METHOD()
        4. 挂载router到app上：app.use(path, router)

### error-handling middleware：**[没有看懂官网实例](http://expressjs.com/en/guide/using-middleware.html)**

1. 错误处理中间件必须提供4个参数来将其标识为错误处理中间件
2. 即使不需要使用next对象，也必须指定它，否则下一个对象将被解释为常规中间件，并无法处理错误
3. 定义一个错误处理中间件和其他中间件一样，只是它需要4个参数(err, req, res, next)
   
错误处理：指如何表示同步和异步发生的捕获和处理错误
  1. 发生在路由处理程序和中间件内部的同步代码不需要额外的操作，因为express将自动捕获并处理
  2. 由路由处理程序/中间件调用的异步函数返回的错误，必须将错误传给next()函数，express将在该函数中捕获并处理
  3. 当将除'route'之外的内容传给next()，express会将当前请求视为错误并处理，然后跳过剩下的非错误处理路由和中间件
  4. 在try..catch块中使用promise或返回promise的函数避免开销
  5. 因为promise会自动捕获同步错误和inject的promise，所以可简单的将next作为最终的catch处理程序，并且express将捕获错误，因为catch块的第一个参数是error
  6. 依赖可同步处理错误的处理程序链处理异步代码，app.get(fn1, fn2...)，即某个函数会使用上一个的数据，若在上一个函数中发生错误，此时会在该函数内将异步错误传给express，否则还会在下一个函数中同步处理它

默认的错误处理函数：
   1. express自带了默认的错误处理程序，可处理app中遇到的任何错误，该默认handles添加在中间件堆栈的末尾
   2. 当将错误传给next()且未自定义错误处理，则将由内置错误处理，错误将通过堆栈跟踪写入客户端，生产环境不包括堆栈跟踪
   3. 将环境变量NODE_ENV设置为production，可以以生产环境运行app
   4. 当自定义错误处理程序时，必须将其委派给默认的express错误处理，这时标头已发送到客户端**没有懂**
   5. 如果不止一次调用带有错误的next()，会触发默认错误处理，即使自定义错误处理已经就位
   
书写错误处理程序：
   1. 需要4个参数(err, req, res, next)
   2. 错误处理需要在其他app.use()和路由调用之后调用
      1. 最后调用app.use(fn(err, req, res, next))
   3. 中间件函数的响应可以是任何格式：
      1. html错误处理页面
      2. 简单消息
      3. JSON字符串
   4. 当在一个错误处理函数中不调用next()时，需自己编写响应，否则请求将被挂起，不适合进行垃圾回收
      1. 编写响应：res.status(500).send({error: 'failed'})
   5. 一个路由处理中若有多个处理函数，则可通过next('route')跳到下一个路由


### built-in middleware：
  1. 从版本4开始，express不再依赖connect，一起包含在express的中间件现在位于单独的模块中
  2. built-in中间件：
     1. express.static：提供静态资源，像html，img等
     2. express.json：使用json负载解析传入请求
     3. express.urlencoded：使用url编码负载解析传入的请求

### third-party middleware：
  1. 可使用第三方中间件给app添加功能
  2. 此时需要按照所需功能的nodejs模块，然后在应用级或路由级加载引入它
     1. 比如加载cookie-parser
        1. npm install cookie-parser
        2. var cookieParser = require('cookie-parser)
        3. 加载：app.use(cookieParser())

## 使用模板引擎

模板引擎允许在app中使用静态模板文件，在运行时模板引擎用实际的值替换模板文件中的变量，并将模板转换为发送给客户端的html

在express使用的流行模板引擎由：
  1. Pug（jade改名为Pug）
  2. Mustache
  3. EJS
  4. express app默认使用Jade作为默认模板引擎

若想呈现模板文件，需设置app中的设置属性，生成器创建的项目设置默认在app.js中，设置的属性有：
  1. views：模板文件所在目录
     1. app.set('views', './views')表示设置views目录在根目录下的views目录
  2. view engine：使用的模板引擎
     1. app.set('view engine', 'pug')表示使用Pug模板引擎
     2. 使用相关的模板引擎需要安装npm包：npm install pug --save
     3. 兼容express的模板引擎会导出一个名为`_express(filePath, options, callback)`的函数，它通过res.render()函数调用以渲染模板代码
     4. 在设置好视图引擎后，不必指定引擎或在app中加载模板引擎模板，express在内部加载模块
  3. 使用路由在中间件中渲染模板文件
     1. res.render('index', variable-obj)
     2. 其中index表示模板文件，若未设置view engine，则必须指定扩展名
  4. view engine cache不缓存模板输出的内容，只缓存底层模板本身，即使在缓存打开时，视图仍会在每次请求时重新渲染

## debugging(调试) express

express在内部使用调试模块记录有关路由匹配、正在使用的中间件、应用程序模式和请求-响应周期流的信息

调试类似console.log的增强版，不必在生产代码中注释调试信息，默认情况日志记录是关闭的，可以在DEBUG环境变量打开日志
   1. 查看express使用的所有内部日志，需在启动app时将环境变量DEBUG设置为`express:*`
      1. bash中设置：DEBUG=express:* node index.js
      2. windows中：set DEBUG=express:* & node index.js
      3. 其中node index.js可查看package.json文件
   2. 要只查看来自路由实现的日志，需将DEBUG设置为express:router，应用程序日志设为express:application

express的应用生成器：
   1. express命令生成的app也可使用调试模块，它的调试命名空间是app的名称
      1. set DEBUG=app-name:* node ./bin/www
      2. 可指定一个逗号分隔的名称列表指定多个调试命名空间：set DEBUG=http,mail,express:* node index.js
      3. [更多debug信息](https:npmjs.com/package/debug)

## 代理

当运行一个代理背后的app时，需使用app.set()设置trust proxy应用变量为下述值之一：
   1. 类型为Boolean：
      1. 若值为true，客户端IP地址将理解为X-Forwarded-*报头最左边条目
      2. 值为false，则理解为直接面向网络，客户端IP地址来自req.connection.remoteAddress（默认设置）
   2. 类型为IP地址：信任的IP地址、子网、一组IP地址和子网，设置IP地址：
      1. 指定单个子网：app.set('trust proxy', 'lookback)
      2. 指定一个子网和地址：app.set('trust proxy', 'lookback, 123.123.123.123')
      3. 指定多个子网：app.set('trust proxy', 'loopback, linklocal, uniquelocal')
      4. 指定一组子网：app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
      5. loopback：环回地址
      6. linklocal：链路本地地址
      7. uniquelocal：本地唯一地址
   3. 类型为数字：将来自前端代理服务器的第n跳作为客户端
   4. 类型为函数：自定义信任执行

启用信任代理的影响：
   1. req.hostname的值派生自设置在X-Forwarded-Host表头的值，它可有客户端或代理设置
   2. 通过反向代理设置的X-Forward-Proto告诉app它是http还是https，或一个无效的名称，该值通过req.protocol映射
   3. req.ip和req.ips的值由X-Forwarded-For的地址列表填充
   4. trust proxy设置是使用proxy-addr包实现的


虽然app变量未设置信任代理，app不会运行失败，但除非配置了信任代理，否则它将错误的将代理IP地址注册为客户端IP地址

## 最佳实践

### 代码中的注意事项

使用gzip压缩：
1. 有助于显著降低响应主体的大小，提高webapp的速度
2. 使用：
   1. var compression = require('compression')
   2. app.use(compression)

不要使用同步函数：
1. 同步函数会阻塞进程的执行，会降低app的性能
2. 尽管node和许多模块提供了同步和异步版本，但应始终使用异步版本，只有在初始启动时，同步函数才能得到验证

正确记录日志：
1. 日志记录通常用于调试和记录应用程序活动
2. 调试应使用debug模块
3. 记录应用程序活动（流量跟踪/api调用），应使用Winston或Bunyan库

正确处理异常：
1. 不处理异常和采取适当行动将使express app崩溃或离线
2. 确保处理所有异常，可使用：try..catch（只适用于同步代码）或promise（在then()的异步代码块中处理异常，只需要添加.catch(next)）
   1. 所有的异步代码需返回promise，没有返回也可使用模块Bluebird.promisifyAll()处理
3. 使用next()函数通过中间件链传递错误
4. 不要侦听uncaughtException事件，否则将改变默认行为
5. 不建议使用domain模块

### 环境/设置的注意事项

将NODE_DEV设置为production：
1. 此设置可高速缓存视图模板、扩展的css、生成简短的错误信息，可提高app性能

确保app能够自动重启：
1. 使用进程管理器重启（strongloop pm、pm2等）

高速缓存请求结果：以便app不需为满足同一请求而重复执行操作，可使用Nginx或varnish

使用负载均衡器：使用Nginx

使用逆向代理：Nginx

## 数据库集成

MySQL：**[这是一个MySQL的nodejs驱动](https://github.com/mysqljs/mysql)**
   1. 安装：npm install mysql
   2. 在连接上调用的每个方法按顺序执行
   3. 通过end()关闭连接，他能确保下给你MySQL发送quit包之前执行所有剩余查询

```javascript
var mysql = require('mysql')
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'me',
   password: 'secret',
   database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS soluction', function(err, results, fileds) {
   if(err) throw error;
   console.log('the solution is: ', results[0].solution)
})

connection.end()
```

建立连接：
```javascript
var mysql = require('mysql')
var connection = mysql.createConnection({
   host: 'xxx',
   user: 'xxx',
   password: 'xxx'
})

connection.connect(function(err) {
   if(err) {
      console.error('error conenction: ' + err.stack)
      return;
   }
   // thread: 线程
   console.log('connection as id ' + connection.threadId)
})
```

通过调用查询隐式建立连接：
```javascript
var mysql = require('mysql')
var connection = mysql.createConnection(...)

connection.query('SELECT 1', function(err, results, fields) {
   if(err) throw error;
   // connected
   // ... 
})
```

建立连接的选项：
   1. host：要连接的数据库主机名，默认为localhost
   2. port：连接的端口，默认为3306
   3. localAddress：用于TCP连接的源IP地址
   4. socketPath
   5. user：
   6. password：
   7. database：用于连接的数据库名称，可选
   8. charset：连接的字符集
   9. connectTimeout：连接超时的毫秒数
   10. supportBigNumbers：处理大数字时需启用该选项
   11. dateStrings：强制日期类型以字符串形式返回
   12. multipleStatements：每个查询允许多个mysql语句，可能会增加SQL注入攻击

除了将选项作为对象传递，还可以使用url字符串：`connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700')`
   1. 首先会尝试将查询值解析为JSON，失败则假定为纯文本字符串

终止连接：
   1. 通过调用end()方法：`connection.end(function(err){})`
      1. 这将确保将COM_QUIT发送到MySQL服务器之前，所有之前排队的查询仍然存在
      2. 但在发送数据包之前发送错误，将为回调提供err参数，并终止连接
   2. 通过调用destroy()方法：`connection.destroy()`
      1. 这将导致基础套接字立即终止，并且不会为连接触发更多事件回调（不接受回调）

连接池：
   1. 与逐个创建和管理连接不同，此模块可使用mysql.createPool(config)提供内置的连接池
   2. 创建一个池并直接使用：
      ```javascript
      var mysql = require('mysql')
      var pool = mysql.createPool({
         connectionLimit: 10,
         host: 'xx',
         // ...
      })

      pool.query('SELECT 1 + 1 AS solution', function(err, results, fields) {
         if(err) throw err;
         console.log('the solution is: ' + results[0].solution)
      })
      ```
      1. 这是池的快捷方式：pool.getConnection() => connection.query() => connection.release()
      2. 使用pool.getConnection()有助于为后续共享连接状态，因为pool.query()的两个调用可使两个不同的连接并行运行
      3. 基本结构：
         ```javascript
         var mysql = require('mysql')
         var pool = mysql.createPool(..)

         pool.getConnection(function(err, connection) {
            if(err) throw err; // 没有连接

            // 使用连接
            connection.query('SELECT something FROM sometable', function(err, results, fields) {
               // 连接完成时释放
               connection.release();
               // 释放之后处理错误
               if(err) throw err;

               // 不要在这里使用连接，它会返回pool
            })
         })
         ```
      4. 关闭连接并将其从池中移除，可使用connection.destroy()，下次连接时，pool将创建一个新连接
      5. 连接由池延迟创建，连接采用循环方式，从池的顶部开始并返回到底部

pool的选项：
   1. pool接受和连接相同选项，还由一些其他选项：
      1. acquireTimeout：连接获取过程中发送超时的毫秒数，与connectTimeout不同的是，获取连接并不总是涉及建立连接，当连接进入请求队列，请求在队列中花费的时间不计入此
      2. waitForConnections
      3. connectionLimit
      4. queueLimit

连接池事件：
1. acquire：
2. connection
3. enqueue
4. release

关闭连接池所有的连接：
   1. 当连接池使用完后，必须结束所有连接，否则nodejs事件循环将一直处于活动状态，直到MySQL服务器关闭连接
   2. 终止池中所有连接，使用end()方法：`pool.end(function(err){...})`，end方法接受一个可选的回调

切换用户和改变连接状态：
   1. 提供了changeUser命令允许在不关闭底层套接字情况下更改当前用户和连接的其他方面
   2. connection.changeUser({user: 'john'}, function(err){})
   3. options对象可选项：
      1. user
      2. password
      3. charset
      4. database
   4. 副作用是会重置任何连接状态（变量、事务）

服务断开：
   1. 由于网络问题、服务器超时、服务器重启/崩溃，可能会失去MySQL的连接，这些事件认为是致命错误

执行查询：
1. 最基本的查询是对对象调用query()方法
   1. query(sqlstring, callback)
   2. query(sqlstring, values, callback)
   3. query(options, callback)
   4. query(options, values, callback)
      ```javascript
      connection.query({
         sql: 'SELECT * FROM `books` WHERE `author` = ?',
         timeout: 40000, // 40s
         values: ['David']
      }, function (error, results, fields) {
         // error will be an Error if one occurred during the query
         // results will contain the results of the query
         // fields will contain information about the returned results fields (if any)
      });
      ```

[转义查询标识符：](https://github.com/mysqljs/mysql#joins-with-overlapping-column-names)

