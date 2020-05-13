const uuid = require("../utils/uuid")
const get_date = require("../utils/get_date")


function get_student_data(length, schools_id) {
  let shcool_data = [];

  for (let i = 0; i < length; i++) {

    let _id = "homework_" + uuid.uuid();
    let id = Math.floor(Math.random() * 100000000 + 300000000)
    let homework_content = [];
    let homework_answer = [];
    let homework_analyse = [];
    let teacher_id = schools_id[Math.floor(Math.random() * schools_id.length)]._id;


    let single_school_data = {
      _id: _id,
      id: id,
      homework_content: homework_content,
      homework_answer: homework_answer,
      homework_analyse: homework_analyse,
      teacher_id: teacher_id,
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


    const school = db.collection("teacher");
    // 查找学校id
    school.find({}).project({
      "_id": 1,
    }).toArray(function (err, results) {
      // console.log(results)
      let school_id = results;
      let teacher_data = get_student_data(5000, school_id);
      // console.log(teachers_name.length)
      const teachers = db.collection("homework");
      teachers.insertMany(teacher_data,
        function (err, result) {
          console.log(result.insertedCount)
          client.close();
        });

      // console.log("teacher_data" , teacher_data)
    })

  })




}

success_teacher()

module.exports = {
  success_teacher,
}