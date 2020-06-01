function get_date() {
  let date = new Date();

  date.setFullYear(Math.ceil(Math.random() * 10) + 2010);


  let now_year = date.getFullYear();
  let now_year_is_366 = function () {
    if (now_year % 4 == 0 && now_year % 100 != 0 || now_year % 400 == 0) {
      return 29;
    }
    return 28;
  }

  let month_day = [31, now_year_is_366(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



  // 若是当前年
  if (date.getFullYear() === new Date().getFullYear()) {
    let now_month = new Date().getMonth() + 1;
    // 月份不能超过当前月
    date.setMonth(Math.floor(Math.random() * now_month))
    // 若是当前月
    if (date.getMonth() === new Date().getMonth()) {
      let now_date = new Date().getDate() + 1;
      // 日期不能超过当前日期
      date.setDate(Math.floor(Math.random() * now_date))
      // 若是当前日期
      if(date.getDate() == new Date().getDate()) {
        let now_hour = new Date().getHours() + 1;
        // 小时不能超过当前小时
        date.setHours(Math.floor(Math.random() * now_hour))
        // 若是当前小时
        if(date.getHours() == new Date().getHours()) {
          let now_minute = new Date().getMinutes() + 1;
          // 分钟不能超过当前分钟
          date.setMinutes(Math.floor(Math.random() * now_minute))
          //若是当前分钟
          if(date.getMinutes() == new Date().getMinutes()) {
            let now_second = new Date().getSeconds() + 1;
            // 秒钟不能超过当前秒钟
            date.setSeconds(Math.floor(Math.random() * now_second))
          } else {
            date.setSeconds(Math.floor(Math.random() * 60))
          }
        } else {
          date.setMinutes(Math.floor(Math.random() * 60))
        }
      } else {
        date.setHours(Math.floor(Math.random() * 24))
      }
    } else {
      date.setDate(Math.floor(Math.random() * month_day[date.getMonth()]));
    }
  } else {
    date.setMonth(Math.floor(Math.random() * 12))
  }

  let n_year = date.getFullYear()
  let n_month = (date.getMonth() + 1)
  let n_date = date.getDate()
  let n_hour = date.getHours()
  let n_miunte = date.getMinutes()
  let n_second = date.getSeconds()
  

  // date = "" + add_0(n_year) + "-" + add_0(n_month) + "-" + add_0(n_date) + " " + add_0(n_hour) + ":" + add_0(n_miunte) + ":" + add_0(n_second) 

  return date



}

function add_0(num) {
  if(num < 10) {
    return "0" + num;
  }
  return num;
}

function piliang_date(count) {
  let data = [];
  for (let i = 0; i < count; i++) {
    // 调用date生成函数
    data.push({
      date: get_date()
    });
  }
  return data;
}

function success() {
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  const dbName = 'misscourse';
  const client = new MongoClient(url);

  client.connect(function (err) {
    const db = client.db(dbName);

    const col = db.collection("get_date");
    // 插入
    col.insertMany(piliang_date(1000000),
      function (err, result) {
        console.log(err)
        console.log(result.insertedCount)
        // 创建索引
        col.createIndex({
          date: -1
        }, function (err, result) {
          console.log(result);
          client.close()
        });
      });


  })




}

// success()

module.exports = {
  get_date,
}