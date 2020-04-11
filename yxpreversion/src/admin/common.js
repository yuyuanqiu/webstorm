let courses = [{
    top_level: "外语",
    second: [{
      name: "大学英语",
      children: [
        "大学英语（一）",
        "大学英语（二）",
        "大学英语（三）",
        "大学英语（四）"
      ]
    }]
  },
  {
    top_level: "理学",
    second: [{
        name: "数学",
        children: [
          "高等数学A1",
          "高等数学A2",
          "线性代数",
          "概率论与数理统计",
          "集合与图论"
        ]
      },
      {
        name: "物理",
        children: [
          "大学物理（一）",
          "大学物理（二）",
          "大学物理实验",
          "概率论与数理统计",
          "集合与图论",
          "电路分析",
          "数字逻辑"
        ]
      }
    ]
  },
  {
    top_level: "计算机",
    second: [{
        name: "程序设计与开发",
        children: [
          "面向对象方法学",
          "C语言程序设计",
          "C++语言程序设计",
          "Java程序设计与开发",
          "汇编语言",
          "Android应用程序开发实战"
        ]
      },
      {
        name: "计算机基础",
        children: [
          "信息技术基础",
          "计算机导论",
          "电子技术基础",
          "软件工程学基础",
          "操作系统原理",
          "计算机组成原理",
          "数据库原理",
          "计算机系统结构"
        ]
      },
      {
        name: "计算机安全",
        children: [
          "云应用与开发实战",
          "云计算导论",
          "C++语言程序设计",
          "Java程序设计与开发",
          "汇编语言",
          "Android应用程序开发实战"
        ]
      },
      {
        name: "算法",
        children: ["数据结构与算法"]
      }
    ]
  },
  {
    top_level: "文史哲",
    second: [{
        name: "文学",
        children: [
          "文学概论",
          "中国古代文学",
          "中国现代文学",
          "中国当代文学",
          "外国文学",
          "比较文学",
          "民间文学",
          "儿童文学",
          "影视文学",
          "美学",
          "中国古代文论",
          "西方文论",
          "中国文化概论"
        ]
      },
      {
        name: "政治学",
        children: [
          "政治学理论",
          "马克思主义哲学",
          "马克思主义政治经济学概论",
          "科学社会主义概论",
          "马克思主义中国化研究",
          "中国政治思想史",
          "西方政治思想史",
          "中国革命史",
          "中华人民共和国史",
          "国际共产主义运动史",
          "思想政治教育原理"
        ]
      }
    ]
  }
];

let status = [{
    value: "申请",
    comment: "",
    disabled: false,
    active: 1,
  },
  {
    value: "待审核",
    comment: "",
    disabled: false,
    active: 2
  },
  {
    value: "审核通过",
    comment: "",
    disabled: false,
    active: 3,
  },

  {
    value: "审核未通过",
    comment: "",
    disabled: false,
    active: 3,
  }
];

