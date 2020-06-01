const uuid = require("../utils/uuid")

function get_student_data(length, schools_id) {
  let shcool_data = [];

  for (let i = 0; i < length; i++) {

    let _id = "student_" + uuid.uuid();
    let id = Math.floor(Math.random() * 100000000 + 700000000)
    let student_name = "学生" + i;
    let student_sex = ["男", "女"][Math.floor(Math.random() * 2)];
    let student_age = Math.floor(((Math.random() * 15) + 15));
    let avatar = "static/images/avatar/student/avatar_s_" + 0 + ".jpg";
    let student_des = student_name + "学生描述"
    let student_bg = "bg_s" + i + ".jpg";
    let school_id = schools_id[Math.floor(Math.random() * schools_id.length)]._id;
    let class_name = "班级" + Math.ceil(Math.random() * 20);
    let student_major = "专业" + Math.ceil(Math.random() * 6);
    let student_point = Math.floor(Math.random() * 500)

    let single_school_data = {
      _id: _id,
      id: id,
      student_name: student_name,
      student_sex: student_sex,
      student_age: student_age,
      avatar: avatar,
      student_des: student_des,
      student_bg: student_bg,
      school_id: school_id,
      class_name: class_name,
      student_major: student_major,
      student_point: student_point,
      password: Math.floor(Math.random()  * 10000000),
      role: "student"
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


    const school = db.collection("fetch_schools_new");
    // 查找学校id
    school.find({}).project({
      "_id": 1,
    }).toArray(function (err, results) {
      // console.log(results)
      let school_id = results;
      let teacher_data = get_student_data(10000, school_id);
      // console.log(teachers_name.length)
      const teachers = db.collection("student");
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