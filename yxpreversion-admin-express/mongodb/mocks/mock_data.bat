REM 批量初始化网站数据
REM 由于之间的依赖关系，需要依次按序执行
REM 直接在命令行输入文件名即可执行

REM node get_school_img.js 
node teacher.js 
node student.js 
node course.js 
node article.js 
node note_first.js 
node note_second.js 
node props.js 
node homework.js