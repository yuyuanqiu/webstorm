# MDN HTML ELEMENTS REVIEW

## 结构框架

### `html`

- dom接口：HTMLHtmlElement

### `head`

- 定义：规定文档相关的配置信息，包含文档标题，引用的文档样式和脚本等。
- dom接口：HTMLHeadElement
- 若忽略了head标签，则大部分浏览器会自动创建一个head元素。

### `body`

- 定义：表示文档内容，`document.body`提供了可以轻松访问文档的body元素
- dom接口：HTMLBodyElement
- 事件属性（on-）：
  - onafterprint，onbeforeprint
  - onblur，onfocus
  - onbeforeunload（关闭之前），onload（完成加载），onunload（关闭时调用）
  - onerror，onhashchange（地址哈希改变时），onmessage（收到消息时），onoffline（网络连接失败时），ononline（网络连接恢复时），onresize（文档尺寸改变时），onundo（撤销操作时）

## 元数据内容

- 含义：含有页面的相关信息，包括样式、脚本及数据

### `meta`

- 用法：
  - 单标签元素
  - dom接口：HTMLMetaElement
  - name属性具有特殊含义，同一个meta中，name、http-equiv、charset任何一个属性存在时，itemprop属性不能使用
  - meta元素必须包含在head元素及html代码前1024个字节内（某些浏览器只看前面这些字节）


- 常用属性
  - `charset`：声明当前文档所使用的字符编码，可被任何元素的lang属性覆盖，值为**MIME**类型，例如UTF-8。
    - 不应该使用不兼容ASCII的编码规范，以避免不必要的安全风险（导致浏览器渲染出错，存在跨站脚本攻击XSS的风险）
    - 字符编码必须与页面使用的编码匹配，避免乱码和安全漏洞
    - 不再推荐的语法`<meta http-equiv="content-type" content="text/html; charset=..."/>`
  - `content`：包含http-equiv或name属性的值
  - `http-equiv`：定义了能改变服务器和用户引擎行为的编译，值使用content来定义
    - `content-security-policy`内容安全策略：指定允许的服务器源和脚本端点，有助于防止跨站点脚本攻击。
    - `default-style`：指定了页面使用的首选样式表。content属性必须包含link元素的标题或href属性链接到css样式表的标题或包含css样式表的style元素的标题。
    - `refresh`：
      - 若content只包含一个正整数，则值为重新载入页面的时间间隔秒
      - 若content包含一个正整数并跟着一个字符串，值为重定向到指定链接的时间间隔秒
    - `content-language`：页面默认语言，已过时，使用lang属性代替
    - `content-type`：已废弃，使用charset属性代替
  - `name`：定义文档级元数据的名称，若其中一个属性设置了itemprop、http-equiv或charset，就不能使用该属性，与content属性包含的值关联。
    - `application-name`：定义正运行在该网页上的网络应用名称，区分title元素，title元素通常由应用名称组成，但可包含特定信息如文档标签或状态。
    - `author`：文档作者
    - `description`：包含页面内容的简短精确的描述，Firefox和opera将其作为书签页面的默认描述。
    - `generator`：包含生成页面的软件的标识符
    - `keywords`：包含与逗号分隔的页面内容相关的单词。
    - `viewport`：提供有关视口初始大小的提示，仅供移动设备使用。
      - width,height(px),initial-scale缩放比，maximum-scale缩放最大值，minimum-scale，user-scaleable（是否能够缩放）

```html
<!-- 在html4中 -->
<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
<!-- 在html5中 -->
<meta charset="utf-8"/>
<!-- 页面重定向 -->
<meta http-equiv="refresh" content="3;url=http://www.mozilla.org/"/>
```

### `title`

- 定义：文档的标题，显示在浏览器的标题栏或标签页上，只可以包含文本
- dom接口：HTMLTitleElement

### `base`

- 定义：用于文档中包含的所有相对URL的根URL，只能有一个。
- :loudspeaker::loudspeaker::loudspeaker:
  - 单标签
  - dom接口：HTMLBaseElement
  - 必须在其他具有url属性元素之前
  - :bell:指定多个base元素，只会使用第一个`href`和`target`值
  - 指向文档中某个片段`<a href="#some-id"></a>`的链接用base解析，触发对带有附加片段的基本URL的http请求，指向`https://example.com/#some-id`。
  - open graph标签不接受base，故其应具有完整绝对的url
- 常用属性
  - `href`：基础的url地址（绝对/相对地址）
  - `target`：默认浏览上下文载入结果的方式（未指定明确目标时的方式）
    - `_self`：当前浏览上下文（默认值）
    - `_blank`：新的未命名的浏览上下文
    - `_parent`: 当前页为内联框则到父级浏览上下文，若无父级结构，与`_self`一样
    - `_top`：顶级上下文，若无父级结构与`_self`一样
- `baseURI`：通过`document.baseURI`查询，若文档不包含该元素，baseURI默认为`document.location.href`。

### `link`

- 定义：规定了当前文档与外部资源的关系，常用于链接样式表，或创建站点图标
- :loudspeaker::loudspeaker::loudspeaker:
  - 可出现在body元素中（不建议），取决于是否有一个body-ok的链接类型ref
  - xhtml1.0中尾部要有一个尾斜杠。
  - 单元素标签
  - dom接口：HTMLLinkElement

- 常用属性:green_book::green_book::green_book:
  - `href`：指定被链接资源的URL（绝对/相对）
  - `rel`：命名链接文档与当前文档的关系，该属性是**链接类型值**，多个值可用空格隔开。
  - `hreflang`：指明被链接资源的语言，只有设置了href属性时才应设置该属性。
  - `title`：在link元素上由特殊语义，不正确使用会导致样式表被忽略，当rel=stylesheet时，定义了首选或备用样式表。
  - `type`：定义链接内容的类型，为**MIME**值，例如text/html。
  - `media`：规定外部资源适用的**媒体类型**，值必须是**媒体查询**。
    - 在html4中值是一组以空白符作为分隔的媒体描述文字
    - html5中属性值扩展为任意类型的媒体查询
  - `sizes`：定义了包含相应资源的可视化媒体的icons的大小，只在rel为icon时使用。
    - `any`：表示图标可按矢量格式缩放到任意大小，例如`image/svg+xml`。
    - 一个由空白分隔的尺寸列表，以`<width in pixels>x<height in pixels>`形式给出，每一个尺寸都要包含在资源里。
  - `disabled`：指示是否应加载所描述的样式表并将其应用于文档，仅针对`rel="stylesheet"`。
    - 指定则在页面加载期间不会加载样式表
    - 值为false或删除该属性则按需加载样式表
    - 一旦加载了样式表，该值更改将不再与`StyleSheet.disabled`属性有关联，而更改此属性的值只是启用/禁用样式表而已。
    - 而`StyleSheet.disabled`属性在值为true时会将样式表从文档的`document.stylesheets`列表中删除，但在切回false时不会自动重新加载样式表。
  - `as`：仅在link元素设置了`rel="preload"`才能使用，规定了加载的内容类型，对于内容的优先级、请求匹配、正确的内容安全策略的选择、正确的accept请求头的设置，该属性是必须的。
    - 值为`audio`,`embed`,`image`,`object`,`script`,`video`等元素应用到对应的各个相应的元素。
    - `fetch`应用到fetch、xhr，需要包含crossorigin属性
    - `font`应用到css font-face
  - `crossorigin`：指定在加载相关图片时是否使用cors，启动cors的图片可在canvas中使用
    - `anonymous`：会发起一个跨域请求但不会发送任何认证信息，如果服务器没有给出原站凭证（未设置`Access-Control-Allow-Origin`http头），图片就会被污染并限制使用，使用其他值默认为anonymous
    - `use-credentials`：发起一个带有认证信息的跨域请求，无凭证会被污染


