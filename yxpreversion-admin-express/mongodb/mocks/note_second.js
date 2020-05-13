const uuid = require("../utils/uuid")
const get_date = require("../utils/get_date")

function article_content_100(id, length) {
  let origin = '';
  for (let i = 0; i < length; i++) {
    origin += id;
  }

  return origin;
}

function get_student_data(length, teachers_id, students_id, articles_id, courses_id, note_id) {
  let shcool_data = [];

  for (let i = 0; i < length; i++) {

    // let _id = "" + Math.floor((Math.random() * 10000000000) + 60000000000);
    let _id = "note_" + uuid.uuid();
    let id = Math.floor(Math.random() * 100000000 + 500000000)
    let note_content = article_content_100("帖子内容：" + _id, 10)
    // let publisher_id = (Math.floor(Math.random() * 20) % 2 == 0) ? teachers_id[Math.floor(Math.random() * teachers_id.length)]._id : students_id[Math.floor(Math.random() * students_id.length)]._id;
    let publisher_id = students_id[Math.floor(Math.random() * students_id.length)]._id;
    let publish_time = get_date.get_date();

    // let root_arr = [articles_id[Math.floor(Math.random() * articles_id.length)]._id, courses_id[Math.floor(Math.random() * courses_id.length)]._id]
    // 节点父节点： 课程评论 | 文章评论 | 讨论帖回复（后加的）
    // let root_node = root_arr[Math.floor(Math.random() * root_arr.length)]

    let parent_node = note_id[Math.floor(Math.random() * note_id.length)]._id

    // note.js必须设置2次才能模拟情况
    // 第一次：parent_node: null, root_node: root_node
    // 第二次: parent_node: parent_node, root_node: parent_node

    let parent_node2 = note_id[Math.floor(Math.random() * note_id.length)]._id


    let single_school_data = {
      _id: (_id),
      id: id,
      note_content: note_content,
      publisher_id: publisher_id,
      publish_time: publish_time,
      parent_node: parent_node2,
      root_node: parent_node,
      zan: Math.floor(Math.random() * 20)

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


    const teacher = db.collection("teacher");
    // 查找学校id
    teacher.find({}).project({
      "_id": 1,
    }).toArray(function (err, results) {

      let teacher_id = results;


      const student = db.collection("student");
      student.find({}).project({
        "_id": 1
      }).toArray(function (err, res) {

        let student_id = res;

        const course = db.collection("course");
        course.find({}).project({
          "_id": 1
        }).toArray(function (err, res) {

          let course_id = res;

          const article = db.collection("article");
          article.find({}).project({
            "_id": 1
          }).toArray(function (err, res) {

            let article_id = res;

            db.collection("note").find({}).project({
              "_id": 1
            }).toArray(function (err, result) {

              let note_id = result;

              // console.log(results)
              let teacher_data = get_student_data(200000, teacher_id, student_id, article_id, course_id, note_id);
              // console.log(teachers_name.length)
              const teachers = db.collection("note");
              console.log(teacher_data.length)

              teachers.insertMany(teacher_data,
                function (err, result) {
                  // console.log(err)
                  console.log(result.insertedCount)
                  client.close();
                });


            })



          })
        })

      })


      // console.log("teacher_data" , teacher_data)
    })

  })




}

success_teacher()

module.exports = {
  success_teacher,
}