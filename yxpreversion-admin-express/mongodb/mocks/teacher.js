let teachers_name = [
  '贾演',
  '贾源',
  '贾代儒',
  '贾代修',
  '贾敷',
  '贾敬',
  '贾赦',
  '贾政',
  '贾敏',
  '林如海',
  '林黛玉',
  '贾敕',
  '贾效',
  '贾敦',
  '贾珍',
  '贾琏',
  '贾琮',
  '贾珠',
  '贾宝玉',
  '贾环',
  '贾瑞',
  '贾璜',
  '贾珩',
  '贾㻞',
  '贾珖',
  '贾琛',
  '贾琼',
  '贾璘',
  '贾元春',
  '贾迎春',
  '贾探春',
  '贾惜春',
  '喜鸾',
  '贾蓉',
  '贾兰',
  '李纨',
  '贾蔷',
  '贾菌',
  '贾芸',
  '贾芹',
  '贾萍',
  '贾菖',
  '贾菱',
  '贾蓁',
  '贾藻',
  '贾蘅',
  '贾芬',
  '贾芳',
  '贾芝',
  '贾荇',
  '贾芷',
  '贾葛',
  '王熙凤',
  '史鼐',
  '史鼎',
  '史湘云',
  '王子腾',
  '王子胜',
  '王仁',
  '薛蟠',
  '薛蝌',
  '薛虬',
  '薛宝钗',
  '薛宝琴',
  '妙玉',
  '秦可卿',
  '香菱',
  '甄士隐',
  '甄宝玉',
  '晴雯',
  '绮霰',
  '麝月',
  '檀云',
  '秋纹',
  '碧浪',
  '茜雪',
  '佳蕙',
  '抱琴',
  '司棋',
  '绣橘',
  '待书',
  '翠墨',
  '入画',
  '彩屏',
  '紫鹃',
  '雪雁',
  '春纤',
  '鸳鸯',
  '琥珀',
  '珍珠',
  '玻璃',
  '翡翠',
  '鹦鹉',
  '银蝶',
  '文杏',
  '金钏',
  '玉钏',
  '绣鸾',
  '绣凤',
  '彩云',
  '彩霞',
  '素云',
  '翠缕',
  '瑞珠',
  '姣杏',
  '贾雨村',
  '邢岫烟',
  '宝蟾',
  '夏金桂',
  '茗烟',
  '李贵',
  '锄药',
  '墨雨',
  '伴鹤',
  '引泉',
  '挑芸',
  '双瑞',
  '双寿',
  '王荣',
  '钱槐',
  '杏奴',
  '柳湘莲',
  '王信',
  '霍启',
  '封肃',
  '冷子兴',
  '周瑞',
  '李守中',
  '冯渊',
  '王成',
  '智能',
  '余信',
  '秦钟',
  '赖二',
  '詹光',
  '戴良',
  '钱华',
  '单聘仁',
  '吴新登',
  '秦业',
  '冯唐',
  '张友士',
  '戴权',
  '牛清',
  '牛继宗',
  '柳彪',
  '柳芳',
  '陈翼',
  '陈瑞文',
  '马魁',
  '马尚',
  '侯晓明',
  '侯孝康',
  '石光珠',
  '蒋子宁',
  '谢鲸',
  '戚建辉',
  '裘良',
  '冯紫英',
  '陈也俊',
  '卫若兰',
  '水溶',
  '净虚',
  '智善',
  '云光',
  '夏守忠',
  '吴天佑',
  '卜固修',
  '山子野',
  '林之孝',
  '程日兴',
  '昭容',
  '彩缤',
  '花自芳',
  '卜世仁',
  '倪二',
  '王短腿',
  '方椿',
  '胡斯来',
  '王济仁',
  '蒋玉菡',
  '傅试',
  '傅秋芳',
  '茗玉',
  '王君效',
  '金彩',
  '金文翔',
  '嫣红',
  '赖尚荣',
  '邢忠',
  '李纹',
  '李绮',
  '胡君荣',
  '乌进孝',
  '单大良',
  '赵国基',
  '佩凤',
  '偕鸾',
  '张华',
  '俞禄',
  '秋桐',
  '潘又安',
  '翠云',
  '邢德全',
  '文花',
  '圆信',
  '智通',
  '孙绍祖',
  '王一贴',
  '宝珠',
  '娇杏',
];



const uuid = require("../utils/uuid")




function get_teacher_data(length, schools_id) {

  // console.log(schools_id)
  let data = [];

  for (let i = 0; i < length; i++) {

    let _id = "teacher_" + uuid.uuid();
    let id = Math.floor(Math.random() * 100000000 + 800000000)
    let teacher_name = teachers_name[i];
    let sex = ["男", "女"][Math.floor(Math.random() * 2)];
    // 年龄： [25, 100)
    let age = Math.floor(((Math.random() * 3) + 1) * 25)
    // 教师职称
    let teacher_job = ["助教", "讲师", "副教授", "教授"][Math.floor(Math.random() * 4)];

    // 所属学校
    let school_id = schools_id[Math.floor(Math.random() * schools_id.length)]._id;

    // 头像
    let avatar = "static/images/avatar/teacher/avatar_t_" + 0 + ".jpg";
    // 描述
    let teacher_des = teacher_name + "教师描述"

    let single_school_data = {
      _id: _id,
      id: id,
      teacher_name: teacher_name,
      sex: sex,
      age: age,
      teacher_job: teacher_job,
      school_id: school_id,
      avatar: avatar,
      teacher_des: teacher_des,
      points: 0,
      password: Math.floor(Math.random()  * 10000000),
      role: "teacher"
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


    const school = db.collection("fetch_schools_new");
    // 查找学校id
    school.find({}).project({
      "_id": 1,
    }).toArray(function (err, results) {
      // console.log(results)
      let school_id = results;
      let teacher_data = get_teacher_data(teachers_name.length, school_id);
      // console.log(teachers_name.length)
      const teachers = db.collection("teacher");
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
  // teacher_data
}





// let school_data = get_school_data(school_names.length);
// // let teacher_data = get_teacher_data(teachers_name, find_school_id());