- 实验:droplet:属性
  - `importance`：指明资源的相对重要性（优先级），当存在`rel="perload"`或`rel="prefetch"`时，才能使用
    - `auto`：表没有偏好，根据浏览器自身确定其优先级
    - `high`：向浏览器表明资源具有高优先级
    - `low`
  - `integrity`：一个用浏览器获取的资源文件的哈希值，验证资源是否被非法篡改。
  - `referrerpolicy`：一个字符串，指示在获取资源时使用哪个引荐来源网址。

- 非标准:fire:属性和已淘汰:zap:属性
  - :fire:：methods, prefetch, target
  - :zap:：charset, rev

### `style`

- 定义：包含文档的样式信息或文档的部分内容，默认为css格式
- 接口：HTMLStyleElement
- 属性
  - type：MIME值，未指定默认为text/css
  - media：规定该样式适用于哪个媒体，取值为css媒体查询，默认为all
  - title：指定可选的样式表
  - scoped：该属性存在则应用于其父元素，否则应用于整个文档，要看浏览器是否支持。

## 内容分区元素

- 含义：允许将文档内容从逻辑上进行组织划分，使用包括页眉（header）、页脚（footer）、导航（nav）和标题等为页面创建明确的大纲，以便区分各个章节内容。

### `header`

- 定义：展示介绍性内容，通常包含一组介绍性的或辅助导航的实用元素。可能包含一些标题元素、logo、搜索框、作者名称等。

- 特性
  - 接受任何flow content的元素，不能作为address、footer、header的子元素。
  - dom接口：HTMLElement
  - 该元素不是分段内容，故不会往大纲中引入新的段落，通常用于包含周围的部分标题（非必须）

### `nav`

- 定义：表示页面的一部分，目的是在当前文档/其他文档中提供导航链接，导航部分常见示例是菜单、目录、索引。
- dom接口：HTMLElement
- 特性
  - 并不是所有链接都必须使用nav元素，只用来将一些热门的链接放入导航栏。
  - 一个网页可含有多个nav元素，例如一个网站导航列表和一个页面导航列表。

### `main`

- 定义：呈现文档的body或应用的主体部分，主体部分由与文档直接相关，或扩展于文档的中心主题、应用的主要功能部分的内容组成。
- dom接口：HTMLElement
- 特性
  - main元素内容应当是独一无二的，任何同时存在于任意一系列文档中的相同重复内容（侧边栏、导航栏、版权、logo、搜索框）都不应该包含在其内部，除非这些为其主要功能。
  - main对文档大纲没有贡献，不会影响dom页面结构，仅有提供信息的作用。

### `article`

- 定义：表示文档、页面、应用或网站的独立结构，成为可独立分配的或可复用的结构。如在发布中，可能是论坛帖子、杂志、新闻、博客、评论、交互式组件或其他独立内容。
- article元素不能为address的子元素
- dom接口：HTMLElement
- 每个article通常包含标题作为子元素
- article嵌套使用时，代表与外层元素有关的文章
- article元素的作者信息通过address提供，不适用于嵌套的article
- article元素的发布日期和时间可通过time元素的pubdate属性表示
- 可使用time元素的datetime属性描述article元素的发布日期和时间

### `section`

- 定义：表示一个包含在html文档中的独立部分，在没有更具体的语义来表示，一般会有一个标题，通过标题辨识每个section。
- 如果元素的内容作为一个独立的有意义的集合，article可能是更好的选择。
- section元素不能是address的子元素。
- dom接口：HTMLElement
- 如果元素可以分为几部分，应该使用article。

### `footer`

- 定义：表示最近一个章节内容或者根节点元素的页脚，通常包含该章节作者、版权或与文档相关的链接等信息。
- footer元素不能是address、header或另一个footer元素的后代元素
- footer元素的作者信息应包含在address中
- dom接口：HTMLElement

### `address`

- 定义：表示其中的html提供了某个人/组织的联系信息。
- 由address中任何形式的内容所提供的联系信息适用于上下文的背景信息，可以是必要的任何一种联系方式，比如真实地址、url、Email、phone、社交账号、地理坐标等。且应包含对应的个人/团体名称
- 可使用的语境有：在文章开头提供商务的联系方式，或者放在article元素内指明文章作者。
- 当表示一个和联系信息无关的任意地址时，请改用p元素
- 不能包含除联系信息之外的任何信息，比如出版日期等。
- 通常address元素放在footer（存在的话）元素中。
- 内部元素不能是address、heading、区块（article、aside、section、nav），header、footer元素。
- dom接口：HTMLElement


### `aside`

- 定义：表示一个和其余页面内容几乎无关的部分，独立于内容，且拆分出来不会影响整体，常为侧边栏或标注框。
- aside不能是address的后代元素
- 不能使用aside去尾随括号内的文本，因为这种文本被认为是主要流内容的一部分。
- dom接口：HTMLElement

### `hgroup`

- 本元素已w3c规范中删除，但仍在whatwg的html版本中，大多数浏览器部分的实现，但其轮廓算法未实现。
- 定义：代表一个段的标题。

### `h1~h6`

- 定义：代表不同级别的六个标题
- 不要作为hgroup的子元素（被废弃）
- 用户代理可以使用标题信息，例如自动构建文档目录。
- 不要为了减小标题的字体而使用低级别的标题，应使用css font-size属性。
- 避免跳过某级标题，始终要从h1开始依次使用
- 使用section时，避免在同一个页面重复使用h1，h1应用于表页面的标题，其他标题从h2开始。
- dom接口：HTMLHeadingElement


## 文本内容

定义：使用其组织在body元素里的块/章节内容，这些元素能够标识内容的宗旨/结构，对可访问性/SEO很重要。

### `div`

- 定义：通用型的流内容容器，不表示任何特定类型的内容，但可将内容分组，从而方便定义样式。
- dom接口：HTMLDivElement

### `p`

- 定义：表示文本的一个段落，通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。
- 使用css margin改变段落间间隙，不要在段落之间插入空的段落元素或br元素。
- dom接口：HTMLParagraphElement

### `hr`

- 定义：表示段落级元素之间的主题转换（场景转换、主题改变），定义为语义上的。
- dom接口：HTMLHRElement
- 常用属性：都不赞同，应使用css

### `ol`

- 定义：表示多个有序列表项，通常渲染为带有编号的列表。
- li元素允许嵌套ol/ul元素
- dom接口：HTMLOListElement
- 常用属性：
  - type：表编号类型，值为`a`,`A`, `i`,`I`,1。除非子元素li中使用不同type，否则其用于整个列表。除非列表序号很重要（比如法律/技术文件条目的引用），否则使用css list-style-type代替。
  - html5新增
    - `reversed`：规定了列表的条目采用倒序
    - `start`：值为整数，规定列表的条目序号的开始值，尽管条目序号可为多种，但所在位数只能是整数，比如想从字母c开始，使用`start="3"`
