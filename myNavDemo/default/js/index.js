/*jauery $提示红色波浪线解决方法：
    编辑.jshintrc文件，添加>>>"jquery": true<<<即可解决
*/

$(function () {
    // 遍历所有的左侧子导航列
    $(".asideNav li a").each(function () {
        $(this).bind("click",function () {
            // 更改左侧子导航列点击时的样式（即增减class：clickChangeBGColor）
            // 添加class前先遍历移除该class
            $(".asideNav li a").each(function () {
                if ($(this).hasClass("clickChangeBGColor")) {
                    $(this).removeClass("clickChangeBGColor");
                }
            });
            $(this).addClass("clickChangeBGColor");
            // 当点击某一子导航项时，其对应的锚点链接的元素显示，并把对应元素的其他同级元素隐藏
            var idValue = $(this).attr("href").slice(1);
            // alert(idValue);
            $(".sectionNav").each(function () {
                if (idValue === $(this).attr("id")) {
                    if ($(this).hasClass("sectionNavDisplayNone")) {
                        $(this).removeClass("sectionNavDisplayNone");
                    }
                }
                else {
                    $(this).addClass("sectionNavDisplayNone");
                }
            });
        });


    });
    // 遍历右侧主页面列表
    // 更改某一子项的鼠标移入移出时的样式
    $(".detailContent").each(function () {
        $(this).bind("mouseenter",function () {
            // alert("hhh")
            $(this).find("h3").addClass("detailContentH3Select").end().find(".showContent").addClass("showContentDisplayNone");
        });
        $(this).bind("mouseleave",function () {
            // alert("hhh")
            $(this).find("h3").removeClass("detailContentH3Select").end().find(".showContent").removeClass("showContentDisplayNone");
        });
    });
});