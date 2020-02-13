const express = require('express')
const fs = require('fs')
const router = express.Router()

router.use('/user1/:id', function(req, res, next) {
  console.log('request url: ', req.originalUrl)
  // 传递非'route'给next将当成一个错误
  next('error')
  // 同步代码的错误由express捕获
  // throw new Error('broken')
  // 异步代码错误需传给next函数
  /* fs.readFile('/file-does-not-exist', function(err, data) {
    if(err) {
      next(err)
    } else {
      res.send(data)
    }
  }) */
}, function(req, res, next) {
  console.log('request type: ', req.method)
  next()
})

router.get('/user1/:id', function(req, res, next) {
  if(req.params.id === '0') next('route')
  else next()
}, function(req, res, next) {
  res.render('index', { title: 'regular', message: 'hello xia' })
})

router.get('/user1/:id', function(req, res, next) {
  console.log(req.params.id)
  res.render('index', { title: 'special', message: 'hello ioiy'})
})

module.exports = router