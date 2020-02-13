# 执行post请求在浏览器出现错误：

chrome浏览器：
```bash
Access to XMLHttpRequest at 'http://localhost:30003/post' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

POST http://localhost:30003/post net::ERR_FAILED
```

火狐浏览器：
```bash
已拦截跨源请求：同源策略禁止读取位于 http://localhost:30003/post 的远程资源。（原因：CORS 头缺少 'Access-Control-Allow-Origin'）。

已拦截跨源请求：同源策略禁止读取位于 http://localhost:30003/post 的远程资源。（原因：CORS 请求未能成功）。
```

## 前端配置：

**使用qs模块，然后解析对象数据，才能传入服务器**
**qs.stringify(data)**

```javascript
import axios from 'axios'
import Qs from 'qs'

// 注释掉就会出现错误，改为JSON.stringify或qs函数调用就不会出现错误，就能够执行post
// 否则会出现post请求发不出
var data = qs.stringify({"code":"postcode","name":"postname"});

export default {
  name: 'app',
  methods: {
    fasongPost() {
      axios.post('http://localhost:30003/post', data, {
        // 'Content-Type':'application/x-www-form-urlencoded'
      }).then(function(res) {
              console.log('发送post数据...')
              console.log(res)
      }).catch(err => console.log(err))
    }
  },
}
```

后端配置：在index.app中
```javascript
app.post('/post', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header('Access-Control-Allow-Credentials', 'true')
  // res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/x-www-form-urlencoded");
  res.send(JSON.stringify("接收post数据"))
  // res.send(req)
  console.log("req: " ,req.body)
  console.log('post响应成功...')
  next()
})
```