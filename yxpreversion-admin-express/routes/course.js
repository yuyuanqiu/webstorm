const formidable = require('formidable');
const fs = require('fs');
const path = require('path');


var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017';
const dbName = 'misscourse';

const client = new MongoClient(url);

client.connect(function (err, client) {

  const db = client.db(dbName);

  router.post('/get_course_info', function (req, res, next) {

    let _id = req.body._id;

    db.collection("course").aggregate([{
        $match: {
          _id: _id,
        }
      },
      {
        $lookup: {
          from: "teacher",
          let: {
            teacher_id: "$teacher_id"
          },
          pipeline: [{
              $match: {
                $expr: {
                  $eq: ["$_id", "$$teacher_id"]
                }
              },

            },
            {
              $lookup: {
                from: "fetch_schools_new",
                localField: "school_id",
                foreignField: "_id",
                as: "school_info"
              },

            },

            {
              $replaceRoot: {
                newRoot: {
                  $mergeObjects: [{
                    $arrayElemAt: ["$school_info", 0]
                  }, "$$ROOT"]
                }
              }
            },

            {
              $project: {
                _id: 1,
                bigLogo: 1,
                avatar: 1,
                school_id: 1,
                teacher_name: 1,
                teacher_job: 1,
                name: 1
              }
            },
          ],
          as: "teacher_info"
        }
      }
    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)
      })
    })



  })


  router.post("/update_people", function (req, res, next) {

    db.collection("course").update({
        _id: req.body._id,
      },

      {
        $addToSet: {
          study_people: req.body.user_id
        }
      },
      function (err, result) {
        res.send(result);
      }
    )


  })


  router.post("/update_pingfen", function (req, res, next) {

    db.collection("course").update({
      _id: req.body._id,
    }, {

    })
  })



  // 获取文章下的评论和回复
  router.post('/course_reply', function (req, res, next) {

    let skip_count = req.body.click_loading_more;

    db.collection('note').aggregate([{
        "$match": {
          root_node: req.body.coursename
        }
      },
      {
        $sort: {
          publish_time: -1,
        }
      },
      // {
      //   $skip: skip_count
      // },
      {
        $limit: 5,
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
                avatar: 1,
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
                            avatar: 1,
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
                      avatar: 1,
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
                      avatar: 1,
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


  // 视频信息获取

  router.post("/video_info", function (req, res, next) {

    db.collection("course").find({
      _id: req.body.course_id
    }).toArray(function (err, result) {

      res.send(result);
    })

  })


  // 首页随机学校
  router.get("/home_random_schools", function (req, res, next) {

    db.collection("fetch_schools_new").find({}).limit(6).toArray(function (err, result) {

      res.send(result);
    })

  })

  // 所有入驻学校
  router.get("/all_schools", function (req, res, next) {

    db.collection("fetch_schools_new").find({}).toArray(function (err, result) {

      res.send(result);
    })

  })

  // 学校标志获取

  router.post("/school_title", function (req, res, next) {

    console.log(req.body)
    db.collection("fetch_schools_new").find({
      _id: ObjectId(req.body.school_id)
    }).toArray(function (err, result) {

      res.send(result);
    })

  })


  // 获取所属学校课程
  router.post("/school_course", function (req, res, next) {


    let school_id = ObjectId(req.body.school_id);

    let skip = req.body.skip * 5;

    db.collection("teacher").aggregate([{
        $match: {
          school_id: school_id,
        }
      },

      {
        $lookup: {
          from: "course",


          let: {
            teacher_id: "$_id",
          },
          pipeline: [{
              $match: {
                $expr: {
                  $eq: ["$teacher_id", "$$teacher_id"]
                }
              }
            },
            {
              $project: {
                // chapter_info: 0,
                course_name: 1,

                course_id: "$_id",
                study_people: 1,
                start_date: 1,
                end_date: 1,
                course_bg: 1,
                _id: 0,
              }
            }
          ],
          as: "course"

        }
      },

      {
        $unwind: "$course"
      },

      {
        $skip: skip
      },
      {
        $limit: 5,
      },

    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)

      })




    })

  })

  // 总课程数
  router.post("/course_count", function (req, res, next) {


    let school_id = ObjectId(req.body.school_id);


    db.collection("teacher").aggregate([{
        $match: {
          school_id: school_id,
        }
      },

      {
        $lookup: {
          from: "course",


          let: {
            teacher_id: "$_id",
          },
          pipeline: [{
              $match: {
                $expr: {
                  $eq: ["$teacher_id", "$$teacher_id"]
                }
              }
            },
            {
              $project: {
                // chapter_info: 0,
                course_name: 1,

                course_id: "$_id",
                study_people: 1,
                start_date: 1,
                end_date: 1,
                course_bg: 1,
                _id: 0,
              }
            }
          ],
          as: "course"

        }
      },

      {
        $unwind: "$course"
      },


    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)

      })




    })

  })


  // 老师列表
  router.post("/teacher_count", function (req, res, next) {


    let school_id = ObjectId(req.body.school_id);

    let skip = req.body.skip * 5;


    db.collection("teacher").aggregate([{
        $match: {
          school_id: school_id,
        }
      },

      {
        $skip: skip
      },
      {
        $limit: 5
      }

    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)

      })




    })

  })


  // 老师信息页 头部
  router.post("/teacher_page", function (req, res, next) {

    db.collection("teacher").aggregate([{
        $match: {
          _id: req.body.teacher_id,
        }
      },
      {
        $lookup: {
          from: "fetch_schools_new",
          localField: "school_id",
          foreignField: "_id",
          as: "school"
        }
      },
      {
        $unwind: "$school"
      }
    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result);
      })
    })
  })


  // 获取教师课程
  router.post("/teacher_course", function (req, res, next) {




    db.collection("course").aggregate([{
        $match: {
          teacher_id: req.body.teacher_id,
        }
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
            // {
            //   $project: {
            //     // chapter_info: 0,
            //     course_name: 1,

            //     study_people: 1,
            //     start_date: 1,
            //     end_date: 1,
            //     course_bg: 1,
            //     _id: 0,
            //   }
            // }
          ],
          as: "teacher"

        }
      },

      {
        $unwind: "$teacher"
      },


    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)

      })




    })

  })

  // 一级课程 轮播图
  router.post("/course_first", function (req, res, next) {

    let categories = req.body.category;
    if (categories == "示范课程") {

      db.collection("course").aggregate([{
        $match: {
          course_is_jingpin: true
        }
      }, {
        $addFields: {
          "people_count": {
            "$size": "$study_people"
          }
        }
      }, {
        $sort: {
          people_count: -1
        }
      }, {
        $limit: 5
      }, {
        $project: {
          _id: 1,
          big_pic: 1,
          course_name: 1,
        }
      }], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })
    } else {

      db.collection("course").aggregate([{
        $match: {
          course_first: categories
        }
      }, {
        $addFields: {
          "people_count": {
            "$size": "$study_people"
          }
        }
      }, {
        $sort: {
          people_count: -1
        }
      }, {
        $limit: 5
      }, {
        $project: {
          _id: 1,
          big_pic: 1,
          course_name: 1,
        }
      }], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })

    }


  })

  // 最新好课推荐

  router.post("/course_new", function (req, res, next) {

    let categories = req.body.category;
    if (categories == "示范课程") {


      db.collection("course").aggregate([{
          $match: {
            course_is_jingpin: true
          }
        }, {
          $sort: {
            start_date: -1
          }
        }, {
          $limit: 5
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
                    $eq: ["$_id", "$$teacher_id"],
                  }
                }
              },
              {
                $lookup: {
                  from: "fetch_schools_new",
                  localField: "school_id",
                  foreignField: "_id",
                  as: "school"
                }
              },
              {
                $unwind: {
                  path: "$school"
                }
              },
              // {
              //   $project: {

              //   }
              // }
            ],
            as: "teacher"
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [{
                $arrayElemAt: ["$teacher", 0]
              }, "$$ROOT"]
            }
          }
        },

        {
          $project: {
            _id: 1,
            icon: "$course_bg",
            name: "$course_name",
            start_date: 1,
            end_date: 1,
            "people": {
              "$size": "$study_people"
            },
            school: 1,
            teacher_name: 1,

          }
        }
      ], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })

    } else {

      db.collection("course").aggregate([{
          $match: {
            course_first: categories
          }
        }, {
          $sort: {
            start_date: -1
          }
        }, {
          $limit: 5
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
                    $eq: ["$_id", "$$teacher_id"],
                  }
                }
              },
              {
                $lookup: {
                  from: "fetch_schools_new",
                  localField: "school_id",
                  foreignField: "_id",
                  as: "school"
                }
              },
              {
                $unwind: {
                  path: "$school"
                }
              },
              // {
              //   $project: {

              //   }
              // }
            ],
            as: "teacher"
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [{
                $arrayElemAt: ["$teacher", 0]
              }, "$$ROOT"]
            }
          }
        },

        {
          $project: {
            _id: 1,
            icon: "$course_bg",
            name: "$course_name",
            start_date: 1,
            end_date: 1,
            "people": {
              "$size": "$study_people"
            },
            school: 1,
            teacher_name: 1,

          }
        }
      ], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })
    }


  })

  // 全部课程

  router.post("/course_all", function (req, res, next) {

    let categories = req.body.category;
    let skip = req.body.skip * 10;

    if (categories == "示范课程") {


      db.collection("course").aggregate([{
          $match: {
            course_is_jingpin: true
          }
        }, {
          $sort: {
            start_date: -1
          }
        },
        {
          $project: {
            count: {
              $add: 1
            },
            _id: 1,
            teacher_id: 1,
            course_name: 1,
            course_bg: 1,
            start_date: 1,
            end_date: 1,
            study_people: 1,
          }
        },
        {
          $skip: skip
        },
        {
          $limit: 10
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
                    $eq: ["$_id", "$$teacher_id"],
                  }
                }
              },
              {
                $lookup: {
                  from: "fetch_schools_new",
                  localField: "school_id",
                  foreignField: "_id",
                  as: "school"
                }
              },
              {
                $unwind: {
                  path: "$school"
                }
              },
              // {
              //   $project: {

              //   }
              // }
            ],
            as: "teacher"
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [{
                $arrayElemAt: ["$teacher", 0]
              }, "$$ROOT"]
            }
          }
        },

        {
          $project: {
            _id: 1,
            icon: "$course_bg",
            name: "$course_name",
            start_date: 1,
            end_date: 1,
            "people": {
              "$size": "$study_people"
            },
            school: 1,
            teacher_name: 1,

          }
        }
      ], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })

    } else {

      db.collection("course").aggregate([{
          $match: {
            course_first: categories
          }
        }, {
          $sort: {
            start_date: -1
          }
        },
        {
          $project: {
            count: {
              $add: 1
            },
            _id: 1,
            teacher_id: 1,
            course_name: 1,
            course_bg: 1,
            start_date: 1,
            end_date: 1,
            study_people: 1,
          }
        },
        {
          $skip: skip
        },
        {
          $limit: 10
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
                    $eq: ["$_id", "$$teacher_id"],
                  }
                }
              },
              {
                $lookup: {
                  from: "fetch_schools_new",
                  localField: "school_id",
                  foreignField: "_id",
                  as: "school"
                }
              },
              {
                $unwind: {
                  path: "$school"
                }
              },
              // {
              //   $project: {

              //   }
              // }
            ],
            as: "teacher"
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [{
                $arrayElemAt: ["$teacher", 0]
              }, "$$ROOT"]
            }
          }
        },

        {
          $project: {
            _id: 1,
            icon: "$course_bg",
            name: "$course_name",
            start_date: 1,
            end_date: 1,
            "people": {
              "$size": "$study_people"
            },
            school: 1,
            teacher_name: 1,

          }
        }
      ], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })
    }


  })

  // 课程页数
  router.post("/course_pagess", function (req, res, next) {

    let categories = req.body.category;

    if (categories == "示范课程") {


      db.collection("course").aggregate([{
          $match: {
            course_is_jingpin: true
          }
        },

        {
          $project: {
            count: {
              $add: 1
            }
          }
        },
        {
          $group: {
            _id: null,
            number: {
              $sum: "$count"
            }
          }
        }



      ], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })

    } else {

      db.collection("course").aggregate([{
          $match: {
            course_first: categories
          }
        },

        {
          $project: {
            count: {
              $add: 1
            }
          }
        },
        {
          $group: {
            _id: null,
            number: {
              $sum: "$count"
            }
          }
        }



      ], function (err, cursor) {

        cursor.toArray(function (err, result) {

          res.send(result)
        })
      })
    }
  })

  // 获取分类信息
  router.post("/categories", function (req, res, next) {

    let category = req.body.category;
    console.log(category)

    if (category === "示范课程") {

      db.collection("new_major").aggregate([{
          $project: {
            _id: 0,
            first_level: "$_id.first_level",
          }
        }], function (err, cursor) {

          cursor.toArray(function (err, result) {
            res.send(result)
          })
        }

      )

    } else {
      db.collection("new_major").aggregate([

          {
            $project: {
              _id: 0,
              first_level: "$_id.first_level",
              second_level: 1,
            }
          },
          {
            $match: {
              first_level: category
            }
          },
          {
            $project: {
              _id: 0,
              first_level: "$second_level",
            }
          },
          {
            $unwind: "$first_level"
          }
        ], function (err, cursor) {

          cursor.toArray(function (err, result) {
            res.send(result)
          })
        }

      )
    }


  });


  // 首页轮播图
  router.get("/home_lunbo", function (req, res, next) {

    db.collection("course").aggregate([{
        $project: {
          "count": {
            "$size": "$study_people"
          },
          big_pic: 1,
          _id: 1,
        }
      },
      {
        $sort: {
          count: -1,
        }
      },
      {
        $limit: 4
      }
    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result);
      })
    })
  })

  // 获取所有课程

  router.get("/for_search", function (req, res, next) {

    db.collection("course").aggregate([{
        $project: {
          _id: 1,
          course_name: 1,
          teacher_id: 1,
        }
      },
      {
        $lookup: {
          from: "teacher",
          localField: "teacher_id",
          foreignField: "_id",
          as: "teacher",
        }
      },
      {
        $unwind: "$teacher"
      }
    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)
      })
    })
  })


  router.post("/update_total_store", function (req, res, next) {
    console.log(req.body);

    db.collection("course").update({
        _id: req.body._id,
      },

      {
        $set: {
          "chapter_total_score.score": req.body.change_store.score,
          "chapter_total_score.people": req.body.change_store.people,
        }
      },
      function (err, result) {
        res.send(result);
      }
    )
  })



  // 视频上传
  router.post('/update_video', (req, res) => {

    // console.log(req)
    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 编码
    form.keepExtensions = true // 保留扩展名
    form.uploadDir = './public/videos/'; //文件存储路径 最后要注意加 '/' 否则会被存在public下
    ;
    form.parse(req, (err, fileds, files) => { // 解析 formData 数据

      console.log(files, "files")


      // 将文件名返回给前端
      res.send(path.basename(files.file.path))

    })

  })

  // 课程图片上传
  router.post('/update_course_bg', (req, res) => {

    // console.log(req)
    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 编码
    form.keepExtensions = true // 保留扩展名
    form.uploadDir = './public/images/course_cover/'; //文件存储路径 最后要注意加 '/' 否则会被存在public下
    ;
    form.parse(req, (err, fileds, files) => { // 解析 formData 数据

      console.log(files, "files")


      // 将文件名返回给前端
      res.send(path.basename(files.file.path))

    })

  })

  // 提交课程
  router.post("/submit_course", function (req, res, next) {

    console.log(req.body.formName);

    let course = req.body.formName;

    course.apply_date = new Date(Date.parse(course.apply_date));

    course.start_date = new Date(Date.parse(course.start_date));

    course.end_date = new Date(Date.parse(course.end_date));



    db.collection('course').insertOne(course, function (err, r) {
      res.send(r)


    })
  })

  // 课程审核
  router.post("/course_audits", function (req, res, next) {


    let school_id = ObjectId(req.body.school_id);


    db.collection("teacher").aggregate([{
        $match: {
          school_id: school_id,
        }
      },

      {
        $lookup: {
          from: "course",


          let: {
            teacher_id: "$_id",
          },
          pipeline: [{
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ["$teacher_id", "$$teacher_id"],
                    },
                    {
                      $or: [
                        {
                          $eq: ["$apply_status", "申请"],
                        },
                        {
                          $eq: ["$apply_status", "待审核"],
                        }
                      ]
                    }
                  
                  ]
                }
              }
            },
            {
              $project: {
                // chapter_info: 0,
                course_name: 1,

                course_id: "$_id",
                _id: 0,



                apply_comment: 1,
                apply_date: 1,
                apply_status: 1,
                course_des: 1,
                course_first: 1,
                course_is_jingpin: 1,
                course_name: 1,
                course_second: 1,
                course_status: 1,
                end_date: 1,
                id: 1,
                start_date: 1,
              }
            }
          ],
          as: "course"

        }
      },

      {
        $unwind: "$course"
      },



    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result)

      })




    })

  })


  // 课程审核 === 提交审核
  router.post("/course_audit_submit", function(req, res, next) {

    db.collection("course").update({
      _id: req.body._id
    }, {
      $set: {
        apply_status: req.body.apply_status,
        apply_comment: req.body.apply_comment,
      }
    }, function(err, result) {

      res.send(result)
    })
  })

  // 更新开课资料
  router.post("/add_course_date", function(req, res, next) {

    db.collection("course").update({
      _id: req.body._id,
    }, {
      $set: {
        reference: req.body.reference,
        start_date: new Date(Date.parse(req.body.start_date)),
        end_date: new Date(Date.parse(req.body.end_date)),
        course_plan: req.body.course_plan
      }
    }, function(err, result) {
      res.send(result);
    })
  })

  // 更新小节
  router.post('/update_xiaojie', function (req, res, next) {

    db.collection("course").update({
      _id: req.body._id,

    }, {
      $set: {
        chapter_info: req.body.chapter_info
      }
    }, function (err, result) {
      res.send(result);
    })
  })

  // 更新章节
  // router.post('/update_zhangjie', function(req, res, next) {

  //   db.collection("course").update({
  //     _id: req.body._id,

  //   }, {
  //     $set: {
  //       chapter_info: req.body.chapter_info
  //     }
  //   }, function(err, result) {
  //     res.send(result);
  //   })
  // })

  // 分类整理
  router.get('/fenlei_zhengli', function (req, res, next) {

    db.collection("new_major").find({}).toArray(function (err, result) {
      let arr = [];

      for (let i = 0; i < result.length; i++) {
        let obj = {};

        obj.value = result[i]._id.first_level;
        obj.label = obj.value;

        let sub_arr = [];

        for (let j = 0; j < result[i].second_level.length; j++) {
          let sub_obj = {};

          sub_obj.value = result[i].second_level[j]
          sub_obj.label = sub_obj.value;

          sub_arr.push(sub_obj);

        }

        obj.children = sub_arr;

        arr.push(obj);

      }

      res.send(arr)


    })
  })


})

module.exports = router;