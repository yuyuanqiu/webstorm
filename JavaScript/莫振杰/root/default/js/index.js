


window.onload = function() {

    var oSelect = document.getElementsByName("select");
    var oSearch = document.getElementById("searchContent");
    var oClick = document.getElementById("click");
    oClick.onclick = function search() {
        for (var i = 0; i < oSelect.length; i++) {
            if (oSelect[i].checked) {
                if (oSelect[i].value === "sougou") {
                    open("https://www.sogou.com/web?query=" + oSearch.value, "_blank")
                } else if (oSelect[i].value === "360so") {
                    open("https://www.so.com/s?q=" + oSearch.value, "_blank")
                } else if (oSelect[i].value === "google") {
                    open("https://www.google.com/search?q=" + oSearch.value, "_blank")
                } else if (oSelect[i].value === "bing") {
                    open("https://cn.bing.com/search?q=" + oSearch.value, "_blank")
                } else
                    open("https://www.baidu.com/s?wd=" + oSearch.value, "_blank")
            }
        }
    }




}


