var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'misscourse';

const client = new MongoClient(url);

client.connect(function (err, client) {

  const db = client.db(dbName);

  createCompoundIndex(db, "article", {
    "_id": 1,
    
  })

  createCompoundIndex(db, "course", {
    "_id": 1,
    
  })

  createCompoundIndex(db, "note", {
    "_id" : 1,
    
  })




})


function createCompoundIndex(db, col, indexs_obj) {
  // Get the documents collection



  const collection = db.collection(col);

  collection.createIndex(indexs_obj, function (err, result) {
    console.log(result);
    client.close()
  });
};


console.log("HhH")

module.exports = router; 
