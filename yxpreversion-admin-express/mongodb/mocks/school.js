const uuid = require("../utils/uuid")


const school_names = [
  "中国科学院大学", "北京大学", "中国人民大学", "北京理工大学", "北京航空航天大学", "中央民族大学", "北京师范大学", "中国农业大学", "天津大学", "南开大学", "复旦大学", "上海交通大学", "同济大学", "华东师范大学", "重庆大学", "西安交通大学", "西北工业大学", "西北农林科技大学", "四川大学", "电子科技大学", "湖南大学", "国防科技大学", "中南大学", "厦门大学", "中国科学技术大学", "南京大学", "东南大学", "哈尔滨工业大学", "浙江大学", "华中科技大学", "武汉大学", "中国海洋大学", "山东大学", "吉林大学", "大连理工大学", "东北大学", "华南理工大学", "中山大学", "兰州大学"
]


function get_school_data(length) {
  let shcool_data = [];

  for (let i = 0; i < length; i++) {

    // 学校编号在[1000000000, 2000000000]
    let _id = "school_" + uuid.uuid();
    console.log(_id)
    // 学校名称
    let school_name = school_names[i];
    // 学校logo
    let school_logo = "logo_" + i + ".jpg";
    // 学校地标
    let school_spot = "spot_" + i + ".jpg";
    // 学校描述
    let school_des = school_name + "学校描述"

    let single_school_data = {
      // _id: _id,
      school_name: school_name,
      school_logo: school_logo,
      school_spot: school_spot,
      school_des: school_des
    }

    shcool_data.push(single_school_data);
  }
  // console.log(shcool_data)
  return shcool_data;
}

const school_data_s = get_school_data(school_names.length);
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




    // 学校
    const collections = db.collection("school");
    // Insert some documents
// console.log(school_data_s)

    collections.insertMany(school_data_s,

      function (err, result) {
      // console.log(err)
      console.log(result.insertedCount)
      client.close()
      });

  });
}

success_teacher()
module.exports = {
  success_teacher,
}



/**
 * 集合数据插入
 * @param {*} db 连接的数据库
 * @param {*} collection 要操作的集合
 * @param {*} data 插入的集合数据
 * @param {*} chain CURD的链式操作
 */

const insertDocuments = function (db, col, data, chain) {
  // Get the documents collection
  const collection = db.collection(col);
  // Insert some documents
  collection.insertMany(data,

    // result包含来自mongodb的结果文档
    // ops包含带有添加_id字段的文档
    function (err, result) {
      // assert.equal(err, null);
      // assert.equal(3, result.result.n);
      // assert.equal(3, result.ops.length);
      chain();
    });
}