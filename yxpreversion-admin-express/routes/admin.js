/**
 * 此路由为admin路由
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


  // 后台课程状态
  router.post("/course_audit", function (req, res, next) {

    let teacher_id = req.body.teacher_id;

    db.collection("course").find({
      teacher_id: teacher_id,
    }).project({
      _id: 1,
      id: 1,
      apply_date: 1,
      apply_comment: 1,
      apply_status: 1,
      course_bg: 1,
      course_name: 1

    }).toArray(function (err, result) {

      res.send(result);
    })

  })

  // 课程更新
  router.post("/course_update", function (req, res, next) {

    let teacher_id = req.body.teacher_id;

    db.collection("course").aggregate([{
        $match: {
          teacher_id: teacher_id,
          apply_status: "审核通过"
        }
      },
      {
        "$lookup": {
          "from": "teacher",
          let: {
            localField: "$teacher_id",
          },
          "pipeline": [
            
            {
              $match: {
                $expr: {
                  $eq: ["$$localField", "$_id"]
                }
              },

            },

            
          ],
          // "localField": "publisher_id", // field in the orders collection
          // "foreignField": "_id", // field in the items collection
          "as": "publisher"
        }
      },
      {
        $sort: {
          start_date: -1
        }
      }

    ], function (err, cursor) {

      cursor.toArray(function (err, result) {

        res.send(result);
      })
    })



  })




})

module.exports = router;