- 注意：
  - html并没有对ol/ul的深度和次数做限制。
  - ol/ul的不同点在于元素的条目顺序是否有意义。

### `ul`

- 定义：表示一个无序列表/项目符号列表
- 如果至少包含一个li元素，它就是显式内容，否则哈哈。
- dom接口：HTMLUListElement
- 不再使用但还能工作的api
  - type：circle，disc，square，triangle（不是都支持），使用css list-style-type代替

### `li`

- 定义：用于表示列表的条目，必须包含在父元素ul/ol/menu中，在menu/ul中通常用点排列显示。
- dom接口：HTMLLIElement
- 属性：
  - value：表明本li在ol中的序号，只能是数字，即使使用罗马/字母来展示，随后会从设置的值计数，对ul/menu无效。
  - type：废弃的属性，使用css list-style-type代替。

### `dl`

- 定义：是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据（键值对列表）
- 允许0个以上的dt元素，每个dt可跟随0个以上dd元素。
  - 当dt跟随0个dd时，则与后面的dt共用dd
- whatwg允许使用div元素包含每对术语-描述，以便用于样式。
- dom接口：HTMLDListElement

### `dt`

- 定义：用于在一个定义列表中声明一个术语，仅作为dl的子元素出现，通常会跟dd元素，多个连续的dt都由后面的第一个dd元素定义。
- dom接口：HTMLElement

### `dd`

- 定义：用来指明一个描述列表中的术语描述，只能时dl的子元素，必须跟在dt元素后面
- dom接口：HTMLElement

### `figure`

- 定义：代表一段独立的内容，经常与figcaption配合使用，并且作为独立的引用单元。经常是在主文中引用的图片、插图、表格、代码段等，当这部分转移到附录中或其他页面时不影响主体。
- dom接口：HTMLElement

### `figcaption`

- 定义：是与其相关联的图片的说明/标题，用于描述figure里的其他数据，在figure首部/尾部。无该元素表示没有说明/标题。
- dom接口：HTMLElement

### `blockquote`

- 定义：代表其中的文字是引用内容，通常在渲染时该内容会有一定缩进。若引文来源于网络，则可以将原内容的出处url设置在cite属性上，若要以文本形式告知读者引文的出处时，可通过cite元素。
- dom接口：HTMLQuoteElement
- 属性：
  - cite：标注引用的信息源/相关信息的url，常用于描述能够解释引文的上下文/引用的信息。
- 注意：
  - 若要修改引用的缩进，使用css margin属性。
  - 在行内/行间引用较短内容使用q元素。

### `dir`

- 已废弃的元素：被作为一个文件/文件夹的目录容器。

### `pre`

- 定义：表示预定义格式文本。通常按照源文件中的编排，以等宽字体展现，文本中的空白符都会显示出来。
- 为了保证代码里的关闭代码不被浏览器解释为标签，应将`<`字符转义为`&lt;`。
- dom接口：HTMLPreElement
- 废弃且非标准api：
  - cols：定义每行最大字符数，用css代替
  - width：每行最大字符数，但该属性在技术上未实现故无视觉效果，用css代替

## 内联文本语义标签

- 定义：使用html内联文本语义定义一个单词、一行内容、任意文字的语义、结构、样式。

### `b`

- 定义：用于吸引读者的注意到该元素的内容上（特别强调）。不应将其用于显示粗体文字（css font-weight代替）。
- dom接口：HTMLElement
- 使用说明：
  - 应用场景：摘要中的关键字、评论中的产品名称，或其他典型的应该加粗显示的文字。
  - 不要将b元素与strong、em、mark混淆，strong表某些重要性的文本，em强调文本，mark表某些相关性的文本，b元素不传达这样特殊语义信息，仅在没有其他合适元素时使用它（单纯地吸引注意而不增加其重要性）。
  - 不要用b元素标记标题（h1~h6）
  - 通过在b元素添加class属性表示额外的语义信息是一个很好的方式，便于样式处理。
  - 若不是出于语义目的而使用它，显示粗体应使用css font-weight。

### `strong`

- 定义：表示文本十分重要，一般用粗体表示。
- dom接口：HTMLElement
- strong vs b
  - strong是一个逻辑状态，bold是一个物理状态
  - 逻辑状态分离内容和表现形式，允许使用各种方式表达而不仅仅是加粗样式。
  - 物理状态不区分表现形式和内容。
- strong vs em
  - html4中strong简单表示更强的强调，而html5中表示为内容强烈的重要性。
  - em着重强调内容，strong着重内容的重要性。
  - strong和em都可以分别通过嵌套增加相对重要性或强调重点。
- strong vs mark
  - strong用于表重要性，而mark表上下文的相关性。

### `mark`

- 定义：表示为引用或符号目的而标记或突出显示的文本，这是由于标记的段落在封闭上下文中的相关性/重要性造成的。
- dom接口：HTMLElement
- 用法：
  - 用在引用元素中时，通常用于显示有特殊意义的文本但却不在原材料中标记处理，或者显示特殊审查的材料，即使原作者不认为它特别重要。
  - 还用来显示与用户当前活动相关的一部分文档内容，例如用于显示匹配的搜索结果的单词。
  - 不要为了语法高亮而使用它。

### `cite`

- 定义：表示一个作品的引用且需包含作品的标题，这个引用可能是一个根据上下文约定关联引用的元数据缩写。
- dom接口：HTMLSpanElement
- 用法：
  - cite元素使用的语境包括一本书、一个研究性文章、一篇散文、一首诗、一个音乐评分、一首歌等等。
  - 让人注意的是w3c规范表示该引用可以包括作品作者的名字，但whatwg规范却表示禁止包含作者名字。
  - 为了在材料中包含引用的资源，应该在q/blockquote使用cite属性。
  - 默认情况下显示为斜体。

### `em`

- 定义：表示着重强调。多个嵌套层级表示更高级的强调。
- 用法：
  - em元素强调的内容与周围文本形成对照，限制在一个或多个词汇中使用，并影响句子本身的含义。
  - 使用cite元素标记作品的标题，使用i标记语调/气的文本，包括在其他语言中使用斜体情况的单词，使用strong标记比周围内容更重要的文本。
  - 默认情况下显示为斜体。
- i vs em
  - em着重强调，i表示从正常文本中区分出的文字，例如外来词、虚构人物的思想。而作品标题应使用cite。正确使用哪个取决于具体场景。
  - 人/软件在阅读文本时会对斜体字发音使用重读强调。

### `i`

- 定义：用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语、小说中人物的内心活动，常以斜体显示。
- dom接口：HTMLSpanElement
- 用法：
  - 该元素只有在没有更合适的语义元素表示时使用，例如em表强调，strong表重要性，mark表相关性，cite标记著作名，dfn标记术语的定义实例。

### `u`

- 定义：表示一个行内被渲染的非原文的注解。默认显示为实下划线。
- dom接口：HTMLSpanElement
- 用法：
  - 注释拼写错误，例如结合css以红色波浪下划线表示错误，非语义内容请用css表示。
  ```html
    <p>this paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
    <style>
    u.spelling { text-decoration: red wavy underline; }
    </style>
  ```

### `s`

- 定义：表示不再相关或者不再准确的事情，默认渲染为删除线。当表文档编辑时提倡使用del和ins。
- dom接口：HTMLElement

