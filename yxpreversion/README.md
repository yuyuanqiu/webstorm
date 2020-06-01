# 予思课程项目 - 高校精品课程管理系统

```bash
前端项目：yxpreversion
后端接口：yxpreversion-admin-express
```

## 项目运行环境

```bash
操作系统：Windows10 v1903
运行软件：visual studio code v1.45.1
数据库：MongoDB v4.2.3
Node版本：Node.js v12.16.2

```

## 运行前配置

```bash
1. 启动mongodb数据库服务
2. 打开前端和后端项目根目录下，运行npm install安装依赖
3. 打开后端项目下的mongodb文件夹运行mock_data.bat文件生成数据库数据
4. 后端项目中public/video视频目录中复制25个mp4格式视频到该目录下，之后点击该目录下的新建文本文档脚本
```

## 运行项目

```bash
1. 开启数据库服务
2. 两个项目下运行npm run dev
3. 登录：
  学生：用户名在数据库student集合下选择一个账号即可
  教师：在数据库teacher集合下选择一个账号即可
  管理员：在数据库teacher集合下选择一个账号，并将role字段值改为admin
```



