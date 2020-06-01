const uuid = require("../utils/uuid")
const get_date = require("../utils/get_date")


function get_chapters(course_name) {

  let outer_length = Math.ceil((Math.random() + 2) * 12);
  let inner_length = Math.ceil((Math.random() + 3) * 3);
  let chapters = [];

  for (let i = 1; i < outer_length; i++) {
    let chapter = {};
    let chapter_id = "第" + i + "章";
    let chapter_title = "第" + i + "章标题在" + course_name + "中";
    let lessons = [];

    for (let j = 1; j < inner_length; j++) {
      let lesson = {};
      let lesson_id = "第" + j + "节";
      let lesson_title = "第" + j + "节标题在" + chapter_id + "中";
      let lesson_video = "/static/videos/video_" + Math.ceil(Math.random() * 24) + ".mp4"
      lesson = {
        id: lesson_id,
        title: lesson_title,
        lesson_video: lesson_video
      }

      lessons.push(lesson);
    }

    chapter = {
      id: chapter_id,
      title: chapter_title,
      lessons: lessons
    }

    chapters.push(chapter);
  }

  return chapters;

}

function get_course_data(length, teachers_id, all_major, students_id) {

  // console.log(schools_id)
  let data = [];

  for (let i = 0; i < length; i++) {

    let course_random = Math.floor(Math.random() * all_major.length);

    let second_random = all_major[course_random].second_level
    let third_random = all_major[course_random].course

    let _id = "course_" + uuid.uuid();
    let id = Math.floor(Math.random() * 100000000 + 200000000)
    let teacher_id = teachers_id[Math.floor(Math.random() * teachers_id.length)]._id;
    let course_name = third_random[Math.floor(Math.random() * third_random.length)]
    let course_des = course_name + "的简介概况";


    let course_bg = "/static/images/course_cover/course_cover_" + Math.ceil(Math.random() * 90) + ".png"
    let apply_status = ["申请", "待审核", "审核通过", "审核未通过"][Math.floor(Math.random() * 4)];
    let apply_comment = "审核未通过的原因";
    let course_status = apply_status === "审核通过" ? ["课程未开始", "课程进行中", "课程已结束"][Math.floor(Math.random() * 3)] : "课程未上线";


    let course_first = all_major[course_random]._id.first_level;
    let course_second = second_random[Math.floor(Math.random() * second_random.length)]

    let reference = ["资料1", "资料2"];



    let start_date = get_date.get_date();

    // 申请日期
    let apply_date = new Date(start_date);
    apply_date.setDate(apply_date.getDate() - Math.floor(Math.random() * 15));

    // 开始日期
    



    let run_week = Math.ceil(Math.random() * 18)

    // 结束日期
    let end_date = new Date(start_date);
    end_date.setDate(end_date.getDate() + run_week * 7);

    // 学时安排
    let course_plan = ["每周1-2小时", "每周2-3小时"][Math.floor(Math.random() * 2)];

    let chapter_info = get_chapters(course_name);
    // let chapter_resource = [];

    // 课程总评分
    let chapter_total_score = {
      score: 0,
      people: 0
    };

    // 课程大图
    let big_pic = "/static/images/course_big_pic/" + Math.ceil(Math.random() * 5) + ".png"

    // 开课次数
    let course_success_times = 0;

    // 是否示范课程
    let course_is_jingpin = (Math.floor(Math.random() * 100) % 9 == 0) ? true : false;

    // 学习人数

    let people_random = Math.floor(Math.random() * 200);
    let people_arr = [];

    for (let i = 0; i < people_random; i++) {
      people_arr.push(students_id[Math.floor(Math.random() * students_id.length)]._id);
    }


    let single_school_data = {
      _id: _id,
      id: id,
      teacher_id: teacher_id,
      course_name: course_name,
      course_is_jingpin: course_is_jingpin,
      course_des: course_des,
      // 课程封面
      course_bg: course_bg,
      // 课程申请的状态
      apply_status: apply_status,
      apply_comment: apply_comment,
      // 课程进行的状态
      course_status: course_status,
      course_first: course_first,
      course_second: course_second,
      reference: reference,
      apply_date: apply_date,
      start_date: start_date,
      end_date: end_date,
      run_week: run_week,
      course_plan: course_plan,
      chapter_info: chapter_info,
      // chapter_resource: chapter_resource,
      course_success_times: course_success_times,
      chapter_total_score: chapter_total_score,
      study_people: people_arr,
      big_pic: big_pic
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
    // 查找学校id
    teacher.find({}).project({
      "_id": 1,
    }).toArray(function (err, results) {
      let teacher_id = results;

      const major = db.collection("new_major");
      major.find({}).toArray(function (err, result) {
        let all_major = result;
        // console.log(result, "all_major")

        // 学生表
        db.collection("student").find({}).project({
          _id: 1
        }).toArray(function(err, result) {

          let students_id = result;

          let teacher_data = get_course_data(1000, teacher_id, all_major, students_id);
          const courses = db.collection("course");
          courses.insertMany(teacher_data,
            function (err, result) {
              console.log(result.insertedCount)
              client.close();
            });
  
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