### `q`

- 定义：表示一个短的行内引用，故不要引入换行符，默认渲染为引号。
- dom接口：HTMLQuoteElement
- 属性
  - cite：值为url，指出被引用的文本的源文档/信息，重在解释这个引用的参考/上下文。

### `sup`

- 定义：与主要文本相比，位置更高且更小。
- dom接口：HTMLElement
- 用法：
  - 用于排版目的，例如数学公式或法语缩写。

### `sub`

- 定义：与主要文本相比，位置更低且更小。
- dom接口：HTMLElement
- 主要用于数学/化学公式中。

### `a`

- 定义：用于创建通向其他网页、文件、当前页面的其他位置、Email地址，电话或其他url超链接。
- dom接口：HTMLAnchorElement
- 用法：a元素不能互相嵌套。
- 属性
  - `href`：包含超链接指向的URL或URL片段（哈希标记），url不限于web http，还可以是其他协议file，ftp等，使用`href="#top"`或`href="#"`返回页面顶部（html5新特性）。
  - `target`：指定在何处显示链接资源，取值为`_self`,`_blank`,`_parent`,`_top`。使用时应考虑添加`rel="noopener norefferrer`防止针对window.opener api的恶意行为。
  - `rel`：指定目标对象到链接对象的关系，值为以空格分隔的**列表类型值**。
  - `ping`：包含一个以空格分隔的url列表，当跟随超链接时将由浏览器发送带有正文PING的post请求用于跟踪。
  - html5新增
    - `download`：指示浏览器下载url而不是导航，故将提示用户将其保存为本地文件。若属性有一个值则下载会作为预填充的文件名，对值没有限制（/或\会转为下划线），此属性仅适用于同源URL。尽管需要同源，但可使用`blob:URL`和`data:URL`方便用户下载js生成的内容。

### `span`

- 定义：通用行内容器，无特殊语义。
- dom接口：HTMLSpanElement

### `br`

- 定义：换行回车符号，在写诗或地址很有用。
- dom接口：HTMLBRElement
- 不要用br来增加文本之间的行间隔（使用css margin或p元素）

### `abbr`

- 定义：表示缩写，可以通过可选的title属性提供完整的描述，默认渲染为一个提示当鼠标覆盖时。
- dom接口：HTMLElement

### `small`

- 定义：表示边注释和附属细则，包括版权和法律文本。
- dom接口：HTMLElement

### `time`

- 定义：用来表示机器可读的24小时制时间/公历日期，表示日期也可包含时间和时区。
- dom接口：HTMLTimeElement
- 属性：
  - datetime：表示此元素的时间和日期，并且属性值必须是一个有效的日期格式，若不能被解析为日期则不会有一个关联的时间戳。
  - pubdate：布尔值可省略值，指示元素给出的日期和时间是文档发布的日期。

### `ruby`

- 定义：用来展示东亚文字注音或字符注释。
- dom接口：HTMLElement

### `rb`

- 定义：用于分隔ruby注释的基本文本组件，一个rb应包裹基本文本的每个单独的原子段。
- dom接口：HTMLElement

### `rp`

- 定义：用于为那些不能使用ruby元素展示ruby注解的浏览器，提供随后的圆括号。
- dom接口：HTMLElement

### `rt`

- 定义：用于描述东亚字符的发音。
- dom接口：HTMLElement

### `rtc`

- 定义：包含文字的语义注解，rb元素可以拥有发音和语义注解。
- dom接口：HTMLElement

### `code`

- 定义：呈现一段计算机代码（行内代码），默认以等宽字体显示。
- dom接口：HTMLSpanElement


### `tt`

- 定义：用于给文本排版使其等宽显示，类似电报，***已废弃***

### `dfn`

- 定义：标记被定义的术语，术语的定义应当在p/section/dl中给出。
- dom接口：HTMLElement
- 被定义术语的值有以下规定：
  - 若其有一个title属性，则术语的值就是该属性的值。
  - 若仅包含一个abbr元素且该元素拥有title属性（鼠标覆盖有提示文本），该术语的值就是该属性的值。
  - 此外该元素的文本内容就是该术语的值。

### `data`

- 定义：将一个指定内容和机器可读的翻译联系在一起，但若内容是与时间/日期相关则一定要使用time元素，有一个value属性，指定元素内容所对应的机器可读的数据。
- dom接口：HTMLDataElement

### `bdi`

- 定义：告诉浏览器的双向算法将其包含的文本与周围的文本隔离，当动态插入一些不知书写方向的文本时（如数据库数据）特别有用。
- dom接口：HTMLElement
- 属性dir：决定元素内容的方向，默认为auto，不继承父元素。

### `bdo`

- 定义：用于覆盖当前文本的朝向，使得字符按给定的方向排列，包括一个dir属性决定文本的方向（ltr，rtl）。

### `samp`

- 定义：标识计算机程序输出，默认显示为浏览器缺省的monotype字体。
- dom接口：HTMLElement


### `kbd`

- 定义：表示用户的输入的行内元素，默认以monospace字体显示。
- 用法：
  - 当kbd处于samp中时代表被系统回显的输入。
  - 当kbd包含samp时，该输入是基于系统输出的，比如调用某个菜单项。
  - 当kbd处于另一个kbd中时代表一个实际按键或该输入机制下的某个单位输入。

### `var`

- 定义：表示变量的名称或由用户提供的值。默认渲染为斜体。

### `wbr`

- 定义：表示一个断行的可能，即在文中的一个位置，浏览器可以选择断行，尽管不会在该位置创建断行。

## 图片和多媒体

### `img`

- 用法：
  - src属性是必须的，包含了嵌入图片的路径。
  - alt属性包含一条对图像的文本描述，其不是强制性的，当无法加载图像时会显示alt属性的文本。
  - html标准没有给出需要支持的图像格式列表，每个用户代理支持不同的格式。
  - 当图像加载错误且设置了onerror事件，则会调用该事件，错误发生的情况如下
    - src属性值为空或null
    - src属性的url和用户正在浏览的页面完全相同
    - 图片损坏无法加载
    - 图片元数据（分辨率，宽高）破坏，且未指定宽/高
    - 不支持的图片格式
  - img的display属性默认为inline，但它默认分辨率由原始宽高确定，使得其像inline-block一样有它们的特征。
  - img没有基线，故使用基线垂直时图像底部将会与容器的文字基线对齐。
  - 图像链接：a嵌套一个img
- 属性
  - src：图像的url
  - srcset：以逗号分隔的一个/多个字符串列表，表明一系列用户代理使用的可能的图像
  - alt：定义了备用的文本描述，此对由视力障碍的人有用，当不显示图像时以及图像文件无效时显示。
  - width：图像宽度。
  - height：图像高度，在html5中单位是css像素，html4中既可是像素也可是百分比，只指定width/height中的一个会进行等比缩放
  - usemap：与元素相关联的image map的部分url（以#开始的部分），当img是a/button的后代不能使用该属性。
  - crossorigin：表示是否必须使用cors完成相关图像的抓取，启用cors图像可在canvas中重复使用而不被污染，当未显示使用它默认不适用cors发起请求，可防止在canvas中使用。值如下：
    - anonymous：执行一个跨域请求但未发送证书，若服务器没把证书给源站图像会污染且使用会限制，默认值。
    - use-credentials：一个有证书的跨域请求，若服务器没把证书给源站图像会污染且使用会限制。
  - decoding：提供图像解码方式上的提示。值如下：
    - sync：同步解码图像，用于与其他内容进行粒子化的展示。
    - async：异步解码，以减少其他内容的显示延迟。
    - auto：默认值，由浏览器决定。
  - ismap：布尔值，表示图像是否是服务器map的一部分，若是点击图片的精准坐标将会被发送到服务器。只有在img是一个拥有有效和href属性的a元素的后代时才允许使用。
  - sizes：表示资源大小的以逗号隔开的一个或多个字符串。


