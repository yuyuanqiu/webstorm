# 在webpack中配置url-loader去解析图片时，加载的图片是base64位形式，在浏览器打不开

解决：
  1. url-loader和fileloader两者只能选择一个
  2. 但是url-loader需要依赖file loader，所以需要安装file-loader开发依赖
  3. 使用url-loader时，大小超过了limit限制，则webpack直接赋值图片到打包目录，
     1. 否则会在url中使用base64编码的形式呈现图片
   