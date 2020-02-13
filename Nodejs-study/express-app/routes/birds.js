let express = require('express')
let router = express.Router()

// 路由特定的中间件(意思是：使用该路由时会自动执行该函数)
router.use(function timeLog(req, res, next) {
  console.log('time: ', Date.now())
  next()
})
// 定义birds的home页面路由
router.get('/', function(req, res) {
  res.send('birds home page')
})
// 定义birds/abouts路由
router.get('/abouts', function(req, res) {
  console.log('birds/abouts')
  res.send('about birds')
})

module.exports = router