const common = require("../common")

var express = require('express');
var router = express.Router();

var article_content = common.article_content;

var article_content_all = []

article_content.forEach(function(value, index, arr) {
  article_content_all.push({
    content: value
  })
})

var arr = [1, 2, 3]

router.get('/', function (req, res, next) {
  res.send(arr);
  res.download('../public/favicon.ico')
});

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err

  var db = client.db('person')

  db.collection('courses').find().toArray(function (err, result) {
    if (err) throw err

    // console.log(result)

    router.get('/s', function (req, res, next) {
      res.send(result);
      console.log(  result instanceof Array, "jljfsdl")

    }); 
  })

      // db.collection('find').insertMany(article_content_all); 

      db.collection('find').find().toArray(function (err, result) {
        if (err) throw err
    
        // console.log(result)
    
        router.get('/a', function (req, res, next) {
          res.send(result);
          // console.log(  result instanceof Array, "jljfsdl")
    
        }); 
      })




})





module.exports = router;