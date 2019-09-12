<?php
    // 第一步：获取文件数据
    print_r($_FILES);
    echo "<br/>";
    // 获取数据
    print_r($_FILES["upFile"]);
    // 因为保存的是在临时路径，所以会自动选择是删除还是保留
    // 移动路径
    // 大文件上传限制，修改apache服务器下的php.ini文件
    // 允许上传：file_uploads = On
    // upload_max_filesize = 2048M    ; 上传的最大文件大小
    // post_max_size = 2048M   ; 通过post提交数据的最大大小
    // max_execution_time = 2000     ; 脚本执行的最长时间（秒）
    // max_input_time = 2000        ; 接收的提交数据时间限制
    // memory_limit = 2048M         ; 内存消耗
    move_uploaded_file($_FILES["upFile"]["tmp_name"], "./".$_FILES["upFile"]["name"]);

?>