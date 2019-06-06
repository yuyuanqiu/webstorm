var http = require("https");
var cheerio = require("cheerio");
var fs = require("fs");
var mysql = require("mysql");

// 建立与mysql数据库的连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '121934+1031Jou',
    database : 'msdict'
});
// 调用connect方法进行连接
connection.connect(function (err) {
    if (err) {
        return console.log('error: ' + err.message);
    }

    console.log("连接成功！");
});
// connection上调用的方法将按照顺序排队执行
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
connection.query(`CREATE TABLE IF NOT EXISTS verbdescription (单词 VARCHAR (30),英音 VARCHAR (50),美音 VARCHAR (50),词义一 VARCHAR (500),词义二 VARCHAR (100),词义三 VARCHAR (100),词义四 VARCHAR (100),词义五 VARCHAR (100),复数 VARCHAR (30),现在分词 VARCHAR (30),过去式 VARCHAR (30),搭配一 VARCHAR (500),搭配二 VARCHAR (200),搭配三 VARCHAR (200),搭配四 VARCHAR (200),搭配五 VARCHAR (200),同义词 VARCHAR (200),反义词 VARCHAR (200),权威英汉双解 VARCHAR (500),英汉 VARCHAR (500),网络释义 VARCHAR (500),全部词义 VARCHAR (300),PRIMARY KEY (单词)) ENGINE=INNODB DEFAULT CHARSET=utf8;` ,function(err,data) {
    if (err) {
        console.log(err);
    }
});

var url = "https://www.bing.com/dict/search?q=schedule&FORM=BDVSP6&mkt=zh-cn";
var strHtml = "";
var results = [];
http.get(url, function (res) {
    res.on("data", function (chunk) {
        strHtml += chunk;
    });
    res.on("end", function () {
        var $ = cheerio.load(strHtml);
        // 获取单词
        var danci = $('.qdef .hd_div strong').text();
        // 获取英音
        var yingyin = $('.qdef .hd_pr').text();
        var meiyin = $('.qdef .hd_prUS').text();
        console.log(danci, yingyin, meiyin);
        // 获取词义列表
        var $ciyi = $('.qdef ul li');
        var ciyiArr = [];
        $ciyi.each(function (index) {
           ciyiArr.push($(this).text());
        });
        console.log(ciyiArr);

        // 获取复数与分词
        // var fushu_fenci = $()
        // 获取搭配
        var $dapei = $('#colid .df_div2');
        var dapeiArr = [];
        $dapei.each(function (index) {
            dapeiArr.push($(this).text());
        });
        console.log(dapeiArr);

        // 获取同义词
        var $tongyici = $('#synoid .df_div2');
        var tongyiciArr = [];
        $tongyici.each(function (index) {
            tongyiciArr.push($(this).text());
        });
        console.log(tongyiciArr);

        // 获取反义词
        var $fanyici = $('#antoid .df_div2');
        var fanyiciArr = [];
        $fanyici.each(function (index) {
            fanyiciArr.push($(this).text());
        });
        console.log(fanyiciArr);
        // 获取权威英汉双解
        var $quanwei = $('.se_lis').find('.def_row');
        var quanweiArr = [];
        $quanwei.each(function (index) {
            quanweiArr.push($(this).text());
        });
        console.log(quanweiArr);

        // 获取英汉
        var $yinghan = $('#crossid').find('.def_fl>.de_li1.de_li3');
        var yinghanArr = [];
        $yinghan.each(function (index) {
            yinghanArr.push($(this).text());
        });
        console.log(yinghanArr);

        // 获取网络释义
        var $wangluoshiyi = $('#webid').find('.p1-1');
        var wangluoshiyiArr = [];
        $wangluoshiyi.each(function (index) {
            wangluoshiyiArr.push($(this).text());
        });
        console.log(wangluoshiyiArr);

        // 获取全部词义
        var $quanbuciyi = $('.senDefLink').find('.fillink');
        var quanbushiyiArr = [];
        $quanbuciyi.each(function (index) {
            quanbushiyiArr.push($(this).text());
        });
        quanbushiyiArr.shift();
        console.log(quanbushiyiArr);

        // 存取数据到数据库         ????????????????????????????????????
        connection.query(`insert into verbdescription(单词, 英音, 美音, 词义一, 搭配一, 同义词, 反义词, 权威英汉双解, 英汉, 网络释义, 全部词义) values('${danci}','${yingyin}','${meiyin}','${ciyiArr}','${dapeiArr}','${tongyiciArr}','${fanyiciArr}','${quanweiArr}','${yinghanArr}','${wangluoshiyiArr}','${quanbushiyiArr}');`, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('存储' + danci + '成功，以存储到数据库');
        });







        // 关闭数据库连接
        connection.end(function (err) {
            if (err) {
                return console.log("error: " + err.message);
            }
            console.log("关闭数据库连接！");
        });
    });

});