const express = require('express')
const app = express()
const port = 30003

let birds = require('./routes/birds')
let mw = require('./routes/configurable-mw')
let users = require('./routes/userss')

app.set('views', './views')
app.set('view engine', 'pug')

// app.set('host','192.168.0.21');

/* 
// 在根路由（/）即应用程序主页响应get/post请求
app.get('/', (req, res,next) => {
  res.send('fs a get request')
  console.log('this is get requset to homepage')
  next()
})

// 在/about路径中响应请求
app.get('/about', function(req, res, next) {
  res.send('this is get request to /about')
  next()
  console.log('this is get request to /about')
})


app.post('/', (req, res,next) => {
  res.send('got a post request')
  next()
  console.log('got a post request')
})

// 响应对/user路由（在/user路径中响应）的put/delete请求
app.put('/user', (req, res,next) => {
  res.send('got a put request at /user')
  console.log('this is put request to /user')
  next()
})

app.delete('/user', (req, rdeletees, next) => {
  res.send('got a delete request at /user')
  console.log('this is delete request to /user')
  next()
})

app.all('/secret', function(req, res, next){
  console.log('accessing the secret section...')
  next()
  res.send('this is all to /secret')
})

app.get('/random.text', function(req, res, next) {
  res.send('random.text'+ Math.random())
  // next()
})

// 匹配正则表达式
// 在/acd,/abcd中响应
app.get('/ab?cd', function(req, res, next) {
  res.send("ab?cd")
  next()
})
// 路径将可以由无数个b
app.get('/ab+cd', function(req, res, next) {
  res.send('ab+cd')
})
// 路径将可在ab和cd之间插入任何内容
app.get('/ab*cd', function(req, res, next){
  res.send("ab*cd")
})
// abe/abcde
app.get('ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})
// 匹配任何带有a的内容
// app.get(/a/, function(req, res) {
//   res.send('/a/')
// })

// 路由参数
app.get('/name/:name/age/:age/sex/:sex', function(req, res) {
  res.send(req.params)
})
app.get('/books/:book-:count', function(req, res) {
  res.send(req.params)
})
app.get('/person/:name.:age', function(req, res) {
  res.send(req.params)
})
// 路由参数结合re(记住在string中使用正则要对\进行转义)
app.get('/user/:user(\\d+)', function(req, res) {
  res.send(req.params)
})

// 路由处理函数，记得使用next()
let fn1 = function(req, res, next) {
  console.log('hello from fn1')
  res.send("fn3")
  next()
}
let fn2 = function(req, res, next) {
  console.log('hello from fn2')
  next()
}
let fn3 = function(req, res, next) {
  console.log('hello from fn3')
}

// 请求只能在连续操作中发送一次
app.get('/example/c', fn1, [fn2, fn2], fn3)
app.get('/example/b', fn1, fn2)
 */
// 加载使用birds路由模块，然后执行birds路由中间件函数
app.use('/birds', birds)

var myLogger = function(req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)


app.get('/', function (req, res, next) {
  console.log('home page')
  // res.send('home page')
  next()
})

// 如果上面的路由中间件没有next函数，则之后的中间件函数不会执行
app.use(myLogger)

// 添加一个请求对象属性，然后在响应中获取
var requsetTime = function(req, res, next) {
  req.requsetTime = Date.now()
  next()
}

app.use(requsetTime)

app.get('/', function (req, res) {
  let responseText = 'hello world<br/>'
  responseText += '<small>requested at: ' + req.requsetTime + '</small>'
  res.send(responseText)
})


app.use('/custom', mw({
  name: 'xia',
  age: 23, 
  sex: '女'
}))

app.get('/you/:name', function(req, res, next) {
  // 如果name为name，跳到下一个路由
  // 下一个路由就是下面的app.get
  if(req.params.name === 'name') next('route')
  // 否则将控制传给堆栈中的下一个中间件
  else next()
}, function(req, res, next) {
  // 发送'regular响应
  res.send('regular')
})

// /you/:name路径的处理器，将发送一个'special'响应
app.get('/you/:name', function(req, res, next) {
  res.send('special')
})

app.use('/myuser', users)



// 使用promise避免开销，此时错误将传给express
app.get('/error', function(req, res, next) {
  Promise.resolve().then(function() {
    throw new Error('broken')
  }).catch(next)
})

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

let randomName = function() {
  const az = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const azlength = az.length
  let name = ''
  for(let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * azlength)
    name += az[index]
  }
  // console.log(name)
  return name 
}

let infos = function(num) {
  var arr = []
  for(let i = 0; i < num; i++) {
    let obj = {id: Math.random().toFixed(2), name: randomName(), age: Math.floor(Math.random() * 100)};
    arr.push(obj)
  }
  return arr
}

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  let dbName = db.db('person')
  let info =  infos(10)


  // dbName.collection("person").insertMany(info, function(err, res) {
  //   if(err) throw err;
  //   // console.log("插入成功", info)
  //   db.close()
  // })

  let mongodbData = {}

  dbName.collection('person').find({}).toArray(function(err, result) {
    if(err) throw err;
    mongodbData = result;
    app.get('/mongo', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", ' 3.2.1') 
      res.header("Content-Type", "application/json;charset=utf-8");
      res.send(mongodbData)
      // console.log(req)
    })
    console.log("查询成功：")
    db.close()     
  })
})


app.get('/jieshou', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json");
  // res.send(JSON.stringify('123'))
  res.send({"post":"数据"})
  console.log("req: " , (req.query))
  console.log('响应成功...')
  next()
})

var bodyParser = require('body-parser');

var server = require('http').createServer(app);

// app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: false
}));

//--------------------------------------------------------------------------------------- 服务端接收不到前台的数据
app.post('/post', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/x-www-form-urlencoded");
  res.send(req.body)
  // res.send(req)
  console.log("req.baody: " ,(req.body))
  console.log('post响应成功...')

  MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbName = db.db('person')
    let info =  req.body
  
  
    dbName.collection("person").insertOne(info, function(err, res) {
      if(err) throw err;
      console.log("插入成功", info)
      db.close()
    })

  })
  
  next()
})

// 错误处理中间件 ======================================没有看懂
app.use(function(err, req, res, next) {
  console.log(err.stack)
  res.status(404).send(err)
  next()
})

app.listen(port, () => console.log(`example app listening on port http://localhost:${port}`))


