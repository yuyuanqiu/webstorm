const uuid = require("../utils/uuid")
const get_date = require("../utils/get_date")


function get_course_data(length, teachers_id, students_id, all_major, fetch_content) {

  // console.log(schools_id)
  let data = [];

  for (let i = 0; i < length; i++) {

    // 文章是根据课程来的

    let course_random = Math.floor(Math.random() * all_major.length);

    // let second_random = all_major[course_random].second_level


    let course_first = all_major[course_random].course_first;
    let course_second = all_major[course_random].course_second;
    let course = all_major[course_random].course_name;

    let _id = "article_" + uuid.uuid();

    let id = Math.floor(Math.random() * 100000000 + 100000000)
    let article_title = "文章标题: " + _id;

    let article_content = fetch_content[0].content;
    let publisher_id = students_id[Math.floor(Math.random() * students_id.length)]._id;
    let publish_time = get_date.get_date();
    let article_score = 0;

    let zan = 0;




    let single_school_data = {
      _id: _id,
      id: id,
      article_title: article_title,
      article_content: article_content,
      publisher_id: publisher_id,
      publish_time: publish_time,
      article_score: article_score,
      course_first: course_first,
      course_second: course_second,
      course: course,
      zan: zan,
      read: 0,
      score_arr: []

    }

    data.push(single_school_data);
  }
  // console.log(data)

  return data;
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
    teacher.find({}).project({
      "_id": 1,
    }).toArray(function (err, results) {

      let teacher_id = results;


      const student = db.collection("student");
      student.find({}).project({
        "_id": 1
      }).toArray(function (err, res) {

        let student_id = res;

        db.collection("course").find({}).toArray(function (err, res) {
          let all_major = res;

          db.collection("one_article_content").find({}).toArray(function (err, res) {

            let fetch_content = res


            let teacher_data = get_course_data(20000, teacher_id, student_id, all_major, fetch_content);
            const courses = db.collection("article");
            courses.insertMany(teacher_data,
              function (err, result) {
                console.log(result.insertedCount)
                client.close();
              });
          })



        })



      })

    })



  })

}

success_teacher()

module.exports = {
  success_teacher,
}