### `audio`

- 用法：
  - 可包含多个音频资源，这些音频资源可以使用src属性/source元素进行描述，浏览器会选择最合适的一个。
  - dom接口：HTMLAudioElement
- 属性：
  - src：嵌入的音频url，可以在audio中使用source元素替代该属性指定嵌入的音频。
  - autoplay：布尔值，默认为false。
    - autoplay优先于preload。
  - controls：设置了该属性，浏览器将提供控制面板让用户控制音频的播放。
  - loop：布尔值。
  - muted：是否静音的布尔值，默认为false。
  - volume：音频播放的音量，[0.0, 1.0]。
  - preload：枚举属性，示意浏览器以何种加载方式加载，值如下：
    - none：不会播放音频/节省带宽，音频不会缓存
    - metadata：即使用户可能不会播放音频，但还会获取元数据信息（默认值）。
    - auto：可能会播放音频，即使用户不期望播放也会被加载。
    - 空串类似auto
  - played：一个TimeRanges对象，表示所有已播放的音频片段。
  - buffered：通过该属性获取已缓冲的资源的时间段信息。该属性包含一个TimeRanges对象。

### `video`

- 定义：用于支持文档内的视频播放，也可用于音频内容（audio会在用户体验上更合适）。、
- dom接口：HTMLVideoElement
- 用法：
  - 在video内部的内容是针对浏览器不支持此元素时的降级处理。
  - 浏览器并不是都支持相同的视频格式，故可在source元素中提供多个视频源，浏览器会使用第一个支持的源。
  - 未指定controls属性则不会展示浏览器自带的控件，可使用js和HTMLMediaElement api创建自定义控件。
  - HTMLMediaElement会激活许多不同的事件，便于控制
  - 用css object-position调整视频在元素内部的位置，它可控制视频尺寸适应于元素外框的方式。
  - 展示字幕/标题，可在track元素和webvtt格式基础上用js实现。
  - 若视频的MIME类型设置不正确视频可能不会显示。
- 属性：
  - src：
  - autoplay：布尔值，指定则视频会自动播放且无需停止加载任何数据。禁止视频自动播放应该移除该属性，而不是设置其为false（照样播放），在一些浏览器中若无muted属性，则其不会起作用。
  - currentTime：指示以秒为单位的媒体当前播放位置，可通过设置currentTime指定当前播放位置。媒体正在播放的情况下若缓冲区数据已过期（已播放完），则用户代理可能无法正常拿到数据。使用getStartDate()方法确定媒体时间线起始坐标。
  - duration：指示媒体的持续时间秒，只读属性。若无媒体/失效返回NaN，若无已知终点值为Infinity。
  - poster：一个海报帧的URL，用于在用户播放前播放/跳帧前展示。
  - height/width
  - loop
  - muted
  - played
  - preload
  - buffered
  - controls
  - crossorigin

### `track`

- 定义：该元素指向当用户请求额外数据时浏览器公开的包含定时文本的源文件。当作媒体元素audio/video的子元素使用，允许指定基于时间的数据（字幕）。
- track给媒体添加的数据类型在kind属性中设置，属性值可为subtitles，captions，descriptions，chapters或metadata。
- 一个media元素的任意两个track子元素不能有相同的kind，srclang，label属性。
- 属性：
  - src：
  - kind：定义了texttrack 应该如何使用，默认值为subtitles。
    - subtitles：字幕翻译，以及附加的背景信息
    - captions：提供音频转录/翻译，以及音乐提示/音效，可指定提示音源文件，适用于耳聋/静音用户。
    - descriptions：视频内容的文本描述，适用于失明用户/视频不可见场景。
    - chapters：章节标题
    - metadata：脚本使用的track，对用户不可见。
  - label：给浏览器使用的text track标题。


### `map`  

- 定义：与area元素一起来定义一个图像映射（可点击的链接区域）。
- dom接口：HTMLMapElement
- 属性name：给map一个名字用来查询，必须属性，值不能为空且不能有空格。若有id则值与id一致。
- 空映射不再略过，故img元素会匹配空的map，map元素的默认样式为inline。


### `area`

- 定义：在图片上定义一个热点区域，可以关联一个超链接，仅在map中使用，单标签。
- dom接口：HTMLAreaElement
- 属性：
  - href：值为url。
  - coords：给热点区域设置具体的坐标值，数值意义取决于具体的形状。对于矩形值为两个x,y对（左上，右下），对于圆值为x,y,r（中心坐标，半径），对于多边形为多边形的每个点（x1,y1,x2,y2...）。值为像素，不带单位。
  - shape：相关联的热点区域的形状，支持的值有rect，circle，poly（多边形），default（除定义形状外的区域）。
  - target：在何处显示链接资源。
  - type：指定链接的MIME媒体类型。
  - alt：在未显示图像时的代替文本。只有在href被使用时为必须的。
  - html5属性：
    - download：把超链接用于下载资源
    - hreflang：指明链接资源的语言类型。
    - media：指明链接资源的媒体类型，省略则代表全部类型。例如print and screen。
    - ref：对于包含href属性的锚，指定目标对象与链接的关系。

## 其他内嵌多媒体

### `embed`

- 定义：将外部内容（音视频等）嵌入文档中指定位置，此内容可能由外部app/浏览器插件提供。但大多数浏览器已取消对插件的支持，单标签。
- 属性：
  - width/height：资源显示的宽/高。
  - src：资源的url
  - type：资源的MIME类型。

### `noembed`

- 已废弃，应使用object代替，用于向不支持embed/嵌入式内容的浏览器提供替代内容。

### `object`

- 定义：引入一个外部资源（图片、pdf文档、嵌入的浏览器上下文等）。
- dom接口：HTMLObjectElement
- 属性：
  - height/width：资源显示的css像素高/宽度
  - data：一个合法的url资源地址，data或type至少需要定义一个。
  - type：data指定的资源的MIME类型
  - usemap：指向一个map元素的name值，前面需加#号。
  - html5属性：
    - form：对象元素关联的form元素，取值为同一文档中form元素的id

### `param`

- 定义：为object元素定义参数
- 属性：
  - name：参数的名字
  - value：参数的值



### `picture`

- 定义：通过包0个以上的source元素和一个img元素为不同设备提供图像版本，让浏览器选择最匹配的source元素，若无匹配则选择img元素。
- dom接口：HTMLPictureElement
- 常见使用场景：
  - 艺术指导（图像的修饰）
  - 对不同的浏览器提供不同的格式。
- 用法：
  - 高密度DPI在img中的srcset属性设置
  - 可以在子元素img中使用object-position属性调整元素内图像的位置，用object-fit属性控制图片如何调整大小以适应框架。
