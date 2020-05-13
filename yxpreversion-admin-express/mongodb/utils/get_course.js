const axios = require("axios");
const cheerio = require("cheerio");
// 解决爬取的中文乱码
const iconv = require('iconv-lite');

let arr_ = [];

let url = "http://127.0.0.1:20020/yxpreversion-admin-express/mongodb/utils/get_majors.html"
axios.get(url).then(resp => {

  var $ = cheerio.load(resp.data);
  var tr = $("tr");


  for (let i = 1; i < tr.length; i++) {
    let td = tr.eq(i).find("td");
    let first_level = td.eq(1).text().trim();
    let major_name = td.eq(4).text().trim();

    let obj_ = {
      _id: "major-" + require("./uuid").uuid(),
      first_level: first_level,
      major_name: major_name, 
    }

    arr_.push(obj_);


  }
  // console.log(arr_)

  function success_teacher(arr) {
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    const url = 'mongodb://localhost:27017';
    const dbName = 'misscourse';
    const client = new MongoClient(url);
    client.connect(function (err) {
      const db = client.db(dbName);
      const major = db.collection("major");
      major.insertMany(arr,
        function (err, result) {
          console.log(result.insertedCount)
          client.close();
        });
    })
  }

  success_teacher(arr_)



})




