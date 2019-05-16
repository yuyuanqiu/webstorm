var http = require("https");
var cheerio = require("cheerio");
var fs = require("fs");

var url = "https://cn.bing.com/dict/search?q=char&FORM=BDVSP6&mkt=zh-cn";
var strHtml = "";
var results = [];
http.get(url, function (res) {
    res.on("data", function (chunk) {
        strHtml += chunk;
    });
    res.on("end", function () {
        var $ = cheerio.load(strHtml);
        // console.log(strHtml);
        console.log($("body *").text());
    })
});