let applyers = [
  '贾演',
  '贾源',
  '贾代儒',
  '贾代修',
  '贾敷',
  '贾敬',
  '贾赦',
  '贾政',
  '贾敏',
  '林如海',
  '林黛玉',
  '贾敕',
  '贾效',
  '贾敦',
  '贾珍',
  '贾琏',
  '贾琮',
  '贾珠',
  '贾宝玉',
  '贾环',
  '贾瑞',
  '贾璜',
  '贾珩',
  '贾㻞',
  '贾珖',
  '贾琛',
  '贾琼',
  '贾璘',
  '贾元春',
  '贾迎春',
  '贾探春',
  '贾惜春',
  '喜鸾',
  '贾蓉',
  '贾兰',
  '李纨',
  '贾蔷',
  '贾菌',
  '贾芸',
  '贾芹',
  '贾萍',
  '贾菖',
  '贾菱',
  '贾蓁',
  '贾藻',
  '贾蘅',
  '贾芬',
  '贾芳',
  '贾芝',
  '贾荇',
  '贾芷',
  '贾葛',
  '王熙凤',
  '史鼐',
  '史鼎',
  '史湘云',
  '王子腾',
  '王子胜',
  '王仁',
  '薛蟠',
  '薛蝌',
  '薛虬',
  '薛宝钗',
  '薛宝琴',
  '妙玉',
  '秦可卿',
  '香菱',
  '甄士隐',
  '甄宝玉',
  '晴雯',
  '绮霰',
  '麝月',
  '檀云',
  '秋纹',
  '碧浪',
  '茜雪',
  '佳蕙',
  '抱琴',
  '司棋',
  '绣橘',
  '待书',
  '翠墨',
  '入画',
  '彩屏',
  '紫鹃',
  '雪雁',
  '春纤',
  '鸳鸯',
  '琥珀',
  '珍珠',
  '玻璃',
  '翡翠',
  '鹦鹉',
  '银蝶',
  '文杏',
  '金钏',
  '玉钏',
  '绣鸾',
  '绣凤',
  '彩云',
  '彩霞',
  '素云',
  '翠缕',
  '瑞珠',
  '姣杏',
  '贾雨村',
  '邢岫烟',
  '宝蟾',
  '夏金桂',
  '茗烟',
  '李贵',
  '锄药',
  '墨雨',
  '伴鹤',
  '引泉',
  '挑芸',
  '双瑞',
  '双寿',
  '王荣',
  '钱槐',
  '杏奴',
  '柳湘莲',
  '王信',
  '霍启',
  '封肃',
  '冷子兴',
  '周瑞',
  '李守中',
  '冯渊',
  '王成',
  '智能',
  '余信',
  '秦钟',
  '赖二',
  '詹光',
  '戴良',
  '钱华',
  '单聘仁',
  '吴新登',
  '秦业',
  '冯唐',
  '张友士',
  '戴权',
  '牛清',
  '牛继宗',
  '柳彪',
  '柳芳',
  '陈翼',
  '陈瑞文',
  '马魁',
  '马尚',
  '侯晓明',
  '侯孝康',
  '石光珠',
  '蒋子宁',
  '谢鲸',
  '戚建辉',
  '裘良',
  '冯紫英',
  '陈也俊',
  '卫若兰',
  '水溶',
  '净虚',
  '智善',
  '云光',
  '夏守忠',
  '吴天佑',
  '卜固修',
  '山子野',
  '林之孝',
  '程日兴',
  '昭容',
  '彩缤',
  '花自芳',
  '卜世仁',
  '倪二',
  '王短腿',
  '方椿',
  '胡斯来',
  '王济仁',
  '蒋玉菡',
  '傅试',
  '傅秋芳',
  '茗玉',
  '王君效',
  '金彩',
  '金文翔',
  '嫣红',
  '赖尚荣',
  '邢忠',
  '李纹',
  '李绮',
  '胡君荣',
  '乌进孝',
  '单大良',
  '赵国基',
  '佩凤',
  '偕鸾',
  '张华',
  '俞禄',
  '秋桐',
  '潘又安',
  '翠云',
  '邢德全',
  '文花',
  '圆信',
  '智通',
  '孙绍祖',
  '王一贴',
  '宝珠',
  '娇杏',
];


// 造句子
function getContent(count) {



  let uni_4 = []


  for (let i = 0; i < count; i++) {

    let uni_arr = []

    let a_arr = ['5', '6', '7', '8']
    let b_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    uni_arr.push(a_arr[Math.floor(Math.random() * 4)])

    uni_arr.push(b_arr[Math.floor(Math.random() * b_arr.length)])
    uni_arr.push(b_arr[Math.floor(Math.random() * b_arr.length)])
    uni_arr.push(b_arr[Math.floor(Math.random() * b_arr.length)])

    let uni = '\\u' + uni_arr.join("")
    // console.log(uni)

    let l = unescape(uni.replace(/\\u/g, '%u'))
    // console.log(l)

    uni_4.push(l)




  }

  let content = uni_4.join('')
  // console.log(content)

  return content



}


function getChapter() {
  let chapter = []

  let random = Math.floor(Math.random() * 10 + 1)

  for (let i = 0; i < random; i++) {

    let obj = {}
    obj.title_num = getContent(4);
    // console.log(obj.title_num)
    obj.title_content = getContent(20)
    // console.log(obj.title_content)

    let random = Math.floor(Math.random() * 12 + 1)

    let lesson = []

    for (let i = 0; i < random; i++) {

      let obj_inner = {}
      obj_inner.title_num = getContent(4);
      // console.log(obj_inner.title_num)
      obj_inner.title_content = getContent(20)
      // console.log(obj_inner.title_content)

      lesson.push(obj_inner)



    }

    obj.lessons = lesson




    chapter.push(obj)



  }

  console.log(chapter)

  return chapter
}

