/**
 * 此路由为专门mock数据路由
 * 
 */

var express = require('express');
var router = express.Router();

let jwt = require("jsonwebtoken");

let key = "ioiy aig";

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

  // 添加课程大图
  router.get("/add_course_bg_pic", function (req, res, next) {

    let arr = [1, 2, 3, 4, 5]



    db.collection("course").update({}, {
      $set: {
        big_pic: "/static/images/course_big_pic/" + arr[Math.floor(Math.random() * arr.length)] + ".png",
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

  router.post("/get_token", function (req, res, next) {

    let number =



      jwt.sign(req.body, key, {
        expiresIn: 15
      }, function (err, token) {

        console.log(token);

        res.send({
          token: token
        });
      })

  })


  router.post("/user_info", function (req, res, next) {

    console.log(req.body);

    let role = req.body.role;

    if(role == "admin" || role == "superadmin") {
      role = "teacher";
    }
    
    db.collection(role).find({
      id: Number(req.body.number),
      password: Number(req.body.pass),
      role: req.body.role,
    }).toArray(function (err, result) {
      console.log(result);
      res.send(result);
    })

  })

  router.post("/user_infos", function (req, res, next) {

    let role = req.body.role;

    if(role == "admin" || role == "superadmin") {
      role = "teacher";
    }

    db.collection(role).find({
      _id: Number(req.body._id),
    }).toArray(function (err, result) {
      res.send(result);

    })

  })

  router.get("/home_course", function (req, res, next) {


    db.collection("new_major").find({

    }).project({
      _id: 1,
    }).toArray(function (err, result) {


      let arr = [];


      for (let i = 0; i < result.length; i++) {


        let first_level_arr = result;

        db.collection("course").aggregate([{
            $match: {
              course_first: first_level_arr[i]._id.first_level,

            }
          },
          {
            $sort: {
              end_date: -1,
              start_date: -1,

            }
          },
          {
            $limit: 9,
          },
          {
            $lookup: {
              from: "teacher",


              let: {
                teacher_id: "$teacher_id",
              },
              pipeline: [{
                  $match: {
                    $expr: {
                      $eq: ["$_id", "$$teacher_id"]
                    }
                  }
                },
                {
                  $project: {
                    _id: 0,
                    school_id: 1,
                  }
                },
                {
                  $lookup: {
                    from: "fetch_schools_new",
                    localField: "school_id",
                    foreignField: "_id",
                    as: "school"
                  }
                }
              ],
              as: "teacher"

            }
          },

        ], function (err, cursor) {

          cursor.toArray(function (err, result) {

            let over_3 = result[0].chapter_info[0].lessons;
            
            let first_lesson, others_lesson;

            if(over_3.length < 5) {
              first_lesson = {
                title: '',
                time: '',
              }
              others_lesson = [
                {
                  title: '',time: '',
                },
                {
                  title: '', time: '',
                },
                {
                  title: '', time: "",
                }
              ]
              
            } else {

              first_lesson = {
                title: result[0].chapter_info[0].lessons[0].title,
                time: '6\'8"',
              }

              others_lesson = [{
                title: result[0].chapter_info[0].lessons[1].title,
                time: '6\'8"',
              }, {
                title: result[0].chapter_info[0].lessons[2].title,
                time: '6\'8"',
              }, {
                title: result[0].chapter_info[0].lessons[3].title,
                time: '6\'8"',
              }]
            }

            let obj = {
              top_level: first_level_arr[i]._id.first_level,
              title_big_big: "localhost:20020/static/images/home_title_big_big/" + (i + 1) + ".png",
              big_course: {
                _id: result[0]._id,
                name: result[0].course_name,
                first_lesson: first_lesson,
                others_lesson: others_lesson
              },
              course_list: [{
                  _id: result[1]._id,
                  name: result[1].course_name,
                  school: result[1].teacher[0].school[0].name,
                  people: result[1].study_people.length,
                  title_bg: result[1].course_bg
                },
                {
                  _id: result[2]._id,
                  name: result[2].course_name,
                  school: result[2].teacher[0].school[0].name,
                  people: result[2].study_people.length,
                  title_bg: result[2].course_bg
                },
                {
                  _id: result[3]._id,
                  name: result[3].course_name,
                  school: result[3].teacher[0].school[0].name,
                  people: result[3].study_people.length,
                  title_bg: result[3].course_bg
                },
                {
                  _id: result[4]._id,
                  name: result[4].course_name,
                  school: result[4].teacher[0].school[0].name,
                  people: result[4].study_people.length,
                  title_bg: result[4].course_bg
                },
                {
                  _id: result[5]._id,
                  name: result[5].course_name,
                  school: result[5].teacher[0].school[0].name,
                  people: result[5].study_people.length,
                  title_bg: result[5].course_bg
                },
                {
                  _id: result[6]._id,
                  name: result[6].course_name,
                  school: result[6].teacher[0].school[0].name,
                  people: result[6].study_people.length,
                  title_bg: result[6].course_bg
                },
                {
                  _id: result[7]._id,
                  name: result[7].course_name,
                  school: result[7].teacher[0].school[0].name,
                  people: result[7].study_people.length,
                  title_bg: result[7].course_bg
                },
                {
                  _id: result[8]._id,
                  name: result[8].course_name,
                  school: result[8].teacher[0].school[0].name,
                  people: result[8].study_people.length,
                  title_bg: result[8].course_bg
                },
              ]
            }

            arr.push(obj)

            // console.log(arr, "第" + i + "次数")

            if (i === 11) {
              res.send(arr)

            }

          })




        })

      }




      // console.log(arr)






    })

  })


  router.get("/home_categories", function (req, res, next) {






    db.collection("new_major").aggregate([{
        $project: {
          _id: 0,
          first_level: "$_id.first_level",
        }
      }], function (err, cursor) {




        cursor.toArray(function (err, result) {
          result.unshift({
            "first_level": "示范课程"
          }, )
          res.send(result)
        })

        // cursor.toArray(function (err, result) {
        //   res.send(result)

        // })



      }

    )

  });




})

module.exports = router;