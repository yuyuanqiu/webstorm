// 域名处理和解析模块
var dns = require("dns");

// 将一个域名解析为一个指定类型的数组
var domain = "baidu.com";
dns.resolve(domain, function (err, addresses) {
    if (err) {
        console.log(err);
        // 当出错时，直接结束             /*好的语句*/
        return;
    }
    console.log(addresses);
});
// 返回第一个被发现的ip地址
dns.lookup(domain, function (err, addresses) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(addresses);
});

// 通过ip解析域名,得到一个数组            只能查114？？？
dns.reverse("1141.114.114.114", function (err, domain1) {
    if (err) {
        console.log(err);
    }
    console.log(domain1);
});