getChapter()



let chapters = [{
    title_num: "第一章",
    title_content: "大数据计算技术概述",
    lessons: [{
        title_num: "第一小节",
        title_content: "课程简介"
      },
      {
        title_num: "第二小节",
        title_content: "大数据计算概论（上）"
      },
      {
        title_num: "第三小节",
        title_content: "大数据计算概论（下）"
      }
    ]
  },
  {
    title_num: "第二章",
    title_content: "大数据计算系统",
    lessons: [{
        title_num: "第一小节",
        title_content: "大数据计算系统"
      },
      {
        title_num: "第二小节",
        title_content: "数据存储系统"
      },
      {
        title_num: "第三小节",
        title_content: "数据处理系统"
      },
      {
        title_num: "第四小节",
        title_content: "数据处理系统（续）"
      },
      {
        title_num: "第五小节",
        title_content: "数据应用系统"
      }
    ]
  },
  {
    title_num: "第三章",
    title_content: "数据采集方法",
    lessons: [{
        title_num: "第一小节",
        title_content: "系统日志数据采集"
      },
      {
        title_num: "第二小节",
        title_content: "网络数据采集"
      }
    ]
  },
  {
    title_num: "第四章",
    title_content: "数据清洗与规约方法",
    lessons: [{
        title_num: "第一小节",
        title_content: "脏数据类型及处理方法"
      },
      {
        title_num: "第二小节",
        title_content: "数据噪声处理方法"
      },
      {
        title_num: "第三小节",
        title_content: "数据集成方法"
      },
      {
        title_num: "第四小节",
        title_content: "数据规约方法"
      },
      {
        title_num: "第五小节",
        title_content: "数据建模方法"
      }
    ]
  },
  {
    title_num: "第五章",
    title_content: "数据分析算法",
    lessons: [{
        title_num: "第一小节",
        title_content: "C4.5算法"
      },
      {
        title_num: "第二小节",
        title_content: "K-均值算法"
      },
      {
        title_num: "第三小节",
        title_content: "SVM算法"
      },
      {
        title_num: "第四小节",
        title_content: "Apriori算法"
      },
      {
        title_num: "第五小节",
        title_content: "kNN算法"
      },
      {
        title_num: "第六小节",
        title_content: "PageRank算法"
      }
    ]
  },
  {
    title_num: "第六章",
    title_content: "文本读写技术",
    lessons: [{
        title_num: "第一小节",
        title_content: "读取文本文件"
      },
      {
        title_num: "第二小节",
        title_content: "读取CSV文件"
      },
      {
        title_num: "第三小节",
        title_content: "写入文本文件"
      },
      {
        title_num: "第四小节",
        title_content: "其他操作"
      }
    ]
  },
  {
    title_num: "第七章",
    title_content: "数据处理技术",
    lessons: [{
        title_num: "第一小节",
        title_content: "数据合并技术"
      },
      {
        title_num: "第二小节",
        title_content: "数据转换技术"
      },
      {
        title_num: "第三小节",
        title_content: "数据转换技术(续)"
      }
    ]
  },
  {
    title_num: "第八章",
    title_content: "数据分析技术",
    lessons: [{
        title_num: "第一小节",
        title_content: "Numpy工具包"
      },
      {
        title_num: "第二小节",
        title_content: "Numpy工具包：基本运算"
      },
      {
        title_num: "第三小节",
        title_content: "Pandas工具包"
      },
      {
        title_num: "第四小节",
        title_content: "Python Scikit-learn"
      },
      {
        title_num: "第五小节",
        title_content: "Python NLTK 自然语言处理入门"
      }
    ]
  },
  {
    title_num: "第九章",
    name: 9,
    title_content: "大数据计算技术概述",

  },
];

