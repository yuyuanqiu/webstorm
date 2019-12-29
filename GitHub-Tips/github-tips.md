# 在GitHub上搜索信息

## GitHub的搜索信息类型

- 仓库
- 主题
- 议题和拉取请求
- 代码
- 提交
- users
- packages
- wikis

## 使用可视化界面搜索

- 搜索
- 高级搜索

## 查询语法关键符

- 范围查询符号：查询大于/小于另一个值的值
  - `>`, `>=`, `<`, `<=`
    - `vue stars:>1000`
    - `vue topics:>=5`匹配含有vue字样并且topic>=5的仓库
    - `vue size:<1000`：匹配包含vue字样的代码长度小于10kb的文件
    - `vue stars:<=50`：匹配含有vue字样并且star<=50的仓库
  - `n..*`, `*..n`
    - `vue stars:10..*`：匹配含有vue字样并且stars>=10个的仓库
    - `vue stars:*..10`：匹配含有vue字样并且stars<=10个的仓库
  - `m..n`
    - `vue stars:10..50`：匹配含有vue字样且有10~50个stars的仓库
  - notes
    - 可通过上述符号搜索日期相关的内容（日期遵守ISO8601标准，即`YYYY-MM-DD`）
      - eg.`vue created:>2018-04-29`：匹配含有vue字样且在2018-04-29之后创建的议题
      - eg.`vue pushed:2016-04-30..2019-09-20`：匹配含有vue字样且在该日期之间推送的仓库
      - 日期可添加更精确的时间
        - `YYYY-MM-DDThh:mm:ss+hh1:mm1`：必须有`T`，后缀`+hh1:mm1`表示UTC偏移量
        - `YYYY-MM-DDThh:mm:ssZ`：表示当地时间？？
- 关键字查询
  - `NOT`：排除包含特定字词的结果，只能用于字符串（非数字和日期）
    - `hello NOT world`：匹配含有hello字样但不含world字样的仓库
  - `-QUALIFIER`：添加限定符，以排除该限定符匹配的内容
    - `vue stars:>10 -language:javascript`：匹配含有vue字样且stars>10但不用JavaScript写的仓库
  - notes
    - 对带有空格的字符串查询需要用引号括起来：`vue NOT "hello world"`, `build label:"bug fix"`匹配含有build字样且具有标签"bug fix"的议题

- 故障排除
  - 由于查询计算成本过高，为了实现快速搜索会限制查询运行的时长，查询超时将返回超时之前找到的匹配项（查询中断）
  - 查询限制
    - 不支持超过256个字符的查询
    - 无法使用超过5个`AND`、`OR`、`NOT`运算符的构造查询

## 搜索排序

