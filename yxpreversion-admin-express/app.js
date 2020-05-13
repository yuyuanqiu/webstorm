var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// 执行一次
// var createIndex = require("./mongodb/createIndex");  

var port = '20020';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require("./routes/article");
var userInitRouter = require("./routes/user_init");

var app = express();


// 跨域
//allow custom header and CORS
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 提供静态文件，提供多个静态资源目录应该多次调用该方法
// app.use(express.static(path.join(__dirname, 'public')));
// 创建一个虚拟路径映射静态资源
app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/static/images/*', function (req, res) {
  res.sendFile( __dirname + "/" + req.url );
  console.log("Request for " + req.url + " received.");
})

app.get('/static/stylesheets/*', function (req, res) {
  res.sendFile( __dirname + "/" + req.url );
  console.log("Request for " + req.url + " received.");
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/articles", articleRouter);
app.use("/get_user",userInitRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// 404路由
// app.use(function (req, res, next) {
//   res.status(404).send("Sorry can't find that!")
// })

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`监听端口地址： http://localhost:${port}`))

module.exports = app;
