var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = 4000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userssRouter = require('./routes/userss')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 为静态资源目录创建虚拟路径前缀：
app.use('/static', express.static(path.join(__dirname, 'public')))

// 表示在path上安装中间件，若未指定path，则默认是'/'
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userss', userssRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`example app listening on port http://localhost:${port}`))

module.exports = app;
