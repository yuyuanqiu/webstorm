process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

var https = require("https");
var http = require("http");


var url = require('url');

var sleep = function (time) {
  var startTime = new Date().getTime() + parseInt(time, 10);
  while (new Date().getTime() < startTime) {}
};


const schools = [
  "中国科学院大学", "北京大学", "中国人民大学", "北京理工大学", "北京航空航天大学", "中央民族大学", "北京师范大学", "中国农业大学", "天津大学", "南开大学", "复旦大学", "上海交通大学", "同济大学", "华东师范大学", "重庆大学", "西安交通大学", "西北工业大学", "西北农林科技大学", "四川大学", "电子科技大学", "湖南大学", "国防科技大学", "中南大学", "厦门大学", "中国科学技术大学", "南京大学", "东南大学", "哈尔滨工业大学", "浙江大学", "华中科技大学", "武汉大学", "中国海洋大学", "山东大学", "吉林大学", "大连理工大学", "东北大学", "华南理工大学", "中山大学", "兰州大学"
]


let net_url = "https://www.icourse163.org/university/view/all.htm#/"

function get_all_school(url) {

  let arr = []

  axios.get(url).then((res) => {

    let school_list = res.data.schoolDtoList;
    // console.log(school_list)

    for (let i = 0; i < 100; i++) {
      let school_net = school_list[i];
      // console.log(school_net.name)

      // for (let j = 0; j < schools.length; j++) {
      //   // console.log(schools.length)
      //   // 循环变量要对应
      //   if (school_net.name === schools[j]) {

      let reg = /ph.126.net/

      if (reg.test(school_net.name) | reg.test(school_net.description) | reg.test(school_net.smallLogo) | reg.test(school_net.bigLogo) | reg.test(school_net.bgPhoto) | reg.test(school_net.logoForCertUrl)) {
        continue;
      }
      console.log(i)

      let name = reg.test(school_net.name) ? "" : school_net.name;
      let description = reg.test(school_net.description) ? "" : school_net.description;

      let smallLogo = reg.test(school_net.smallLogo) ? "" : school_net.smallLogo;
      let bigLogo = reg.test(school_net.bigLogo) ? "" : school_net.bigLogo;
      let bgPhoto = reg.test(school_net.bgPhoto) ? "" : school_net.bgPhoto;
      let logoForCertUrl = reg.test(school_net.logoForCertUrl) ? "" : school_net.logoForCertUrl;

      console.log(name)

      let obj = {
        name: name,
        discription: description,
        smallLogo: "public/images/schools/smallLogo_new/" + name + ".jpg",
        bigLogo: "public/images/schools/bigLogo_new/" + name + ".jpg",
        bgPhoto: "public/images/schools/bgPhoto_new/" + name + ".jpg",
        logo: "public/images/schools/logoForCertUrl_new/" + name + ".jpg"
      }

      arr.push(obj);



      let http_or_https = /https/

      function bendi(img) {

        try {
          (http_or_https.test(img) ? https : http).get(img, {
            headers: {
              "user-agent": "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6"
            }
            
          },
            function (req, res) {
              var imgData = '';
              req.setEncoding('binary');
              req.on('data', function (chunk) {
                imgData += chunk;
              })
              req.on('end', function () {

                let path_s = "public/images/schools/" + "smallLogo" + "/" + name + ".jpg"
                fs.writeFile("../../" + path_s, bigLogo, 'binary', function (err) {
                  console.log('保存图片成功' + path)


                  img = path_s;


                  let obj = {
                    name: name,
                    discription: description,
                    smallLogo: img,
                    bigLogo: bigLogo,
                    bgPhoto: bgPhoto,
                    logo: logoForCertUrl
                  }


                })
              })
            })
        } catch (err) {
          console.log(err)
        }
      }

      // bendi(smallLogo)
      // bendi(bigLogo);
      // bendi(bgPhoto);
      // bendi(logoForCertUrl);

    }
    console.log(arr.length)
    success(arr)
    // return arr;




  })
}

get_all_school(net_url)


function success(data) {

  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'misscourse';

  // Create a new MongoClient
  const client = new MongoClient(url);

  // Use connect method to connect to the Server
  client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    db.collection('fetch_schools_new').insert(data, function (err, r) {
      console.log(err)
      client.close()
    });



  });

}







let imgUrl = "https://nos.netease.com/edu-image/DFA796EE289BB519F16C232334E28F29.png?imageView&thumbnail=220y80&quality=100"

// let imgUrl = "https://cdn.countryflags.com/thumbs/yemen/flag-round-250.png"

// let imgUrl  = "http://localhost:20020/static/images/course_cover/course_cover_1.png"








// axios.get(imgUrl, {
//   retry: 5,
//   retryDelay: 1000,
//   timeout: 6000,
//   checkServerIdentity: false,
//   rejectUnauthorized:false,
//   // responseType: 'stream', // 下载文件需要加上这个配置  不然在使用res.data.pipe会报错
// })
// .then(function (res) {
//   res.data.pipe(fs.createWriteStream("hh.png"));
// });


// const request = require('request') //利用request模块保存图片
// request(imgUrl).pipe(fs.createWriteStream('fsd.jpg'))

// try{
//   https.get(imgUrl,function (req,res) {
//     var imgData = '';
//     req.setEncoding('binary');
//     req.on('data',function (chunk) {
//         imgData += chunk;
//     })
//     req.on('end',function () {
//         fs.writeFile("../fsf.jpg",imgData,'binary',function (err) {
//             console.log('保存图片成功'+path)
//         })
//     })
// })
// }
// catch(err){
//   console.log(err)
// }