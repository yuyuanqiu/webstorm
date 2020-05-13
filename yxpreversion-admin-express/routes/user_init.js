/**
 * 此路由为专门mock数据路由
 * 
 */

var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'misscourse';

const client = new MongoClient(url);

client.connect(function (err, client) {

  const db = client.db(dbName);

  // 添加用户信息,便于操作,比如评论/回复才能将信息正确上传到数据库中

  router.get("/", function (req, res, next) {

    db.collection("student").findOne({
      "student_name": "学生100",
    }, function (err, result) {
      // console.log(result)
      res.send(result)
    })
  })


  router.get("/add_password", function (req, res, next) {

    db.collection("student").update({}, {
      $set: {
        password: Math.floor(Math.random() * 10000000),
      }
    }, {
      multi: true
    }, function (err, result) {
      // console.log(result)
      res.send(result)
    })
  })

  router.get("/update_avatar", function (req, res, next) {

    db.collection("student").update({}, {
      $set: {
        student_img: "http://localhost:20020/static/images/avatar/avatar_s_0.jpg",
      }
    }, {
      multi: true
    }, function (err, result) {
      // console.log(result)
      res.send(result)
    })
  })

  // 设置网页标题
  router.post("/get_article_name", function (req, res, next) {

    db.collection("article").find({
      _id: req.body.article_id
    }).project({
      _id: 0,
      article_title: 1
    }).toArray(function (err, result) {
      // console.log(result)
      res.send(result)
    })
  })






});



module.exports = router;