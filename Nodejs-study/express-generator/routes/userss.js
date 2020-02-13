const express = require('express')
const router = express.Router()

router.use('/user1/:id', function(req, res, next) {
  console.log('request url: ', req.originalUrl)
  next()
}, function(req, res, next) {
  console.log('request type: ', req.method)
  next()
})

router.get('/user1/:id', function(req, res, next) {
  if(req.params.id === '0') next('route')
  else next()
}, function(req, res, next) {
  res.render('index', { title: 'regular' })
})

router.get('/user1/:id', function(req, res, next) {
  console.log(req.params.id)
  res.render('index', { title: 'special' })
})

module.exports = router