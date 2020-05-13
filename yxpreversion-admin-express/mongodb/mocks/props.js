const uuid = require("../utils/uuid")
const get_date = require("../utils/get_date")

function get_student_data(length) {
  let shcool_data = [];

  for (let i = 0; i < length; i++) {

    let _id = "props_" + uuid.uuid();
    let id = Math.floor(Math.random() * 100000000 + 600000000)
    let props_name = "特权" + i;
    let props_type = ["通用", "课程专属"][Math.floor(Math.random() * 2)];
    let props_price = Math.floor(Math.random() * 200);
    let publish_date = get_date.get_date();
    let props_des = props_name + "描述";
    let indate = Math.floor(Math.random() * 30);

    let single_school_data = {
      _id: _id,
      id: id,
      props_name: props_name,
      props_type: props_type,
      props_price: props_price,
      publish_date: publish_date,
      props_des: props_des,
      indate: indate,

    }

    shcool_data.push(single_school_data);
  }

  return shcool_data;
}


function success_teacher() {
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'misscourse';

  // Create a new MongoClient
  const client = new MongoClient(url);



  // Use connect method to connect to the Server


  client.connect(function (err) {
    assert.equal(null, err);

    const db = client.db(dbName);


    const teachers = db.collection("props");
    let teacher_data = get_student_data(36);
    teachers.insertMany(teacher_data,
      function (err, result) {
        client.close();
        console.log(result.insertedCount)
      });

  })




}

success_teacher()

module.exports = {
  success_teacher,
}