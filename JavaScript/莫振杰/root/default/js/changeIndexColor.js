window.onload = function () {
    var getBodyBackgroundColor = document.getElementsByTagName("body")[0];
    var getWebsiteName = document.getElementsByClassName("websiteName")[0];
    var getSearchImg = document.getElementById("searchImg");
    var getSubContentLeft = document.getElementsByClassName("subContentLeft");
    var getLinkItem = document.getElementsByClassName("linkItem");
    
    var indexChange = {
        "white": {
            "bodyBgColor": "#e8e8e8",
            "SubContentLeft": {"bgColor": "#fafafa", "boxShadow": "0 0 20px darkgrey", "color": "#000"},
            "linkItemColor": "#7c7c7c"
        },
        "black": {
            "bodyBgColor": "#6d6d6e",
            "SubContentLeft": {"bgColor": "#cbcbcb", "boxShadow": "0 0 20px #282828", "color": "#000"},
            "linkItemColor": "#070707"
        }
    };
    
    // var indexChange = [["#e8e8e8","#fafafa", "0 0 20px darkgrey", "#000","#7c7c7c"],
    // ["#6d6d6e","#cbcbcb", "0 0 20px #282828", "#000","#070707"]];
    
     

    getSearchImg.onclick = function () {
                getSearchImg.src = "default/img/IoiyAigNav.png";
                getBodyBackgroundColor.style.background = indexChange.black.bodyBgColor;
                for (var i = 0; i < getSubContentLeft.length; i++) {
                    getSubContentLeft[i].style.background = indexChange.black.SubContentLeft.bgColor;
                    getSubContentLeft[i].style.boxShadow = indexChange.black.SubContentLeft.boxShadow;
                    getSubContentLeft[i].style.color = indexChange.black.SubContentLeft.color;
                }
                for (var i = 0; i < getLinkItem.length; i++) {
                    getLinkItem[i].style.color = indexChange.black.linkItemColor;
                }
            }  
    getWebsiteName.onclick = function () {
        getSearchImg.src = "default/img/searchImg.png";
        getBodyBackgroundColor.style.background = indexChange.white.bodyBgColor;
        for (var i = 0; i < getSubContentLeft.length; i++) {
            getSubContentLeft[i].style.background = indexChange.white.SubContentLeft.bgColor;
            getSubContentLeft[i].style.boxShadow = indexChange.white.SubContentLeft.boxShadow;
            getSubContentLeft[i].style.color = indexChange.white.SubContentLeft.color;
        }
        for (var i = 0; i < getLinkItem.length; i++) {
            getLinkItem[i].style.color = indexChange.white.linkItemColor;
        }
    }
}