- 使用sort菜单可按照相关性、星号数量、复刻数量以及最近更新时间排序
- `sort`限定符
  - `sort:interactions`按照最高反应和评论总数排序
    - `sort:interactions`或`sort:interactions-desc`降序排序：`org:github sort:interactions`匹配GitHub拥有的仓库的议题按照最高反应和评论总数排序
    - `sort:interactions-asc`升序排序
  - `sort:reactions`按照反应数量/类型排序
    - `sort:reactions`或`sort:reactions-desc`：按照最高反应数量排序
    - `sort:reactions-asc`：按反应数量升序排序
    - `sort:reactions-reaction`：按最多reaction反应数排序
      - `org:github sort:reactions-+1`：匹配GitHub拥有的仓库，按最多赞(👍) 排序
      - `org:github sort:reactions--1`：匹配GitHub拥有的仓库，按最多不赞成(👎)排序
      - `org:github sort:reactions-smile`：按最多大笑(😄)排序
      - `org:github sort:reactions-tada`：按最多欢呼(🎉) 排序
      - ·org:github sort:reactions-heart`：按最多红心(❤️) 排序
  - `sort:author-date`按作者日期排序（**疑问**）
    - `sort:author-date`或`sort:author-date-desc`：`feature org:github sort:author-date`匹配GitHub所拥有的仓库含有feature字样的提交且按作者日期降序排序
    - `sort:author-date-asc`：按作者日期升序排序
  - `sort:committer-date`按提交者日期排序
    - `sort:committer-date`或`sort:committer-date-desc`：按提交者日期降序排序
    - `sort:committer-date-asc`：按提交者日期升序排序
  - `sort:updated`按项目最近更新日期排序
    - `sort:updated`或`sort:updated-desc`：
    - `sort:updated-asc`

## 文件查找

- 在GitHub多个仓库中搜索文件，搜索某些目录（build、log、tmp、vender）中的文件，需使用`filename代码搜索限定符`
- 按键盘上的`t键`或者页面中的`find file`可以打开文件查找器

## 仓库搜索

- 要在搜索结果中包含fork，需要将`fork:true`或`fork:only`添加到查询
- 对多个字词的搜索词使用引号括起，搜索不区分大小写

- `in`限定符：
  - 搜索仓库名称、仓库说明、自述文件内容或它们的组合，省略限定符只搜索仓库名称和说明
    - `in:name`：匹配名称中含有某关键字的仓库
    - `in:description`：匹配说明中含有某关键字的仓库
    - `in:readme`：匹配自述文件中含有某关键字的仓库
    - **组合**：`in:name,description`匹配名称或说明中含有某关键字的仓库
    - `repo:owner/name`：匹配特定的仓库名称owner/name
- 在**某用户/组织内的仓库**搜索，使用`user`或`org`
  - `user:USERNAME`：
  - `org:ORGNAME`：
- 按**仓库的大小**进行搜索，使用`size`
  - `size`结合范围查询符号查找特定大小的仓库，例如`size:50..120`匹配介于50kb~120kb的仓库
- 按**关注者数量**进行搜索，使用`followers`
  - `followers`结合范围查询符号过滤仓库，例如`styleguide linter followers:1..10`匹配拥有1~10个关注者并且提及styleguide linter一词的仓库
- 按**fork数量**进行搜索，使用`forks`结合范围查询符号过滤仓库
- 按**星号数量**进行搜索，使用`stars`结合范围查询符号过滤仓库，例如`stars:>=500 fork:true language:php`匹配以php编写的具有500个星号包括fork的星号以上的仓库
- 按**仓库创建/上次更新时间**进行搜索，使用`created`或`push`限定符，都将时间作为参数，可结合范围查询符号过滤
  - `case pushed:>=2018-02-19 fork:only`匹配具有case字样且在2018-02-19之后收到推送并作为fork的仓库
- 按**语言**进行搜索，使用`language`，例如`rails language:javascript`匹配含有rails字样且以JavaScript编写的代码
- 按**主题**进行搜索，使用`topics`结合范围查询符号进行搜索，例如`topics:5`匹配具有5个主题的仓库
- 按**许可**搜索，使用`license:LICENSE_KEYWORD`，例如`license:apache-2.0`匹配根据apache license 2.0授权的仓库
- 按**公共/私有**仓库搜索
  - `is:public`
  - `is:private`
- 匹配**镜像**搜索，使用`mirror`限定符
  - `mirror:true`
  - `mirror:false`
- 匹配**存档**搜索，使用`archived`限定符
  - `archived:true`：匹配已存档的仓库
  - `archived:false`
- 按`good first issue`或`help wanted`标签的议题数量进行搜索，可结合范围查询符号
  - `good-first-issues:>2 javascript`匹配具有超过两个标签为good-first-issue的议题且包含JavaScript字样的仓库
  - `help-wanted-issues:>4 react`匹配具有超过4个标签为help-wanted的议题且包含react字样的仓库

## 主题（topics）搜索

- 使用`topic:`限定符查找特定主题的仓库
- 可以使用搜索限定符`is:featured`、`is:curated`、`repositories:n`和`created:YYYY-MM-DD`进行搜索主题
  - `is:featured`将搜索结果缩小为具有最多仓库的主题，会在https://github.com/topics/上提供
    - `is:featured javascript`匹配上述链接上提供的且含有JavaScript字样的主题
    - `is:not-featured javascript`匹配上述链接未提供的且含有JavaScript的主题
  - `is:curated`搜索缩小为社区成员向其添加额外信息的主题
    - `is:curated javascript`匹配精心策划且含有JavaScript字样的主题
    - `is:not-curated javascript`匹配没有额外信息（说明/徽标）且含有JavaScript的主题
  - `created`和`repositories:n`可使用范围查询符号
    - `repositories:>5000`匹配超过5000个仓库的主题
    - `Serverless created:>2019-01-01`匹配含有serveless字样且在2019年之后创建的主题

## 代码搜索

- 代码搜索限制
  - 必须登录才能跨所有公共库搜索代码
  - GitHub pages网站不可搜索，除非resources存在仓库默认分支中
  - fork的代码只有当其stars超过父级仓库时才可搜索，而要包含这些fork超过父级stars的fork仓库，需要使用`fork:true`或`fork:only`
  - 只有默认分支会编索引进行代码搜索，大多数为master分支
  - 只有文件大小小于384kb的才可搜索
  - 只有少于500,000个文件的仓库可搜索
  - 除了`filename`搜索外，搜索源代码必须包含一个以上的搜索词
    - 例如`language:javascript`无效
  - 搜索结果最多显示同一文件的2个分段，即使该文件有更多的结果
  - 无法使用通配符（`. , : ; / \ `` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ]`作为搜索查询的一部分，会被忽略
  - 使用额外匹配符搜索（像number，letter，symbol）只在特定的仓库中有效

- 按文件内容/路径搜索，使用`in`限定符，将搜索限制为源代码文件内容或文件路径，或两者都有
  - `in:file`, `in:path`, `in:file,path`

- 在用户/组织的仓库中搜索，使用`user:USERNAME`或`org:ORGNAME`
  - 在特定仓库搜索使用`repo:USERNAME/REPOSITORY`

- 按文件位置搜索，使用`path`限定符
  - `path:/`搜索位于仓库根目录级别的文件
  - `path:DIRECTORY`搜索位于DIRECTORY目录及其子目录下的文件
  - `path:PATH/TO/DIRECTORY`同上

- 按语言搜索，使用`language:LANGUAGE`搜索基于某语言编写的代码文件
- 按文件大小搜索，使用`size`限定符，匹配符合某大小的代码文件
- 按文件名搜索，使用`filename`限定符搜索特定的文件名
  - `filename:.gitignore`匹配名为.gitignore的文件
- 按文件扩展名搜索，使用`extension`限定符
  - `icon size:>200000 extension:css`匹配包含icon字样的并超过200kb且以css结尾的文件

## 搜索提交

- 搜索提交时，仅搜索仓库的默认分支（master）
- 在消息中查找包含特定字词的提交，例如`fix typo`匹配包含fix和typo字样的提交
- 按作者/提交者搜索，使用`author`或`committer`限定符
  - `author:USERNAME`匹配USERNAME创建的提交
  - `committer:USERNAME`匹配USERNAE提交的提交
  - `author-name:NAME`匹配作者姓名包括NAME的提交
  - `committer-name:NAME`匹配提交者姓名中包含NAME的提交
  - `author-email:EMAIL`匹配按作者创建Email的提交
  - `committer-email:EMAIL`匹配按提交者Email的提交
- 按创作/提交日期搜索使用`author-date`和`committer-date`，支持范围限定符
  - `author-date:<2019-12-12`匹配该日期之前创作的提交
  - `committer-date:<2019-12-12`匹配该日期之前提交的提交
- 过滤合并提交，使用`merge`
  - `merge:true`匹配合并提交
  - `merge:false`匹配非合并的提交
- 按哈希搜索提交，使用`hash:HASH`限定符指定具体的sha-1哈希
- 按父项哈希提交，使用`parent:HASH`指定具体的sha-1哈希
- 按树搜索，使用`tree:HASH`匹配具体指定的sha-1的git树哈希提交
- 在用户/组织仓库内搜索提交，使用`user`或`org`或`repo`限定符
- 过滤公有/私有仓库的提交使用`is:public/private`

## 搜索议题和拉取请求

- 默认情况下，GitHub将返回议题和拉取请求，可使用`type`或`is`将搜索结果限制为仅议题/拉取请求
  - `type:pr`：`cat type:pr`匹配含有cat字样的拉取请求
  - `type:issue`：`github commenter:defunkt type:issue`匹配含有GitHub字样且由defunkt评论的议题
  - `is:pr`：`event is:pr`匹配含有event字样的拉取请求
  - `is:issue`：`is:issue label:bug is:closed`匹配具有标签bug的已关闭的议题
- 按标题、正文、评论搜索，或组合搜索
  - `in:title`：`warning in:title`匹配其标题中含有warning的议题
  - `in:body`：`error in:title,body`匹配标题/正文含有error的议题
  - `in:comments`：`shipint in:comments`匹配评论中体积shipint的议题
- 在用户/组织的仓库内搜索，使用`user`或`org`或`repo`搜索
- 按开放/关闭状态搜索，使用`state`或`is`
  - `state:open`：`libraries state:open mentions:vmg`匹配提及@vmg用户且含有libraries字样的开放议题
  - `state:closed`：`design state:closed in:body`匹配正文中含有design字样的已关闭议题
  - `is:open`：`performance is:open is:issue`匹配含有performance字样的开放议题
  - `is:closed`：`android is:closed`匹配含有Android字样的已关闭的议题和拉取请求
- 按公共/私有仓库搜索，使用`is:public/private`实现
- 按作者搜索，使用`author`查找由特定用户/集成账户创建的议题和拉取请求
  - `author:app/USERNAME`：匹配由名为USERNAME的集成账户创建的议题
- 按受理人搜索，使用`assignee:USERNAME`查询分配给特定用户的议题/拉取请求
  - 无法搜索具有any受理人的议题/拉取请求，但可以搜索没有受理人的议题/拉取请求
  - `assignee:vmg repo:libgit2/libgit2`匹配分配给@vmg的某项目的议题和拉取请求
- 按提及搜索，使用`mentions:USERNAME`查找提及特定用户的议题
- 按团队提及搜索，使用`team:ORGNAME/TEAMNAME`查找某组织特定团队的议题/拉取请求
  - `team:jekyll/owners`匹配提及@Jekyll/owners团队的议题
- 按评论者搜索，使用`commenter:USERNAME`查找含有特定用户评论的议题
- 按议题/拉取请求中涉及的用户搜索，使用`involves:USERNAME`查找以某种方式涉及特定用户的议题，是`author | assignee | mentions | commenter`
  - `involves:defunkt involves:jlord`匹配涉及@defunkt或@jlord的议题
- 按标签搜索，使用`label:LABEL`按标签缩小结果范围
  - `-label:LABEL`表示缺少某标签
  - `broken in:body -label:bug label:priority`匹配在正文中含有broken且有priority没有bug的议题
- 按里程碑搜索，使用`milestone:MILESTONE`查找作为仓库内里程碑组成部分的议题/拉取请求
  - `milestone:"bug fix"`匹配位于名为"bug fix"的里程碑中的议题
- 按项目板搜索，使用`project`查找与仓库/组织中特定项目板关联的议题，必须按项目板编号搜索，可以在项目板url末尾找到项目板编号
  - `project:PROJECT_BOARD`：`project:github/linguist/1`匹配与@github的linguist仓库中的项目板1关联的议题
- 按提交状态搜索，使用`status`限定符，在使用status api或ci服务时特别有用
  - `status:pending`匹配状态为待定
  - `status:success`匹配状态为成功
  - `status:failure`匹配状态为失败
- 按提交SHA搜索，至少需要包含7个字符
  - `SHA`：匹配具有开头为SHA的提交的拉取请求
- 按分支名称搜索，使用`head`(某分支)或`base`(合并分支)
  - `head:HEAD_BRANCH`匹配以某开头的分支的拉取请求
  - `base:BASE_BRANCH`匹配合并到某分支的拉取请求
- 按语言搜索，使用`language`
- 按评论数量搜索，使用`comments`
- 按交互数量搜索，使用`interactions`
- 按反应数量搜索，使用`reactions`
- 搜索草稿拉取请求，使用`is:draft`
- 按拉取请求审查状态和审查者搜索，使用`review`
  - `review:none`：匹配尚未审查的
  - `review:required`：匹配需要审查才能合并的
  - `review:approved`：匹配审查者已批准的
  - `review:changes_requested`：匹配审查者已请求更改的
  - `reviewed-by:USERNAME`：匹配特定人员审查的
  - `review-requested:USERNAME`：匹配特定人员申请审查的
  - `team-review-requested:TEAMNAME`：匹配已审查团队请求的
- 按议题/拉取请求创建/上次更新的时间搜索，使用`created`或`updated`
- 按议题/拉取请求关闭的时间搜索，使用`closed:YYYY-MM-DD`
- 按拉取请求合并的时间搜索，使用`merged:YYYY-MM-DD`
- 基于拉取请求是否已合并搜索，使用`is`
  - `is:merged`已合并的
  - `is:unmerged`未合并的
- 基于仓库是否已存档搜索，使用`archived:boolean`
- 基于对话是否已锁定搜索，使用`is:(un)locked`
- 按缺少的元数据（标签，里程碑，受理人，项目）搜索，使用`no`
  - `no:label`匹配没有任何标签的
  - `no:milestone`匹配未含有关联里程碑的
  - `no:assignee`匹配未与受理人关联的
  - `no:project`匹配未与项目关联的

## 搜索用户

- 默认情况下搜索用户将同时返回个人/组织，使用`type`限定
  - `type:user`搜索个人
  - `type:org`搜索组织
- 按账户、全名或Email搜索
  - `user:name`匹配某用户
  - `org:name`匹配某组织
  - `key in:login`匹配用户名中含某字样的用户
  - `key in:name`匹配真实姓名中含某字样的用户
  - `fullname:firstname lastname`匹配全名为某的用户
  - `key in:email`匹配Email中含有某的用户
- 按用户拥有的仓库数量搜索，使用`repos:n`
- 按位置搜索，使用`location:LOCATION`
- 按仓库的语言搜索，使用`language:LANGUAGE`
- 按用户账户创建时间搜索，使用`created:YYYY-MM-DD`
- 按关注着数量搜索，使用`followers:n`

## 搜索包

- 使用个人/组织，`user:USERNAME`或`org:ORGNAME`
- 过滤公/私有，`is:public`或`is:private`

## 搜索Wiki

- 在用户/组织的仓库内搜索，使用`user`、`org`或`repo`
- 在Wiki页面标题/正文文本中搜索，使用`in`，未使用将同时包含
  - `key in:title`匹配含有某的wiki页面
  - `key in:body`匹配正文文本含有某的wiki页面
- 按上次更新日期搜索，使用`updated`

## 在fork中搜索

- 默认情况下，forks不会在搜索结果中显示，只有fork比父级仓库stars更多才会为代码搜索编索引
- 显示fork，需将`fork:true`或`fork:only`添加到查询
  - `fork:true`匹配包含fork的仓库
  - `fork:only`只匹配fork仓库