
/*
    nodejs中一个包就是一个目录，比如：mytest目录；
    该目录的结构：
    bin：存放二进制文件
    lib：存放js文件
    doc：存放说明文档
    test：存放对包的单元测试文件
    package.json文件
*/

/*
    包管理工具：npm：node package manager
    命令行：
    搜索某包的信息：
    npm search moduleName
    查看某包package.json文件信息：
    npm view moduleName
    安装包：
    npm install -g moduleName
    查看全局包的安装路径：
    npm root -g
    修改全局包的安装路径：
    npm config set prefix dirname
    查看当前目录下安装的所有包：
    npm list
    卸载某个包：
    npm uninstall moduleName
    卸载全局包路径下的某个包：
    npm uninstall -g moduleName
    更新某个包：
    npm update moduleName
    更新全局包：
    npm update -g moduleName
    更新所有包：
    npm update (-g)
*/