- 属性：
  - media：类似媒体查询，若匹配结果为false则跳过
  - type：为source元素的srcset属性指定的资源指定一个MIME类型，若不支持该类型则跳过。

### `source`

- 定义：为picture、audio、video元素指定多个媒体资源，单标签。
- 属性：
  - src
  - srcset
  - type：MIME类型
  - media：媒体查询，只能用在picture元素内部的source元素。

### `iframe`

- 定义：嵌入另外的html内容到当前页面。
- 用法：
  - 每个iframe都有它自己的session历史和document。
  - 内联的框架会被包含在window.frames伪数组中
  - 脚本可通过contentWindow访问内联框架的window对象，contentDocument属性则引用了document对象，在ie8中不支持。
  - 框架内部可通过window.parent引用父窗口对象。
  - 脚本访问必须遵从同源策略，并且无法访问非同源的window对象属性，跨域通信可通过window.postMessage来实现。
  - 可以使用object-position和object-fit来定位、对齐、缩放元素内部的文档。
- 属性：
  - src：使用`about:blank`可嵌入一个遵从同源策略的空白页。
  - height/width：指定frame的高/宽度（css像素/百分比）
  - name：用于定位嵌入的浏览上下文的名称，可用作a/form标签的target属性值，也可用作input/button标签的formtarget属性值，还可用作window.open()的windowName参数值。
  - allow：用于为其指定特征策略（声明哪些功能通过网络是可以被使用的）。
  - allowfullscreen：布尔值，设置为true时可调用requestFullscreen()方法激活全屏模式。这已经被定义为allow="fullscreen"。
  - allowpaymentrequest：布尔值，为true时跨域的iframe可调用payment request api。已经被定义为allow="payment"。
  - referrerpolicy：表示在获取iframe资源时如何发送referrer首部。
  - sandbox：对内容启用一些额外的限制条件。
  - importance
  - html5新增：
    - srcdoc：一段html代码，会被渲染到iframe中，不支持该属性则会渲染src属性表示的内容。

### `applet`

- 已废弃，标志这包含了Java的applet，倾向于使用object元素。


## 脚本

### `canvas`

- 定义：结合canvas scripting api或webgl api绘制图形/动画，双标签。
- dom接口：HTMLCanvasElement
- 用法：
  - 内部可以是没有交互式内容的元素，但a/button/input-checkbox-radio-button元素除外。
  - 应在内部提供替代内容供不支持/禁用该元素的浏览器呈现。
  - 可以使用css更改画布的显示大小，但是在渲染过程中会缩放图像以适合样式大小，最终会导致图像失真。
  - 最好通过直接在元素上指定画布的尺寸，但也可在html/js中设置。
  - canvas画布支持的最大尺寸依赖浏览器，超过最大尺寸会导致画布无法使用。
- 属性：
  - height/width

### `script`

- 属性：
  - html5属性：
    - async：是否允许异步执行脚本，对内联脚本（无src属性）无作用。
  - src：
  - type：定义MIME类型，支持text/javascript，text/ecmascript，application/javascript和application/ecmascript。省略将默认为js，若不是上述类型将会当作数据块而不被执行。type属性为module将被当作js模块。
  - text：用于设置元素的文本内容，在节点插入到dom之后会被解析为可执行代码。
  - crossorigin：将静态资源放在另外一个域名的站点打印错误信息。
  - defer：延迟执行，用来通知浏览器该脚本将在文档完成解析后触发DOMContentLoaded事件前执行，缺少src属性则不起作用。
  - nomoudle：布尔值，标识其在支持es6的浏览器中不执行（用于提供回退版本，多重保险）。故在支持type为module的浏览器将会忽略该属性所在的元素。
  - referrerpolicy

### `noscript`

- 定义：若页面的脚本类型不受支持/脚本被关闭，则在该元素定义替代内容会被显示。

## 编辑标识

- 能标示出某个文本被更改过的部分。

### `del`

- 定义：表示一些被从文档中删除的文字，可以在需要显示修改记录或源代码差异的情况下使用这个标签。默认渲染为删除线。
- dom接口：HTMLModElement
- 属性：
  - cite：提供一个url，其中的资源作为解释修改的原因。
  - datetime：说明修改的时间和日期，格式要符合规范（不规范将无意义）。

### `ins`

- 定义：表示被插入文档中的文本，默认渲染为下划线。
- dom接口：HTMLModElement
- 属性：
  - cite
  - datetime

## 表格内容

### `table`

- 定义：表示二维表格数据。
- dom接口：HTMLTableElement
- 用法：
  - 允许的内容依次为：一个可选的caption元素，0个以上的colgroup元素，一个可选的thead元素，0个以上的tbody元素/一个以上的tr元素，一个可选的tfoot元素。
  - 所有的属性都用css代替为佳。
  - th元素的scope元素指定标题范围可改善用户体验，在复杂表中很有用。

### `caption`

- 定义：展示表格的标题，常作为第一个元素出现。
- dom接口：HTMLTableCaptionElement
- 用法：
  - 当table是caption的父元素，caption是figure元素唯一的后代元素时，应使用figcaption替代。

### `colgroup`

- 定义：用来定义表中的一组列表。
- 属性：
  - span：值为正数，指示colgroup元素跨越的连续列数，不存在默认值为1。此属性对关联的css样式/单元格无影响，若colgroup中有一个以上col元素，则不允许使用span属性。

### `col`

- 定义：用于定义所有公共单元格上的公共语义，用于配合css样式化，只能在无span属性的colgroup元素上使用。
- 属性：
  - span：值为正数，表示col元素跨越的连续列数，不存在默认为1。

### `thead`

- 定义：表格的列头的行。

### `th`

- 定义：表头单元格，由scope和header属性准确定义的。
- 属性：
  - colspan：表示单元格可以扩展成多少列，默认为1。
  - rowspan：表示单元格可以扩展成多少行，默认为1。
  - scope：定义了表头元素关联的单元格，值为：
    - row：表头关联一行中所有的单元格。
    - col：表头关联一列中所有的单元格。
    - rowgroup：表头属于一个行组并与其中所有单元格相关联。
    - colgroup：表头属于一个列祖并与其中所有单元格相关联。
    - auto

### `tbody`

- 定义：封装了一组表行，表示表的主体。
- 用法：
  - tbody表示的内容若超过页面，可能因每个页面内容有所不同，而thead/tfoot则每页相同/似。
  - 与thead/tfoot/caption不同，允许多个该元素，可根据需要进行样式化。

### `tfoot`

- 定义：封装了各列的汇总行。

### `tr`

- 定义：表的行。可与th和td混合使用。

### `td`

- 定义：一个包含数据的表格单元格。
- 属性：
  - colspan
  - rowspan
  - headers：包含一个空格分隔的字符串列表，对应th元素的id。

## 表单

### `form`

- 定义：表示包含提交信息的交互式控件的文档部分。
- dom接口：HTMLFormElement
- 用法：
  - 可使用:valid和:invalid css伪类对form元素进行样式设置。
