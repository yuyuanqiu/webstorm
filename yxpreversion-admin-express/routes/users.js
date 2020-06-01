
var express = require('express');
var router = express.Router();



var arr = [1, 2, 3]


var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err

  var db = client.db('misscourse')

  db.collection('course').find().toArray(function (err, result) {
    if (err) throw err
    // router.get('/a', function (req, res, next) {
    //   res.send(result);
    //   // console.log(  result instanceof Array, "jljfsdl")

    // });
  })




})





module.exports = router;