function setDate() {
  let month_random = Math.ceil(Math.random() * 3);
  if (month_random < 10) {
    month_random = "0" + month_random;
  }
  let day_random = Math.ceil(Math.random() * 30);

  if (day_random < 10) {
    day_random = "0" + day_random;
  }

  return "2020-" + month_random + "-" + day_random;
}

export function autoCreatedCourse(count) {

  function unique(arr) {
    return Array.from(new Set(arr))
  }

  console.log(unique(applyers))

  localStorage.setItem('app', unique(applyers))


  let coursesss = [];



  for (let i = 0; i < count; i++) {
    let top_level_random = Math.floor(Math.random() * courses.length);

    let top_level = courses[top_level_random];
    let top_level_name = top_level.top_level;

    let second_level_random = Math.floor(
      Math.random() * top_level.second.length
    );

    let second_level = top_level.second[second_level_random];

    let second_level_name = second_level.name;

    let course_random = Math.floor(
      Math.random() * second_level.children.length
    );

    let course = second_level.children[course_random];

    let applyer = applyers[Math.floor(Math.random() * applyers.length)];

    let date = 1;


    let course_item = Object.assign({}, {
      top_level: top_level_name,
      second_level: second_level_name,
      name: course,
      applyer: applyer,
      id: Math.floor((Math.random() + 1) * 1000000000),
      status: status,
      bg_url: require('assets/img/course_cover/course_cover_' + Math.ceil(Math.random() * 90) + '.png'),
      des: "本专业培养具备良好的政治理论素养、思想道德素质和科学文化素质，既能在学 校和科研机构从事本专业的教学、研究工作，又能在党政机关和企事业单位从事以本专业为基础 的宣传、组织、管理、思想政治工作的复合型人才",
      apply_date: setDate(),
      current_status: status[Math.floor(Math.random() * 4)],
      comment: "",
      time_range: [],
      time_week: '',
      time_week_all: [
        '1-2课时每周',
        '2-3课时每周',
        '3-4课时每周',
        '4-5课时每周',
        '5-6课时每周'
      ],
      resource: '',
      resources: [],
      chapters: getChapter(),
    });

    coursesss.push(course_item);
  }
  console.log(coursesss);




  // 4E00-9FA5






  return coursesss;
}