- 属性：
  - action：处理表单信息的程序URL，可被button/input元素的formaction属性覆盖。
  - enctype：当method属性值为post时，他就是将表单内容提交给服务器的MIME类型，该值可以被button/input元素的formenctype覆盖，值为：
    - application/x-www-form-urlencoded：默认值
    - multipart/form-data：用于type属性值为file的input元素。
    - text/plain
  - method：提交表单的http方式，该值可被button/input-submit-image元素中的formmethod属性覆盖，值为：
    - post：表单数据会包含在表单体内然后发给服务器。
    - get：表示数据会附加在action属性的url中，并以？为分隔符组合发送给服务器。
    - dialog：当表单在dialog元素内时使用，以在提交时关闭对话框。
  - target：提交表单之后在哪里显示相应。值为_self,_blank,_parent,_top。该值可以被button/input-submit-image元素的formtarget属性覆盖。
  - accept：包括服务器能接受的内容类型（html5不再使用），用input元素的accept属性替代。
  - accept-charset：一个空格分隔的列表，包括服务器支持的字符编码，将以该顺序使用，默认值为UNKNOWN。
  - html5新增：
    - autocomplete：用于指示input元素是否能够拥有一个默认值，此默认值由浏览器自动补全，可以被属于该表单子元素的autocomplete属性覆盖。值为：
      - off，在每一输入域，用户必须显示输入一个值，或者document以他自己的方式提供自动补全，浏览器不会自动补全输入。
      - on：浏览器根据用户之前在表单输入的值自动补全。
    - novalidate：布尔值，指提交表单是否处于未验证状态，未指定默认为验证通过的，可被button/input-submit-image元素的formnovalidate属性覆盖。

### `fieldset`

- 定义：用来对表单的控制元素进行分组。
- 属性：
  - html5新增：
    - disabled：布尔值，代表表单控制元素会继承该属性（比如禁止编辑，不接受任何事件），但其首个可选的legend元素除外。
    - form：规定fieldset所属的form表单，属性值与所属form的id相同。
    - name：控制元素分组的名称。

### `legend`

- 定义：代表一个用于表示他的父元素内容的标题，为fieldset第一个子元素。

### `input`

- 定义：用于为基于web的表单创建交互式控件来接受用户数据。
- dom接口：HTMLInputElement
- 属性：
  - type：呈现的控件类型。
    - button
    - text：单行文本，换行会自动移除。
    - password：一个值被遮盖的单行文本字段，使用maxlength指定输入值最大长度。任何涉及密码的敏感信息都必须通过https和服务器连接。
    - radio：单选按钮，必须使用value属性定义被提交的值，checked指示控件是否被选择，同个按钮组中name属性需一致。
    - checkbox：复选框，必须使用value属性定义控件被提交时的值，checked属性指示控件是否被选择。
    - file：选择文件，值会被提交到服务器。
    - hidden：不显示在页面上的控件，值会被提交到服务器。
    - image：图片提交按钮，必须是哦那个src属性以及alt属性，可使用height/width定义图片大小。
    - reset：重置为缺省值。
    - submit：表单提交按钮。
    - 
    - html5新增：
      - number：用于输入浮点数的控件。
      - color：指定颜色控件
      - date：指定输入日期控件
      - datetime-local：用于输入日期时间控件，不包含时区。
      - time：输入不含时区的时间控件。
      - month：用于输入年月的控件，不带时区。
      - week：输入一个由星期-年组成的日期。
      - url：换行会自动移除，可使用伪类。
      - email：可使用:valid和:invalid伪类。
      - tel：电话号码控件，换行会自动移除文本，可应用:valid和:invalid伪类。
      - search：用于输入搜索字符串的单行文本，换行会将输入的值自动删除。
      - range：用于输入不精确值的控件，未指定使用缺省值：min=0,max=100,value=min+(max-min)/2,step=1。
  - autocomplete：自动填充
  - autofocus：自动聚焦，布尔值
  - disabled：禁用
  - form：表示属于的表单元素，值为form的id
  - list：指向一个id为list属性值的datalist元素，datalist为这个元素提供建议值。


### `label`

- 定义：表示用户界面某个元素的说明。
- 用法：
  - 将label和input放在一起（for属性需绑定input的id，或者input在label内部）的好处：
    - 标签文本会与相应文本视觉/编程上相关联，即当用户点击表单输入时，屏幕可以读出标签。
    - 可以单击关联的标签来激活/聚焦input，以增加命中区域。
    - 当点击相关联的label时，相应的input的点击事件也会触发。
- 属性：
  - for：标记form相关元素的id
  - form：表示label关联的form元素id

### `textarea`

- 定义：表示一个多行纯文本编辑控件。
- 属性：
  - cols：文本域的可视宽度，默认为20。
  - rows：元素输入文本的行数。
  - disabled：禁用文本域。
  - name：元素的名称。
  - readonly：不允许用户修改元素内的文本，但能点击/选择文本。
  - selectionEnd：当前选中的最后一个字符的索引。
  - selectionStart
  - html5新增：
    - placeholder：向用户提示可以在控件中输入的内容。
    - autocomplete：自动填充，可继承属性。
    - autofocus：页面加载完毕后是否自动给本元素添加焦点。
    - form：指定关联的表单id。
    - required：提示该值必填。
    - selectionDirection：文本选中的方向。
    - maxlength：允许输入的最大字符宽度。
    - minlength
    - spellcheck：是否作拼写检查。
    - wrap：指定文本换行的方式，比如hard（在文本达到最大宽度时自动换行），soft（到达最大宽度不会换行，默认值）。

### `select`

- 定义：表示一个选项菜单，菜单内选项为option元素，可由optgroup进行分组。
- 属性：
  - autocomplete：
  - autofocus：布尔值，在一个页面中，只允许一个对象有这个属性。
  - disabled
  - form
  - multiple：布尔值，标记select是否多选，默认为false
  - name：控件名称
  - size：若控件显示为滚动列表框，则其表示为控件中同时可见的行数。
  - html5新增：
    - required：规定值不能为空。
- 用法：
  - 可使用css来美化select元素，例如使用appearance属性删除默认外观。但这些属性会在不同浏览器产生不同效果，故而应考虑使用其他库构建窗体小部件。



### `optgroup`

- 定义：用于创建包含在一个select元素中的一组选项。
- dom接口：HTMLOptGroupElement
- 用法：
  - 内部只允许option元素，且optgroup不能被嵌套。
- 属性：
  - disabled
  - label：必须属性，表示选项组的名字，用于区分不同的组。

### `datalist`

- 定义：表示在其他控件中可以选择的允许/推荐的选项，可包含option元素，id可映射input元素的list属性。

### `option`

- 定义：用于select/optgroup/datalist元素中包含的项，可以在弹出窗口/列表项中表示菜单项，双标签。
- dom接口：HTMLOptionElement
- 属性：
  - disabled：选项不可选，渲染为灰色，且不接受任何浏览器事件。
  - label：表示选项含义的文本，未定义则值为元素内部文本内容。label属性为包含短的标签设计的，通常用在层级菜单中，而value属性描述更长的标签，用在单选按钮附近。
  - selected：存在表示该选项被选中。
  - value：代表提交给表单的值，省略则从内部文本获取。

### `button`

- 定义：表示一个可点击的按钮，可使用css改变默认样式。
- dom接口：HTMLButtonElement
- 属性：
  - disabled：表示用户不能与button交互
  - name：与表单数据一起提交
  - type：button的类型
    - submit：表示将表单提交到服务器，此为默认属性
    - reset：重置表单为初始值
    - button：无默认行为，普通按钮
    - menu：打开一个由menu元素进行定义的弹出菜单。
    - value：button的初始值，该值会被提交到服务器。
  - html5新增：
    - autofocus
    - form
    - formaction：表示程序处理button提交信息的url
    - formenctype：若属性type=submit，则该值指定提交到服务器的内容类型。
      - application/x-www-form-urlencoded
      - multipart/form-data
      - text/plain
    - formmethod：当其为submit时表示提交表单使用的http方法。
    - formnovalidate：若为submit时指定表示提交不需要验证。
    - formtarget：数据相应的窗口类型。
