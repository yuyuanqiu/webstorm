var express = require('express');
var router = express.Router();

const article = require("../api/article");

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'misscourse';

const client = new MongoClient(url);

client.connect(function (err, client) {

  const db = client.db(dbName);



  // 论坛标题分类
  article.get_article_category(db, router);





  /// 测试用路由
  router.post('/get_article', function (req, res, next) {
    // console.log(req)

    db.collection("one_article_content").insert({
      content: req.body.article_content
    }, (function (err, result) {
      res.send(result)
    }))
  })



  // 论坛文章基本信息概览
  router.get('/get_second_level_article', function (req, res, next) {
    // console.log(req.query)
    let count = parseInt(req.query.count) * 10;
    // console.log("count", count)


    // let db_find = db.collection("article").find({
    //   "course_first": req.query.course_first,
    //   "course_second": req.query.course_second
    // })

    // db_find.sort(db_sort_1)

    // res.send(db_find)

    let db_sort_1 = {
      publish_time: -1
    }

    let db_sort_2 = {
      student_name: -1
    }

    db.collection('article').aggregate([{
        "$match": {
          "course_first": req.query.course_first,
          "course_second": req.query.course_second
        }
      },
      {
        $sort: {
          publish_time: -1
        }
      },
      {
        $skip: count
      },
      {
        // 这一管道的值会传入到下一管道
        // 当下一管道使用该值时，必须设定
        "$project": {
          "_id": 1,
          "course": 1,
          publisher_id: 1,
          publish_time: 1,
          article_title: 1,
          zan: 1,
          read: 1,
          teacher_or_student: {
            "$switch": {
              "branches": [{
                  "case": {
                    $regexMatch: {
                      input: "$publisher_id",
                      regex: /^teacher/
                    }
                  },
                  "then": "teacher"
                },
                {
                  "case": {
                    $regexMatch: {
                      input: "$publisher_id",
                      regex: /^student/
                    }
                  },
                  "then": "student"
                }
              ],
            }
          }
        }
      },
      {
        "$lookup": {
          "from": "student",
          let: {
            localField: "$publisher_id",
          },
          "pipeline": [{
              $match: {
                $expr: {
                  $eq: ["$$localField", "$_id"]
                }
              },

            },

            {

              $project: {
                "_id": 0,
                "student_name": 1,
              }
            }
          ],
          // "localField": "publisher_id", // field in the orders collection
          // "foreignField": "_id", // field in the items collection
          "as": "publisher"
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{
              $arrayElemAt: ["$publisher", 0]
            }, "$$ROOT"]
          }
        }
      },
      {
        $limit: 10
      },
      {
        $project: {
          // teacher_or_student: 0,
          publisher: 0,
          _id: 1,
          publisher_id: 0
        }
      },

    ], function (err, cursor) {
      cursor.toArray(function (err, result) {
        res.send(result)
        // console.log(result)
      })
    })



  });

  // 获取文章信息
  router.get('/article/:article_id', function (req, res, next) {
    console.log(req.params)

    db.collection("article").find({
      _id: req.params.article_id
    }).project({
      _id: 0,
      article_content: 1,
      "article_title": 1,
    }).toArray(function (err, result) {
      res.send(result)
    })
  })

  // 文章详情及评论区

  router.get('/article_only/:article_id', function (req, res, next) {
    db.collection('article').aggregate([{
        "$match": {
          _id: req.params.article_id
        }
      },

      // 查找发布者信息
      {
        "$lookup": {
          "from": "student",
          let: {
            localField: "$publisher_id",
          },
          "pipeline": [{
              $match: {
                $expr: {
                  $eq: ["$$localField", "$_id"]
                }
              },

            },
            {
              $project: {
                _id: 1,
                student_name: 1,
                student_img: 1,
                student_point: 1
              }
            }
          ],
          // "localField": "publisher_id", // field in the orders collection
          // "foreignField": "_id", // field in the items collection
          "as": "publisher"
        }
      },
      // 将发布者信息数组改为对象
      {
        $unwind: {
          path: "$publisher"
        }
      },

      {
        $project: {
          _id: 1,
          article_title: 1,
          article_content: 1,
          publish_time: 1,
          publisher_id: 1,
          article_score: 1,
          score_arr: 1,
          zan: 1,
          read: 1,
          pingfen: 1,
          publisher: 1
        },
      }
    ], function (err, cursor) {
      cursor.toArray(function (err, result) {
        res.send(result)
        // console.log(result)
      })
    })

  })





  // 获取文章下的评论和回复
  router.get('/article_reply/:article_id', function (req, res, next) {
    db.collection('note').aggregate([{
        "$match": {
          root_node: req.params.article_id
        }
      },
      // 查找帖子发布者信息
      {
        "$lookup": {
          "from": "student",
          let: {
            localField: "$publisher_id",
          },
          "pipeline": [{
              $match: {
                $expr: {
                  $eq: ["$$localField", "$_id"]
                }
              },
            },
            {
              $project: {
                _id: 1,
                student_name: 1,
                student_img: 1,
                student_point: 1,
              }
            }

          ],
          "as": "publisher"
        }
      },
      // 查找2级以下回复帖子信息
      {
        "$lookup": {
          "from": "note",
          let: {
            localField: "$_id",
          },
          "pipeline": [{
              $match: {
                $expr: {
                  $eq: ["$$localField", "$root_node"]
                }
              },
            },
            // 查找被回复者信息
            {
              "$lookup": {
                "from": "note",
                let: {
                  localField: "$parent_node",
                },
                "pipeline": [{
                    $match: {
                      $expr: {
                        $eq: ["$$localField", "$_id"]
                      }
                    },
                  },
                  {
                    "$lookup": {
                      "from": "student",
                      let: {
                        localField: "$publisher_id",
                      },
                      "pipeline": [{
                          $match: {
                            $expr: {
                              $eq: ["$$localField", "$_id"]
                            }
                          },
                        },
                        {
                          $project: {
                            replyed_student_id: "$_id",
                            student_name: 1,
                            student_img: 1,
                            _id: 0,

                          }
                        },


                      ],
                      "as": "reply_stu"
                    }
                  },

                  {
                    $unwind: {
                      path: "$reply_stu"
                    }
                  },

                  {
                    $project: {
                      _id: 0,
                      student_id: "$reply_stu.replyed_student_id",
                      student_name: "$reply_stu.student_name",
                      student_img: 1,
                    }
                  },




                ],
                "as": "parent_reply"
              }
            },
            // 查找学生回复者信息
            {
              "$lookup": {
                "from": "student",
                let: {
                  localField: "$publisher_id",
                },
                "pipeline": [{
                    $match: {
                      $expr: {
                        $eq: ["$$localField", "$_id"]
                      }
                    },
                  },
                  {
                    $project: {
                      _id: 1,
                      student_name: 1,
                      student_img: 1,
                      student_point: 1,
                    }
                  },
                ],
                "as": "publisher"
              }
            },
            {
              $project: {
                publisher_id: 0,
                id: 0,
              }
            },
            {
              $unwind: {
                path: "$publisher"
              }
            },
            {
              $unwind: {
                path: "$parent_reply"
              }
            },
          ],
          "as": "comments"
        },
      },
      {
        $unwind: {
          path: "$publisher"
        }
      },
      {
        $project: {
          publisher_id: 0,
          id: 0,
        }
      }
    ], function (err, cursor) {
      cursor.toArray(function (err, result) {
        res.send(result)
        // console.log(result)
      })
    })



  });

  // 评论上传
  router.post("/reply_update", function (req, res, next) {
    console.log(req.body)
    res.send(req.body)

    db.collection("note").insertOne(req.body)
  })

  // 文章阅读数+1
  router.post("/read_add_one", function (req, res, next) {

    // 字段要看清楚，错一个就不能返回正确的结果


    let _id = req.body.article_id;
    console.log(req.body, _id)
    db.collection("article").findOneAndUpdate({
      _id: _id
    }, {
      $inc: {
        read: 1
      }
    }, function (err, result) {
      // console.log(err)
      // console.log(result)
      res.send(result)
    })


  })

  // 点赞+1
  router.post("/like_add_one", function (req, res, next) {

    // 字段要看清楚，错一个就不能返回正确的结果


    let _id = req.body.article_id;
    // console.log(req, _id)
    db.collection("article").findOneAndUpdate({
      _id: _id
    }, {
      $inc: {
        zan: 1
      }
    }, function (err, result) {
      // console.log(err)
      // console.log(result)
      res.send(result)
    })


  })


  // 文章评分
  router.post("/general_score", function (req, res, next) {

    // 字段要看清楚，错一个就不能返回正确的结果

    let score_obj = {
      user_id: req.body.user_id,
      score: req.body.score,
      date: new Date()
    };



    // 若添加相同对象到数组中，此操作不会进行（实验结果而已）
    let _id = req.body.article_id;
    console.log(_id)
    db.collection("article").update({
      _id: _id
    }, {
      $addToSet: {
        score_arr: score_obj
      }
    }, function (err, result) {
      res.send(result)

    })




  })

  

  /*
  {
    "_id" : ObjectId("5c414a6a0847e00385143003"),
    "date" : "2019-01-18 09",
    "data" : [ 
        {
            "app_platform" : "ios",
            "user" : 3028
        },  d
        {
            "app_platform" : "android",
            "user" : 4472
        }, 
    ]
}


  */



});




/* [
                  ] */









module.exports = router;



/*
{
        "$project": {

          // "article_content": 0,
          // "id": 1,
          "jo": "he"
          /* "teacher_student": {
            "$switch": {
              "branches": [{
                  "case": {
                    $regexMatch: {
                      input: "$publisher_id",
                      regex: /^teacher/
                    }
                  },
                  "then": "teacher"
                },
                {
                  "case": {
                    $regexMatch: {
                      input: "$publisher_id",
                      regex: /^student/
                    }
                  },
                  "then": "student"
                }
              ],
            }
          } 
        }
      }

*/