export let a = [{
    top_level: '外语',
    title_big_big: require("assets/img/home_title_big_big/1.png"),
    big_course: {
      name: '西方思想经典',
      first_lesson: {
        title: 'Idealism 柏拉图的理念论',
        time: '6\'8"',
      },
      others_lesson: [{
          title: 'Bacon 培根的认识论',
          name: '6\'8"',
        },
        {
          title: 'Descartes 笛卡尔的哲学',
          name: '5\'58"',
        },
        {
          title: 'Subjectivism 主观主义',
          name: '7\'21"',
        }
      ]
    },
    course_list: [{
        name: "大学英语词汇解析",
        school: "华中科技大学",
        people: "110219",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png")
      },
      {
        name: "英汉互译方法与技巧",
        school: "南京大学",
        people: "218856",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "20天玩转金融英语",
        school: "MOOC考培",
        people: "217",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "英语语法与句子写作",
        school: "集美大学",
        people: "40403",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "英语语音",
        school: "中国地质大学（武汉）",
        people: "55923",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "从0到20000+词汇速记营",
        school: "MOOC考培",
        people: "276647",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "口语与演讲",
        school: "西北农林科技大学",
        people: "57081",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "英国文学导读",
        school: "华中农业大学",
        people: "12077",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '计算机',
    title_big_big: require("assets/img/home_title_big_big/2.png"),
    big_course: {
      name: '软件测试',
      first_lesson: {
        title: 'Bug故事',
        time: '8\'9"',
      },
      others_lesson: [{
          title: 'PIE模型',
          name: '7\'55"',
        },
        {
          title: '测试术语',
          name: '8\'38"',
        },
        {
          title: 'Fault反思',
          name: '9\'50"',
        }
      ]
    },
    course_list: [{
        name: "DIY智慧小屋—带你玩转物联网",
        school: "浙江大学",
        people: "20445",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "人工智能：模型与算法",
        school: "浙江大学",
        people: "23367",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "大学计算机",
        school: "北京理工大学",
        people: "127779",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "计算机二级Office极速通关",
        school: "MOOC考培",
        people: "2494",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "大学计算机—计算思维导论",
        school: "哈尔滨工业大学",
        people: "20416",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "数据库系统（上）：模型与语言",
        school: "哈尔滨工业大学",
        people: "21472",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "计算机二级7天训练营Word专题【拼团0.99元】",
        school: "MOOC考培",
        people: "14829",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "计算机网络",
        school: "哈尔滨工业大学",
        people: "45612",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '理学',
    title_big_big: require("assets/img/home_title_big_big/3.png"),
    big_course: {
      name: '线性代数',
      first_lesson: {
        title: '高斯消元法与阶梯型',
        time: '16\'38"',
      },
      others_lesson: [{
          title: '齐次线性方程组',
          name: '5\'52"',
        },
        {
          title: '集合的乘积和基数',
          name: '4\'49"',
        },
        {
          title: '逆映射',
          name: '16\'42"',
        }
      ]
    },
    course_list: [{
        name: "概率论与数理统计",
        school: "重庆大学",
        people: "31291",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "生物学概念与途径",
        school: "北京大学",
        people: "6503",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "数学建模",
        school: "华中农业大学",
        people: "36234",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "大学物理—电磁学",
        school: "北京理工大学",
        people: "17181",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "走进性科学",
        school: "福建师范大学",
        people: "13025",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "大学物理（热学、振动波、光学、近代物理）",
        school: "东北大学",
        people: "12061",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "高等数学——微积分（2）",
        school: "山东大学",
        people: "50833",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "动物生理学",
        school: "华中农业大学",
        people: "7763",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },

    ]
  },
  {
    top_level: '经济学',
    title_big_big: require("assets/img/home_title_big_big/4.png"),
    big_course: {
      name: '统计学',
      first_lesson: {
        title: '非概率抽样的应用',
        time: '8\'48"',
      },
      others_lesson: [{
          title: '方差标准差',
          name: '7\'10"',
        },
        {
          title: '统计量抽样分布',
          name: '9\'47"',
        },
        {
          title: '评价估计量标准',
          name: '7\'51"',
        }
      ]
    },
    course_list: [{
        name: "信息素养：效率提升与终身学习的新引擎",
        school: "四川师范大学",
        people: "17307",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "Mini CFA 精品课",
        school: "MOOC考培",
        people: "636",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "金融学",
        school: "西南财经大学",
        people: "25926",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "会计学原理",
        school: "江西财经大学",
        people: "52705",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "管理沟通：思维与技能",
        school: "哈尔滨工业大学",
        people: "24278",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "经济学思维方式",
        school: "西安交通大学",
        people: "20646",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "CFA一级备考私教课",
        school: "MOOC考培",
        people: "33",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "经济心理学",
        school: "中央财经大学",
        people: "10222",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '医药卫生',
    title_big_big: require("assets/img/home_title_big_big/5.png"),
    big_course: {
      name: '妇产科护理学',
      first_lesson: {
        title: '骨盆、骨盆底及邻近的器官',
        time: '9\'52"',
      },
      others_lesson: [{
          title: '妊娠诊断',
          name: '14\'17"',
        },
        {
          title: '分娩机制',
          name: '10\'17"',
        },
        {
          title: '产褥期管理',
          name: '9\'0"',
        }
      ]
    },
    course_list: [{
        name: "病理生理学",
        school: "中南大学",
        people: "55365",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "针灸学导论",
        school: "北京中医药大学",
        people: "18873",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "生物化学与分子生物学",
        school: "华中科技大学",
        people: "25871",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "医学免疫学",
        school: "山东大学",
        people: "24005",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "病理学",
        school: "华中科技大学",
        people: "53233",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "生活药学",
        school: "福建师范大学",
        people: "18170",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "营养与健康",
        school: "南京大学",
        people: "41031",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "人格与精神障碍——学做自己的心理医生",
        school: "暨南大学",
        people: "9474",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '文学文化',
    title_big_big: require("assets/img/home_title_big_big/6.png"),
    big_course: {
      name: '诺贝尔文学奖经典作品研读',
      first_lesson: {
        title: '20世纪技术革命与现代主义的兴起',
        time: '13\'43"',
      },
      others_lesson: [{
          title: '《魔山》与第一次世界大战',
          name: '7\'42"',
        },
        {
          title: '赛珍珠的中国文学世界',
          name: '10\'42"',
        },
        {
          title: '福克纳小说的基本主题：失落的世界',
          name: '10\'6"',
        }
      ]
    },
    course_list: [{
        name: "中国饮食文化",
        school: "华中农业大学",
        people: "32222",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "走近中国优秀传统文化",
        school: "南京大学",
        people: "32462",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "中国现当代散文研究",
        school: "福建师范大学",
        people: "8126",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "中国古代文学",
        school: "福建师范大学",
        people: "40471",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "古代汉语",
        school: "武汉大学",
        people: "26093",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "鲁迅十五讲",
        school: "温州大学",
        people: "20628",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "文化创意产业",
        school: "福建师范大学",
        people: "10202",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "新媒体用户分析",
        school: "华中科技大学",
        people: "9807",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '工学',
    title_big_big: require("assets/img/home_title_big_big/7.png"),
    big_course: {
      name: '建筑结构设计',
      first_lesson: {
        title: '桁架结构体系、 拱式结构体系',
        time: '17\'11"',
      },
      others_lesson: [{
          title: '网架结构体系',
          name: '15\'41"',
        },
        {
          title: '概率极限状态设计方法',
          name: '22\'24"',
        },
        {
          title: '单向板与双向板',
          name: '22\'54"',
        }
      ]
    },
    
    course_list: [{
        name: "消防系统工程与应用",
        school: "金陵科技学院",
        people: "5694",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "营养与健康讲座",
        school: "福建农林大学",
        people: "10653",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "电路",
        school: "西安交通大学",
        people: "39434",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "信号与系统",
        school: "东南大学",
        people: "10424",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "电工技术与电子技术（一）（电工学 上）",
        school: "中国矿业大学",
        people: "41049",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "模拟电子技术",
        school: "北京交通大学",
        people: "30523",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "模拟电子技术基础",
        school: "华中科技大学",
        people: "17454",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "信号与系统",
        school: "北京交通大学",
        people: "28354",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '艺术设计',
    title_big_big: require("assets/img/home_title_big_big/8.png"),
    big_course: {
      name: 'Photoshop设计精讲精练',
      first_lesson: {
        title: '工作区和工作流程',
        time: '14\'35"',
      },
      others_lesson: [{
          title: '画笔工具组和绘画',
          name: '11\'2"',
        },
        {
          title: '色彩基础和吸管工具组',
          name: '10\'39"',
        },
        {
          title: '拾色器和色彩空间',
          name: '13\'48"',
        }
      ]
    },
    course_list: [{
        name: "影视鉴赏",
        school: "江西财经大学",
        people: "23522",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "PS教程超级合辑【1000集】",
        school: "MOOC考培",
        people: "1717",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "设计的力量",
        school: "湖南大学",
        people: "21140",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "数码单反摄影基础",
        school: "江西师范大学",
        people: "21990",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "形体美学",
        school: "福建师范大学",
        people: "21556",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "服装艺术传播与创新设计",
        school: "中国传媒大学",
        people: "14789",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "PS大型原创案例合辑【300+集】",
        school: "MOOC考培",
        people: "626",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "生活中的自制乐器与演奏",
        school: "华中师范大学",
        people: "3916",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '心理学',
    title_big_big: require("assets/img/home_title_big_big/9.png"),
    big_course: {
      name: '压力与情绪管理',
      first_lesson: {
        title: '没有压力何来空气？',
        time: '8\'49"',
      },
      others_lesson: [{
          title: '没有压力何来动力-佛洛依德自我防御机制',
          name: '7\'27"',
        },
        {
          title: '没有压力何来动力-马斯洛自我实现人格特征？',
          name: '7\'29"',
        },
        {
          title: '压力易感和压力耐受',
          name: '8\'51"',
        }
      ]
    },
    course_list: [{
        name: "心理学与生活",
        school: "南京大学",
        people: "545551",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "心理咨询的理论与方法：会谈技巧",
        school: "南京大学",
        people: "24787",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "爱情心理学",
        school: "武汉理工大学",
        people: "64136",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "婚恋-职场-人格",
        school: "武汉理工大学",
        people: "97429",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "好心态如何自己造—心理健康教育",
        school: "湖南师范大学",
        people: "11871",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "创新创业中的消费心理洞察",
        school: "福建师范大学",
        people: "5525",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "走近儿童的心理世界",
        school: "浙江大学",
        people: "20019",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "大学生心理学",
        school: "中央财经大学",
        people: "10382",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '法学',
    title_big_big: require("assets/img/home_title_big_big/10.png"),
    big_course: {
      name: '民事诉讼法',
      first_lesson: {
        title: '民事诉讼',
        time: '11\'26"',
      },
      others_lesson: [{
          title: '公开审判制度',
          name: '11\'35"',
        },
        {
          title: '级别管辖与地域管辖概述',
          name: '14\'10"',
        },
        {
          title: '共同诉讼人',
          name: '14\'47"',
        }
      ]
    },
    course_list: [{
        name: "创业法学",
        school: "江西财经大学",
        people: "16482",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "思想道德修养与法律基础",
        school: "南开大学",
        people: "15118",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "中国近代史纲要",
        school: "南开大学",
        people: "24449",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "犯罪心理学",
        school: "西南政法大学",
        people: "27359",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "合同法基础",
        school: "西南大学",
        people: "13604",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "医事与法律的对话",
        school: "东南大学",
        people: "4034",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "互联网创新创业中知识产权素养培养",
        school: "福州大学",
        people: "1504",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "消费者保护法",
        school: "西南大学",
        people: "3225",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
    ]
  },
  {
    top_level: '教育教学',
    title_big_big: require("assets/img/home_title_big_big/11.png"),
    big_course: {
      name: '金羽飞扬——世界冠军的羽毛球课堂',
      first_lesson: {
        title: '羽毛球的起源与发展',
        time: '11\'48"',
      },
      others_lesson: [{
          title: '场地规则介绍',
          name: '11\'30"',
        },
        {
          title: '技术讲解：正反手握拍、中场站位及准备姿态、颠球训练',
          name: '6\'19"',
        },
        {
          title: '为科学讲堂：梦想的力量！',
          name: '9\'27"',
        }
      ]
    },
    course_list: [{
        name: "教师如何做研究",
        school: "北京大学",
        people: "19811",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "思维导图的教学应用",
        school: "爱课程",
        people: "31390",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "教师法律风险防范",
        school: "爱课程",
        people: "5917",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "翻转课堂教学法",
        school: "北京大学",
        people: "20442",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "智慧课堂教学",
        school: "爱课程",
        people: "11872",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "学前儿童健康教育",
        school: "南京师范大学",
        people: "34719",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "太极拳文化与功法习练",
        school: "武汉理工大学",
        people: "14137",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "中学生物学教学设计",
        school: "华中师范大学",
        people: "4497",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },

    ]
  },
  {
    top_level: '农林科技',
    title_big_big: require("assets/img/home_title_big_big/12.png"),
    big_course: {
      name: '现代农业推广学',
      first_lesson: {
        title: '农业科技成果的概念、类型及特点',
        time: '8\'46"',
      },
      others_lesson: [{
          title: '农民的个性心理及其应用',
          name: '8\'35"',
        },
        {
          title: '农民行为改变的动力与阻力互作模式',
          name: '4\'54"',
        },
        {
          title: '农业推广沟通的要素和程序',
          name: '5\'56"',
        }
      ]
    },
    course_list: [{
        name: "动物组织胚胎学",
        school: "华中农业大学",
        people: "5553",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "农业气象学",
        school: "福建农林大学",
        people: "7722",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "园林树木学",
        school: "华中农业大学",
        people: "10151",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "家畜育种学",
        school: "华中农业大学",
        people: "3739",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "农业昆虫学（上）",
        school: "西北农林科技大学",
        people: "3186",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "兽医外科手术学",
        school: "华中农业大学",
        people: "3628",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "植物营养学",
        school: "华中农业大学",
        people: "5785",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      },
      {
        name: "园林树木栽培学",
        school: "华中农业大学",
        people: "4338",
        title_bg: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 88) + ".png"),
      }
    ]
  },

]