- 用法：
  - button比input更容易定义样式，可在内部加入其他html内容，以及伪元素来实现复杂效果，而input只支持文本内容。
  - 若按钮不是用于将数据提交到服务器，需将type属性设为button。
  - Firefox默认情况下会在页面加载时让button处于动态禁用状态，可将autocomplete设置为off禁用该特性。
  - 点击button会将焦点放在它上面，这和input-button-submit一致。

### `meter`

- 定义：用来显示已知范围的标量值/分数值。
- 属性：
  - value：表示当前的数值，若设置了max/min，必须处于它们之间，默认为0，若不在它们之间则等于最近一端的值。当值在[0,1]之外必须定义max/min。
  - min：最小边界值，默认为0。
  - max：最大边界值，默认为1。
  - low：定义了低值区间的上限值，若value在min-low之间会显示低值视觉效果，默认为最小值。
  - high：定义了高值区间的下限值，同low
  - optimum：用来指示最优值，必须在正确范围内，当使用了low-high时，它指明了哪一个取值范围最佳。
  - form

### `progress`

- 定义：用来显示一项任务的完成进度，默认渲染为一个进度条。
- 属性：
  - max：描述了这个任务一共需要完成多少工作。
  - value：指定已完成的工作量，未设置则进度为不确定的，既不会显示任何进度。
- 用法：
  - 最小值总是0，且不允许min属性，可以使用-moz-orient指定是水平/垂直显示。
  - :indeterminate伪类可以匹配不确定进度条，若要改为不确定状态必须使用removeAttribute()方法删除value属性。

### `output`

- 定义：表示计算/用户操作的结果
- 属性：
  - for：其他元素id的空格分隔列表，表示这些元素为计算提供/影响了输入值。
  - form：
  - name

## 交互元素

- 定义：提供有助于创建交互式用户界面对象的元素。

### `menu`

- 定义：表示用户可以执行/激活的一组命令，包括列表菜单/上下文菜单。
- 属性：
  - type：表示要声明的菜单类型。
    - context：表示通过另一个元素激活的一组命令，可以是button的菜单属性引用的按钮菜单，或具有contextmenu属性的元素的上下文菜单。
    - toolbar：表示由一系列用于用户交互命令组成的工具栏，可以说li元素的无序列表形式或其他流式内容。
- 用法
  - 元素内部允许0个以上的li/srcipt/template元素以及其他流式内容。
  - menu和ul都表示无序项目列表，但ul包含要显示的项目，menu表交互式项目。
  - 上下文菜单可包含多个menuitem元素，menu元素，以及分割线hr。

### `menuitem`

- 定义：已废弃元素，生产一个弹出菜单。

### `dialog`

- 定义：表示一个对话框/其他交互式组件。‘
- 属性open：表示对话框是激活的和能互动的。未设置时对话框不应显示给用户。
- 用法：
  - form可在此元素中使用，但需指定属性method=dialog，当提交表单时对话框的returnValue属性将等于表单中被使用的提交按钮的value。
  - :backdrop伪元素可用于更改dialog背景元素样式，例如当对话框激活时可调暗周围的背景，当使用HTMLDialogElement.showModal()才会绘制backdrop背景。

### `details`

- 定义：创建了一个公开小部件，其中信息只有在小部件切换到打开状态时才可见，可使用summary提供摘要/标签。默认渲染为小三角形旋转方向。
- 用法：
  - 目前没有内置的方法实现关闭打开的切换状态。
  - details支持toggle事件，当其状态在打开/关闭之间发生变化时，该事件就会触发。
- 属性open：指示元素内容是否可见，默认为false。

### `summary`

- 定义：用作details元素的内容摘要/标题/图例，单击该元素可切换details的打开/关闭状态。
- 用法：
  - summary只能用作details的第一个子元素，非第一个子元素则会使用默认字符串作为标签。

## web组件

- 定义：允许开发者创建自定义元素。

### `template`

- 定义：该元素是一种保持html的机制，不会在加载页面时立即呈现，但可以随后在运行时使用js实例化。

### `slot`

- 插槽，参考vue

### `element`

- 已废弃。

### `content`

- 已废弃。

### `shadow`

- 已废弃


## 过时和弃用的元素

### acronym

允许作者明确声明一个字符序列，构成一个单词的首字母缩写/简略语，**推荐使用abbr元素**。

### applet

### basefont

用来设置文档的默认字体大小，使用font可以相对默认字体大小进行变化，**应使用css来替代**。

### bgsound

是IE浏览器中设置网页背景音乐的元素。

### big

使字体加大一号，应使用css属性代替。

### blink

使包含在其中的文本闪烁。

### center

块级元素，该元素的整个内容相对于其上级元素水平居中显示。

### command

用来表示一个用户可以调用的命令。

### content

### dir

作为文件/文件夹的目录容器，**使用ul代替**。

### element

### font

定义该内容的字体样式。

### frame

定义了一个特定区域，另一个文档可在里面展示，**建议使用iframe替代**。

### frameset

一个用于包含frame的元素。

### image

曾为实验性元素，从未实现过，**建议使用img元素**。

### isindex

显示一个对话框，提示用户输入单行文本，**可用input代替**。

### keygen

为了方便生成密钥材料和提交作为form的公钥，用于设计基于web的证书管理系统。

### listing

呈现开始和结束标签之间的文本，而不解释中间的html并使用等宽字体，**可用pre/code替代**。

### marquee

插入一段滚动的文字。

### menuitem

### multicol

一个实验性元素，用于允许多列布局，未在浏览器中实现，**应使用div和css实现**。

### nextid

用于使next网页设计工具为其锚点生成自动的name标签。

### nobr

阻止文本自动拆分成新行。

### noembed

### noframes

提供了在不支持frame元素的浏览器中显示的内容。

### plaintext

将开始标记后面的所有内容呈现为原始文本，忽略后面的任何html。

### shadow

用作shadom dom插入点。

### spacer

向页面插入间隔

### strike

在文本上放置删除线，**建议使用del/s替代**。

### tt

电报文本元素，产生一个内联元素，使用浏览器内置的monotype字体展示。

### xmp

标签之间的内容不会被当作文档内容解析，而会使用等宽字体之间呈现。



##
🔔    :bell: 
📢    :loudspeaker:
📕	:closed_book:
📗	:green_book:
📙	:orange_book:
📘	:blue_book:
🔑	:key:
⚠️	:warning:
⭕️	:o:
✅	:white_check_mark:
☑️	:ballot_box_with_check:
✔️	:heavy_check_mark:
❌	:x:
❎	:negative_squared_cross_mark:
⁉️	:interrobang:
❓	:question:
❗️	:exclamation:
1️⃣	:one:
🔟	:keycap_ten:
🈲	:u7981:
🚩	:triangular_flag_on_post:
💧	:droplet:   我用其代指实验性api
🔥	:fire:
🎨	:art:
⚡️	:zap:
