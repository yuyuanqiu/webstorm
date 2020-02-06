<?php
    $info = array("九宫格"=>array("name"=>"九宫格", "description"=>"这是一个镂空的九宫格图片", "src"=>"../img/九宫格.png"),
    "草莓"=>array("name"=>"草莓", "description"=>"这是一个红红的草莓", "src"=>"../img/草莓.png"));
    
    // 获取前端传过来的数据
    $name = $_POST["name"];
    $product = $info[$name];
    echo $product["name"];
    echo "|";
    echo $product["description"];
    echo "|";
    echo $product["src"];
?>