var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.send(arr);
});

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err

  var db = client.db('misscourse')

  db.collection('course').find().toArray(function (err, result) {
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