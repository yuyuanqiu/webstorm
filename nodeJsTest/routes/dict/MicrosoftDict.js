var http = require("https");
var cheerio = require("cheerio");
var fs = require("fs");
var mysql = require("mysql");


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '121934+1031Jou',
    database : 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});


var url = "https://cn.bing.com/dict/search?q=char&FORM=BDVSP6&mkt=zh-cn";
var strHtml = "";
var results = [];
http.get(url, function (res) {
    res.on("data", function (chunk) {
        strHtml += chunk;
    });
    res.on("end", function () {
        var $ = cheerio.load(strHtml);
        // 获取词义区块
        var description = $(".qdef");
        // 获取单词名称
        var getVerb = description.find("h1").text();
        // console.log(getVerb);
        // 获取单词发音 yinBiao
        var yinBiao = {
            uk: description.find("[class='hd_pr']").text(),
            us: description.find("[class='hd_prUS']").text(),
        };
        // 获取大概词义列表 liList
        function getVerbDes (obj) {
            var liList = {};
            obj.find("ul .pos").each(function (index) {
                var ciXing = $(this).text();
                var ciYi = $(this).next(".def").text();
                liList[ciXing] = ciYi;
            });
            // console.log(liList);
            return liList;
        }
        // console.log(yinBiao);
        var verb_des = {
            "getVerb": getVerb,
            "getCI": getVerbDes(description),
        };
        console.log(verb_des);
        // '${newsTitle}'
        connection.query(`creat`)
        connection.query(`INSERT INTO data (mingzi, ciyi) VALUE('${verb_des.getVerb}', '${verb_des.getCI["n."]}')`,function(err,data) {
            if (err) {
                console.log(err);
            }
        });
    });

});