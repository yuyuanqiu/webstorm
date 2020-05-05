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

export let applyers = [
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

export function setDate() {
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
      // chapters: getChapter(),
      chapters: chapters
    });

    coursesss.push(course_item);
  }
  console.log(coursesss);




  // 4E00-9FA5






  return coursesss;
}





export let home_lessons = [{
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

export let second_level_res = [{
    name: "外语",
    children: [
      "全部",
      "听力口语",
      "语法阅读",
      "写作翻译",
      "文学与语言学",
      "专门用途英语",
      "综合语种",
      "跨文化交际",
      "对外汉语",
      "大学英语"
    ]
  },
  {
    name: "计算机",
    children: ['程序设计与开发', '数据库', '计算机网络', '算法', 'web安全']
  },
  {
    name: "理学",
    children: [
      "数据分析",
      "数学",
      "物理",
      "化学",
      "天文学",
      "地理科学",
      "生物科学",
      "大气与海洋"
    ]
  },
  {
    name: "经济管理",
    children: [
      "经济",
      "金融",
      "电商与贸易",
      "会计",
      "管理",
      "图书情报",
      "创新创业",
      "思维力"
    ]
  },
  {
    name: "文史哲",
    children: ["文字文化", "新闻传播", "哲学", "历史"]
  },
  {
    name: "艺术设计",
    children: [
      "设计",
      "艺术学",
      "美术学",
      "戏剧与影视",
      "设计学",
      "音乐与舞蹈"
    ]
  },
  {
    name: "心理学",
    children: [
      '基础心理学',
      '生理心理学',
      '认知心理学',
      '比较心理学',
      '社会心理学',
      '应用心理学'
    ]
  },
  {
    name: "医药卫生",
    children: [
      "基础医学",
      "临床医学",
      "公共卫生",
      "口腔医学",
      "中医医药学",
      "药学",
      "护理学",
      "健康"
    ]
  },
  {
    name: "法学",
    children: ["法学", "思政", "社会"]
  },
  {
    name: "教育教学",
    children: [
      "教学方法",
      "教学能力",
      "信息化教学",
      "职业素养",
      "学科教育",
      "素质教育",
      "体育教育",
      "学前教育"
    ]
  },
  {
    name: "农林园艺",
    children: ["植物", "动物", "生态"]
  }
]

export let spe_course = [{
    name: "大学英语自学课程（上）",

    school: "北京科技大学",

    teacher: "张敬源",
    count: "194597",
    week: "7",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },

  {
    name: "英语语法与写作",

    school: "暨南大学",

    teacher: "朱湘军",
    count: "56051",
    week: "8",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {
    name: "国际交流英语",

    school: "哈尔滨工业大学",

    teacher: "周之南",
    count: "115796",
    week: "8",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {

    name: "英语演讲",

    school: "集美大学",

    teacher: "蒋联江",
    count: "103028",
    week: "2",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },

  {


    name: "英汉互译方法与技巧",

    school: "南京大学",

    teacher: "姚媛",
    count: "223579",
    week: "3",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {
    name: "英美诗歌名篇选读",

    school: "北京联合大学",

    teacher: "黄宗英",
    count: "6275",
    week: "5",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {
    name: "大学英语综合课程(一)",

    school: "国防科技大学",

    teacher: "林骊珠",
    count: "11120",
    week: "6",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {
    name: "大学英语综合课程（二）",

    school: "国防科技大学",

    teacher: "林骊珠",
    count: "9490",
    week: "7",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {
    name: "西方现代化视野下的英美文学",

    school: "西南交通大学",

    teacher: "李成坚",
    count: "1212",
    week: "7",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },
  {
    name: "英语有效表达：语言、修辞与逻辑",

    school: "电子科技大学",

    teacher: "廖敏",
    count: "9490",
    week: "7",
    icon: require("assets/img/home_title_bg/" + Math.ceil(Math.random() * 50) + ".png")
  },

]

export let article_title = [
  "typescript基础一览，助你从入门到放弃！",

  "Spring Boot 和 Spring Cloud 应用内存如何管理？",

  "又来一个库，WebView",

  "RecyclerView 多布局连贯滑动",

  "前端算法与数据结构面试：底层逻辑解读与大厂真题训练",

  "Vue 3.0 全家桶抢先体验",

  "跟着'呆妹'来学webpack(基础篇)",

  "【AMA】我是染陌，你有什么问题想问我吗？",

  "当浏览器全面禁用三方 Cookie",

  "今年行情这么差，到底如何进大厂？",

  "Vue3 尝鲜 Composition-Api 自定义 Hook + 新型状态管理模式",

  "去大厂，你就应该了解前端监控和埋点!",

  "记一次偶然的头条前端面试",

  "一位前端小姐姐的五万字面试宝典",

  "40.vue全解(起手式1)",

  "我，要把这 200 万张页面切出来上线",

  "几个非常有意思的javascript知识点总结",

  "🍥 9张看面试题也写不出来的CSS图案！",

  "很用心的为你写了 9 道 MySQL 面试题",

  "10种跨域解决方案（附终极大招）",

  "[译]掌握 JavaScript 面试：什么是函数式编程",

  "Vue开发掘金WebApp(仿掘金App)",

  "2020年前端面试复习必读文章【超百篇文章/赠复习导图】",

  "2万字 | 前端基础拾遗90问",

  "一个00后的中专生是怎么在深圳拿到15K（Java后端开发）",

  "好消息，vue 3 进入 beta 阶段！",

  "2020年了，还不会内网穿透吗？",

  "Vue3 的响应式和以前有什么区别，Proxy 无敌？",

  "从零搭建中后台框架的核心流程",

  "第一弹！安排！安利10个让你爽到爆的IDEA必备插件！",

  "H5 直播的疯狂点赞动画是如何实现的？(附完整源码)",

  "【 FlutterUnit 食用指南】 开源篇",

  "7个很棒的JavaScript产品步骤引导库，不信你用不上",

  "Vue3 跟着尤雨溪学 TypeScript 之 Ref 类型从零实现",

  "《前端那些事》从0到1开发工具库",

  "《大前端进阶 安全》系列 HTTPS详解（通俗易懂）",

  "十道大厂面试题(含答案)总结",

  "你也许不知道的javascript高级函数",

  "这些优化技巧可以避免我们在 JS 中过多的使用 IF 语句",

  "easyexcel快速入门",

  "别再问我 new 字符串创建了几个对象了！我来证明给你看！",

  "写给初中级前端的高级进阶指南",

  "前端下载文件与读取文件内容（多种类型的文件）",

  "花式解说防抖函数debounce的实现",

  "抖音、腾讯、阿里、美团春招服务端开发岗位硬核面试（上）",

  "前端代码优化实用篇",

  "Java工程师成神之路 | 2020正式版",

  "目标是最完善的微前端解决方案 - qiankun 2.0",

  "面试官：如何用Redis实现分布式锁？",

  "挑战全网最幽默的Vuex系列教程：第一讲 Vuex到底是什么鬼",

  "教你如何写初/高级前端简历【赠简历导图】",

  "10问10答，带你快速入门前端算法",

  "超简易实现H5、微信小程序中二维码海报的制作与分享🔥（进来看看呗~）",

  "阿里巴巴技术专家三画：如何画好架构图（文末赠书）",

  "MySQL必知必会—视图和存储过程篇",

  "快手，字节跳动，百度，美团Offer之旅(Android面经分享)| 掘金技术征文",

  "Electron 低延迟视频流播放方案探索",

  "近万字新手 chrome 扩展开发简单入门",

  "一款使用RxJava+Retrofit+MVP的快播App开源啦！",

  "前端必看的8个HTML+CSS技巧",

  "Redux系列之分析中间件原理（附经验分享）",

  "Disruptor为何这么快",

  "讲真，这两款idea插件，能治愈你英语不好的病",

  "【译】Typescript 3.8 常用新特性一览",

  "【图文并茂，点赞收藏哦！】重学巩固你的Vuejs知识体系",

  "明天全国哀悼日，一段css让全站变灰",

  "（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系",

  "给你一份详细的CSS布局指南，请查收",

  "react/antd -- 让antd的跑马灯支持自轮播的时间",

  "MySQL再发一弹，不要再说不会了！",

  "Vue 的计算属性真的会缓存吗？（保姆级教学，原理深入揭秘）",

  "别高估自己，这道题，有点难！",

  "仿淘宝我的订单：RecyclerView嵌套RecyclerView，解决刷新图片闪烁问题",

  "移动端适配方案小结",

  "轻轻一扫，立刻扣款，付款码背后的原理你不想知道吗？|原创",

  "Vue 进阶必学之高阶组件 HOC（保姆式教学，冲击20k必备）",

  "【新鲜面经】技术面试并不难，掘友经验带上岸 | 掘金技术征文展（第二弹）",

  "用 serverless 与 typescript 开发第一个 Koa 应用",

  "一枚前端开发组组长的述职报告",

  "写给女朋友的中级前端面试秘籍（含详细答案，15k级别）",

  "State of Vue（尤雨溪 4 月 16 日 PPT 汉化版，可下载）",

  "Java8的Stream流真香，没体验过的永远不会知道",

  "Go语言的GPM调度器是什么？",

  "艺术喵 2 年前端面试心路历程（字节跳动、YY、虎牙、BIGO）| 掘金技术征文",

  "深度探索 Gradle 自动化构建技术（二、Groovy 筑基篇）",

  "前端新手的初级前端面试学习笔记(有答案",

  "有些我自己觉得可以)",

  "暗黑模式？安卓适配一波",

  "为什么 Vue 中不要用 index 作为 key？（diff 算法详解）",

  "Java网络编程--Netty入门",

  "2020三元同学春招阿里淘系、阿里云、字节跳动面经 & 个人成长经验分享 | 掘金技术征文",

  "高频组件你还在import吗？太low了",

  "深入理解快速排序和STL的sort算法",

  "Boa: 在 Node.js 中使用 Python",

  "10个Vue开发技巧助力成为更好的工程师",

  "【新鲜面经】 四月面试不用慌，掘友攻略来帮忙| 掘金技术征文展（第一弹）",

  "「颜值即正义」那些管UI小姐姐要来的网站",

  "IntelliJ IDEA 常用插件一览，让效率成为习惯",

  "用动画和实战打开 React Hooks（一）：useState 和 useEffect",

  "在小白眼里TypeScript对于JavaScirpt的意义",

  "一年半，三本，收到30K+的offer，你也可以",

  "前端错误监控指南",

  "面试官在“逗”你系列：不借助第三变量交换两个变量值的方案你有几种？",

  "图解Spring解决循环依赖♻️",

  "深度探索 Gradle 自动化构建技术（一、Gradle 核心配置篇）",

  "在阿里我是如何当面试官的（持续更新）",

  "奇淫巧技，springboot 全局日期格式化处理，有点香！",

  "阿里大牛：选择大于努力，所以MVC、MVP、MVVM，我到底该怎么选？",

  "看完这篇 Session、Cookie、Token，和面试官扯皮就没问题了",

  "为什么说for...of是JS中的一颗宝石",

  "事务处理不当，线上接口又双叒内存泄漏了！（附图解问题全过程）",

  "《吐血整理》10种延迟任务的实现方式汇总！附详细代码（强烈推荐）",

  "从源码看redis的AOF持久化机制",

  "面试官：你了解过移动端适配吗？",

  "书到用时方恨少，一大波JS开发工具函数来了",

  "前端达人都在学习的组件协作模式 - Bit Components",

  "漫谈Java线程状态",

  "《包你懂系列》Java 字符串常量池漫游指南（图文并茂）",

  "《吐血整理》系列 大厂前端组件库工具集合（PC端、移动端、JS、CSS等）",

  "vue制作抓娃娃机",

  "2020年的12个Vue.js开发技巧和窍门",

  "作为毕业生的我在钉钉这一年的成长之路",

  "IntelliJ Idea 2020.1 正式发布，官方支持中文了",

  "如何设计实现 PC 站点搭建系统 - Schema",

  "LeetCode 爬楼梯算法题的解法及优化",

  "Taro Next H5 跨框架组件库实践",

  "使用 RestTemplate 进行第三方Rest服务调用",

  "看了这篇MySQL，开发功力又升级！",

  "给自己提了个bug：setInterval卡顿问题",

  "第四期|前端如何搞规，P4-P7的认知（第四届前端早早聊大会感悟）",

  "除了代码还要有生活（500块打造出租屋，安排）",

  "requestAnimationFrame，终结定时器动画时代！",

  "【北京/深圳/厦门/新加坡】字节跳动业务中台团队招聘服务端工程师啦，一起来做更有挑战的事吧！",

  "摩比秀换装游戏系统设计与实现",

  "【小分享】JavaScript的小历史",

  "【适合收藏】让你减少加班的15条高效JS技巧！",

  "面经合集 | 面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~",

  "非科班二本前端大厂面试的心路历程和总结（腾讯、头条、阿里、京东） | 掘金技术征文",

  "【译】Typescript 3.7 常用新特性一览",

  "redux、mobx、concent特性大比拼",

  " 看后生如何对局前辈",

  "求你了，别再问我的TCP三次握手和四次挥手",

  "阿里前端攻城狮们写了一份前端面试题答案，请查收",

  "手写一个Promise/A+",

  "完美通过官方872个测试用例",

  "阿里P7：你了解路由吗？",

  "从0到1实现一个react+express+ts+docker部署的前后端项目",

  "26 个 CSS 面试的高频考点助力金三银四",

  "数据库还可以这么看？（Android Studio 4.1 新特性）",

  "我在掘金这3年 - 如何给飞行中的飞机换引擎",

  "「直击面试」 搞定计算机网络，这些问题还没有我答不出来的",

  "MySQL中的事务和MVCC",

  "猛男必看！我用不足 20 行代码代替了 react-redux",

  "前端运维部署那些事",

  "反思｜Android 事件拦截机制的设计与实现",

  "(面经分享）二本，两年curd经验，疯狂复习拿下阿里P6|掘金技术征文",

  "倒计时的那些坑",

  "基于vue-cli3搭建一个后台管理系统框架",

  "Elasticsearch项目实战，商品搜索功能设计与实现！",

  "【思维导图】前端开发-巩固你的JavaScript知识体系",

  "Redis学习一：Redis两种持久化机制",

  "异步编程二三事 | Promise/async/Generator实现原理解析 | 9k字",

  "2020年4月大厂腾讯前端面经分享",

  "适合前端开发 和UI 设计的20多个最佳 ICON 库",

  "ZooTeam 前端周刊｜第 78 期",

  "又是一年春招时，用你的面试经验换大奖 | 掘金技术征文（内含OPPO Reno3 、Airpods、天猫精灵等130+奖品）",

  "在Fiber架构中，React为什么使用和如何使用单链表",

  "Android画板 半透明画笔 笔迹叠加效果",

  "一个奇怪的MySQL慢查询，打懵了一群不懂业务的DBA！",

  "字节跳动面试官—麻烦你搞个方法出来🌈使得以下程序最后能输出 success",

  "记一次移动端H5开发",

  "为什么说 Vue 的响应式更新精确到组件级别？（原理深度解析）",

  "骚年，请不要手敲 template 了",

  "第四期 | 前端的规划如何落地",

  "HTTP协议之发送和响应消息重点——网络基础知识（一）",

  "[译] 如何更新 package.json 中的依赖项",

  "面试官：怎么用Zk（Zookeeper）实现实现分布式锁呀？",

  "重磅！知名百度第三方软件Pandownload被查，作者被抓，大厂该注意什么？",

  "一个lock锁就可以分出低中高水平的程序员对问题的处置方式",

  "读《三元-JS灵魂之问》总结",

  "给自己的一份原生JS补给(上)",

  "全网最详bpmn.js教材-Color篇",

  "Python量化交易进阶讲堂-创建自定义量化回测框架",

  "面试官：看到你简历上写着会Vue?",

  "前端开发中实用的工具方法",

  "在Vue.js中编写更好的v-for循环的6种技巧",

  "50行实现Node.js多进程分页爬虫",

  "第四期 | 技术Leader软技能总结（个人主观）",

  "组件化 开发小程序中的一些思考🐂",

  "[万字长文]百度和好未来面试经含答案 | 掘金技术征文",

  "淘系前端校招负责人直播答疑文字实录",

  "你知道什么是call、apply、bind？",

  "React 16.8.6 版本存在内存泄露",

  "DevEco Toolkit使用指南--平行视界",

  "杭州前端面试通关新手入门指南（大佬请绕道） | 掘金技术征文。",

  "Vue实现的聊天系统可线上访问了",

  "Java虚拟机--Java运行时数据区",

  "😀前端入门操作系统知识，这一篇就够啦！",

  "Web 视频播放的那些事儿",

  "不吹牛逼，撸个注解有什么难的",

  "springboot答应我一定要学会admin后台监控好吗",

  "项目不知道如何做性能优化？不妨试一下代码分割",

  "类型即正义：TypeScript 从入门到实践（三）：类型别名和类",

  "恕我直言，我怀疑你并不会生成随机数",

  "人人都该具备封装思维：Taro+Es6+Promise+Ts简易构建微信小程序的全局请求方法",

  "《调教命令行07》压缩解压（有64KB彩蛋）",

  "带你深度解锁Webpack系列(基础篇)",

  "记好这 24 个 ES6 方法，用来解决实际开发的 JS 问题",

  "【Flutter小技巧】一行代码 全灰致敬",

  "超级简短的 Svelte 框架入门教程，仅需十条推文",

  "换坑备货之性能优化篇",

  "字节跳动面试官：请你实现一个大文件上传和断点续传",

  "《吐血整理》系列 大厂前端必备工具集合（抓包、调试、Mock数据等等）",

  "IntelliJ IDEA 2020.1首个稳定版重磅发布！",

  "一文读懂JS中类、原型和继承",

  "《大前端进阶 Node.js》系列 P6必备脚手架/CI构建能力（下）",

  "老大说：谁要再用double定义商品金额，就自己收拾东西走",

  "分享一个vue+element的后台项目模板优化",

  "Gradle 与 Android 构建入门",

  "带你深度解锁Webpack系列(优化篇)",

  "艰难用echarts模拟甘特图😭，直到我发现了dhtmlxGantt",

  "关于@ResponseBody 默认输出的误区",

  "全面让你了解和打造自己的自定义滚动条（提供组件",

  "字节跳动今日头条前端面经（4轮技术面+hr面）",

  "阿里前端攻城狮们又写了一份面试题答案，请查收|掘金技术征文",

  "💗前端需要了解的计算机网络知识， 这一篇就够了！(图文并茂，万字长文，点赞收藏哦！)",

  "前端工程师的 LeetCode 之旅 -- 周赛 184",

  "compose是不是可以这样理解",

  "JavaScript Visualized: Promises & Async/Await",

  "【译】Angular最佳实践",

  "Elasticsearch快速入门，掌握这些刚刚好！",

  "深入理解HTTP协议，巩固HTTP知识体系——长文，可收藏阅读",

  "深入浅出Vue实例事件方法（简单易学）",

  "监听一个DOM元素大小变化",

  "京喜小程序的高性能打造之路",

  "个人吐血系列-总结MySQL",

  "如何获取微信文章封面和标题",

  "favicon摸鱼工具开发0.2版本",

  "[译] 如何使用 HTML tabindex 属性",

  "springboot + aop + Lua分布式限流的最佳实践",

  "五分钟看懂 Nginx 负载均衡",

  "作者的新书《图解数据结构与算法》上市了，全彩印刷！",

  "谁要是再敢用Map传参，我过去就是一JIO",

  "号外号外",

  " 使用 vue 的最佳规范 !!!",

  "又一批长事务，P0故障谁来背锅？",

  "Springboot 2.0打包与自定义launch.script",

  "TypeScript 基础",

  "深入探索 Android 内存优化（炼狱级别）",

  "《大前端进阶 Node.js》系列 P6必备脚手架/CI构建能力（上）",

  "浅谈怎么利用Async/Await处理错误",

  "进入大厂的面试经验（P7）",

  "带你深度解锁Webpack系列(进阶篇)",

  "Flutter 状态管理 0x00 - 基础知识及 State.setState 背后逻辑",

  "转行学前端的第 10 天 : 学习 CSS 文本格式",

  "前端规范的一些理解",

  "天马，跨终端搭建页面，你说了才算",

  "Drag",

  "drag",

  "drag！拽出哔哩哔哩侧边导航组件",

  "TCP、UDP、Socket、HTTP网络编程面试题（总结最全面的面试题！！！）",

  "前端进阶算法4：链表原来如此简单（+leetcode刷题）",

  "这 10 个技巧让你成为一个更好的 Vue 开发者",

  "高级前端开发者必会的34道Vue面试题解析（三）",

  "「面试题」20+Vue面试题整理(持续更新)",

  "腾讯IMWeb团队前端面经（4轮面+hr面）",

  "前端技术百问",

  "在 Android 11 及更高版本系统中处理可空性",

  "JavaScript中的变量提升",

  "小兵的故事|前端成长规划",

  "预测最近面试会考 Cookie 的 SameSite 属性",

  "JVM从入门到入土之实战G1垃圾回收器(二)",

  "精读《@types react 值得注意的 TS 技巧》",

  "Now in Android #15 —— 最新 Android 知识分享",

  "（4.2万字🔥🔥🔥重启2020）“从零到部署”Vue全栈电商应用系列教程---正式完结",

  "JavaScript系列： 一、手撕JS中的深浅拷贝",

  "如何用10行代码让app全局置灰",

  "三幅图弄懂EventBus核心原理",

  "从解压一个 zip 文件开始 来看浏览器里的数据操作",

  "【你应该了解的】抽象语法树AST",

  "【纯干货】Node.js eventloop + 线程池源码分析（建议细看）",

  "我去，还在这样读写 excel 这也太低效了吧！",

  "ES6系列之项目中常用的新特性",

  "非严格模式 🆚 严格模式的区别｜附思维导图",

  "索引优化-世人皆知Mysql",

  "谁人懂我MongoDB",

  "学习JVM参数前必须了解的",

  "Concent 2.4发布",

  " 最小粒度观察与渲染组件单元",

  "面试问我，创建多少个线程合适？我该怎么说",

  "JavaScript进阶之实现拖拽(上)",

  "2020年Java多线程与并发系列22道高频面试题（附思维导图和答案解析）",

  "「面试题」那些年与面试官交手过的HTTP问题",

  "豪横！程序员搭建技术博客，就只需一个GitHub账号",

  "【建议星星】要就来45道Promise面试题一次爽到底(1.1w字用心整理)",

  "聊聊CanalMQStarter",

  "天天写order by，你知道Mysql底层如何执行吗？",

  "第四期｜前端打怪升级之路",

  "2020年了",

  "再不会webpack敲得代码就不香了(近万字实战)",

  "请你说说 Vue 中 slot 和 slot-scope 的原理（2.6.11 深度解析）",

  "前端，何不尝试一下『插件化』开发",

  "吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《下》",

  "都2020年了，你还不会JavaScript 装饰器？",

  "前端进阶算法2：从Chrome V8源码看JavaScript数组（附赠腾讯面试题）",

  "深入探索 Android 包体积优化（匠心制作）",

  "前端进阶算法3：从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法",

  "聊聊canal的ClientIdentity",

  "ASM字节码编程 | 用字节码增强技术给所有方法加上TryCatch捕获异常并输出",

  "花费2年，字数超一万最佳总结教你Android多进程，微信微博都在用",

  "2020年11个Redis系列高频面试题，哪些你还不会？",

  "Android最强保活黑科技的最强技术实现",

  "终于Flutter 在安卓上可以实现热更新了，你还不来看看？",

  "工作两年简历写成这样，谁要你呀！",

  "初中级前端面试题（万字长文）",

  "App 黑白化实现探索，有一行代码实现的方案吗？",

  "7种跨域方案操练起来",

  "手写async await的最简实现（20行）",

  "Vue.js CLI4 Vue.config.js标准配置 （最全注释）",

  "OpenWrite 编辑器如何配置七牛云图床",

  "I promise you，1 秒钟就把页面渲染出来",

  "如何推动前端团队的基础设施建设",

  "开源项目在闲鱼、b 站上被倒卖？这是什么骚操作？",

  "1年Vue项目经验总结（持续更新中...）",

  "深入探索编译插桩技术（四、ASM 探秘）",

  "(建议收藏)TCP协议灵魂之问，巩固你的网路底层基础",

  "关于vue过滤器的原理解析",

  "CSS揭秘实用技巧总结",

  "跨域总结:从CORS到Ngnix",

  "美团点评 - 到店事业群 前端面经（3轮技术面+hr面）",

  "当面试时被问对http了解多少的时候（二）—— http 协议进阶篇",

  "聊一聊二维码扫描登录原理",

  "🍃【何不三连】JS面向对象最后一弹-多态篇(羽化升仙)",

  "【建议收藏】2020年中高级Android大厂面试秘籍，为你保驾护航金三银四，直通大厂",

  "Vue 的生命周期之间到底做了什么事清？（源码详解，带你从头梳理组件化流程）",

  "微信分享，网络图片url转Bitmap",

  "Nest.js 从零到壹系列（七）：讨厌写文档，Swagger UI 了解一下？",

  "ZAB协议和一些思考",

  "前端鉴权知识学习",

  "一文搞懂 Dynamic Import 和 Top-level await 提案",

  "前端也能读懂的机器学习基础篇——概率视角",

  "面试被问项目经验不用慌，按这个步骤回答绝对惊艳",

  "Java后端学习路线（适合科班、非科班和已工作的仔）",

  "看完跳槽少说涨 5 K，前端面试从准备到谈薪完全指南（近万字精华）",

  "大厂面试题分享：如何让(a===1&&a===2&&a===3)的值为true?",

  "一个北漂程序员",

  "BAT面试经历：专科渣校毕业现已年薪70万，看我如何成功逆袭",

  "Springboot集成自定义异常类（企业实战）",

  "【项目记录】Vue H5适配/vue中Axios的封装",

  "手把手教你写一个基本的Rpc框架",

  "国内 Java 开发者必备的两个装备，你配置上了么？",

  "Vue",

  " jsx 封装通用查询组件",

  "Android必知必会——Canvas",

  "一文解析 MySql 三大核心知识点——索引、锁、事务",

  "20k的前端是这样写事件委托的🐹",

  "高级前端开发者必会的34道Vue面试题系列（一）",

  "前端基础 | 理解原型-作用域-执行上下文",

  "前端面试偏僻考题 | 掘金技术征文",

  "代码评审(Code Review)",

  "第四期 | 前端成长规划",

  "当面试官问：你有什么想问的？",

  "阿里盒马&数农、腾讯WXG小程序团队 —— 小菜鸡自闭の面经😿（等HRing...）",

  "前端Nginx那些事",

  "【面试】数据结构与算法(十三)",

  "面试题：说说事件循环机制(满分答案来了)",

  "酷炫吸顶效果一：ScrollView如何实现的酷炫吸顶效果",

  "人们不使用CSS新功能的5个原因",

  "带你了解 vue-next（Vue 3.0）之 小试牛刀",

  "RocketMQ 在使用上的一些排坑和优化",

  "喜大普奔，Pont 1.0 发布了",

  "如何清爽的安排日常？",

  "不用中间变量交换两个数，各种骚操作，一次玩个够",

  "IDEA 正式版终于支持中文版和 JDK 直接下载了（太方便了）附介绍视频",

  "一年半，三本，30K的，背景，经历，他来了 | 掘金技术征文",

  "springboot学完本篇不要再说你不会logback",

  "深度解析 CSS Flexbox 布局 - 2020年最新版",

  "如何处理浏览器的断网情况？",

  "Vue实现Layui的集成",

  "给 Adapter 做 “加法” —— 实战 MergeAdapter",

  "深度思考：关于技术团队如何提效问题",

  "💦【何不三连】做完这48道题彻底弄懂JS继承(1.7w字含辛整理-返璞归真)",

  "轻松构建和优化 Android 游戏 | Google 游戏开发者峰会专题视频",

  "总结移动端H5开发常用技巧（干货满满哦！）",

  "Webpack 初体验",

  "99%的程序员都在用Lombok，原理竟然这么简单？我也手撸了一个！|建议收藏",

  "一年半前端跳槽面试经验（头条、微信、shopee）",

  "【译】不止是 box-shadow，用 css 能表现的各种影子，以及各种陷阱！",

  "Vue Object 的变化侦测",

  "编码面试题：从零开始实现数组方法来学习JavaScript",

  "一文了解文件上传全过程（1.8w字深度解析，进阶必备）",

  "深入探索编译插桩技术（三、解密 JVM 字节码）",

  "30分钟开发一款抓取网站图片资源的浏览器插件",

  "面试完50个人后我写下这篇总结",

  "微前端在企业级应用中的实践(上)",

  "【1 月最新】前端 100 问：能搞懂 80% 的请把简历给我",

  "小程序框架运行时性能大测评",

  "5分钟教你使用console.log发布公司的招聘信息",

  "权限相关-SpringBoot 在启动时获取所有的请求路径url",

  "精读《React Hooks 数据流》",

  "immer.js:也许更适合你的immutable js库",

  "🐲【1】ShutdownHTTP系列-基础篇",

  "我以为自己对索引很了解，直到我遇到了阿里面试官",

  "常用的时间复杂度分析",

  "593集前端视频教程全部免费 抗击疫情 身体力行",

  "说说Vue的几个watcher（一）——render watcher",

  "springboot 集成WebSockets广播消息",

  "Android 进阶：基于 Kotlin 的 Android App 开发实践",

  "深入理解 RPC : 基于 Python 自建分布式高并发 RPC 服务",
]

export let article_content = ["Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看《Generator 函数的异步应用》一章。",

"Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。",
"执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。",
"形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。",
"上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。",
"然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。",
"下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。",
"上面代码一共调用了四次next方法。",
"第一次调用，Generator 函数开始执行，直到遇到第一个yield表达式为止。next方法返回一个对象，它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。",
"第二次调用，Generator 函数从上次yield表达式停下的地方，一直执行到下一个yield表达式。next方法返回的对象的value属性就是当前yield表达式的值world，done属性的值false，表示遍历还没有结束。",
"第三次调用，Generator 函数从上次yield表达式停下的地方，一直执行到return语句（如果没有return语句，就执行到函数结束）。next方法返回的对象的value属性，就是紧跟在return语句后面的表达式的值（如果没有return语句，则value属性的值为undefined），done属性的值true，表示遍历已经结束。",
"第四次调用，此时 Generator 函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的都是这个值。",
"总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。",
"ES6 没有规定，function关键字与函数名之间的星号，写在哪个位置。这导致下面的写法都能通过。",
"由于 Generator 函数仍然是普通函数，所以一般的写法是上面的第三种，即星号紧跟在function关键字后面。本书也采用这种写法。",
"由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。",
"遍历器对象的next方法的运行逻辑如下。",
"（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。",
"（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。",
"（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。",
"（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。",
"需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。",
"上面代码中，yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值。",
"yield表达式与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。正常函数只能返回一个值，因为只能执行一次return；Generator 函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，也可以说 Generator 生成了一系列的值，这也就是它的名称的来历（英语中，generator 这个词是“生成器”的意思）。",
"Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。",
"上面代码中，函数f如果是普通函数，在为变量generator赋值时就会执行。但是，函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行。",
"另外需要注意，yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。",
"上面代码在一个普通函数中使用yield表达式，结果产生一个句法错误。",
"下面是另外一个例子。",
"上面代码也会产生句法错误，因为forEach方法的参数是一个普通函数，但是在里面使用了yield表达式（这个函数里面还使用了yield*表达式，详细介绍见后文）。一种修改方法是改用for循环。",
"另外，yield表达式如果用在另一个表达式之中，必须放在圆括号里面。",
"yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。",
"上一章说过，任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。",
"由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。",
"上面代码中，Generator 函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了 Iterator 接口，可以被...运算符遍历了。",
"Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。",
"上面代码中，gen是一个 Generator 函数，调用它会生成一个遍历器对象g。它的Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己。",
"yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。",
"上面代码先定义了一个可以无限运行的 Generator 函数f，如果next方法没有参数，每次运行到yield表达式，变量reset的值总是undefined。当next方法带一个参数true时，变量reset就被重置为这个参数（即true），因此i会等于-1，下一轮循环就会从-1开始递增。",
"这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。",
"再看一个例子。",
"上面代码中，第二次运行next方法的时候不带参数，导致 y 的值等于2 * undefined（即NaN），除以 3 以后还是NaN，因此返回对象的value属性也等于NaN。第三次运行Next方法的时候不带参数，所以z等于undefined，返回对象的value属性等于5 + NaN + undefined，即NaN。",
"如果向next方法提供参数，返回结果就完全不一样了。上面代码第一次调用b的next方法时，返回x+1的值6；第二次调用next方法，将上一次yield表达式的值设为12，因此y等于24，返回y / 3的值8；第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。",
"注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。",
"再看一个通过next方法的参数，向 Generator 函数内部输入值的例子。",
"上面代码是一个很直观的例子，每次通过next方法向 Generator 函数输入值，然后打印出来。",
"如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。",
"上面代码中，Generator 函数如果不用wrapper先包一层，是无法第一次调用next方法，就输入参数的。",
"for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。",
"上面代码使用for...of循环，依次显示 5 个yield表达式的值。这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。",
"下面是一个利用 Generator 函数和for...of循环，实现斐波那契数列的例子。",
"从上面代码可见，使用for...of语句时不需要使用next方法。",
"利用for...of循环，可以写出遍历任意对象（object）的方法。原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，通过 Generator 函数为它加上这个接口，就可以用了。",
"上面代码中，对象jane原生不具备 Iterator 接口，无法用for...of遍历。这时，我们通过 Generator 函数objectEntries为它加上遍历器接口，就可以用for...of遍历了。加上遍历器接口的另一种写法是，将 Generator 函数加到对象的Symbol.iterator属性上面。",
"除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。",
"Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。",
"上面代码中，遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的catch语句捕获。i第二次抛出错误，由于 Generator 函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获。",
"throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。",
"注意，不要混淆遍历器对象的throw方法和全局的throw命令。上面代码的错误，是用遍历器对象的throw方法抛出的，而不是用throw命令抛出的。后者只能被函数体外的catch语句捕获。",
"上面代码之所以只捕获了a，是因为函数体外的catch语句块，捕获了抛出的a错误以后，就不会再继续try代码块里面剩余的语句了。",
"如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获。",
"上面代码中，Generator 函数g内部没有部署try...catch代码块，所以抛出的错误直接被外部catch代码块捕获。",
"如果 Generator 函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。",
"上面代码中，g.throw抛出错误以后，没有任何try...catch代码块可以捕获这个错误，导致程序报错，中断执行。",
"throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。",
"上面代码中，g.throw(1)执行时，next方法一次都没有执行过。这时，抛出的错误不会被内部捕获，而是直接在外部抛出，导致程序出错。这种行为其实很好理解，因为第一次执行next方法，等同于启动执行 Generator 函数的内部代码，否则 Generator 函数还没有开始执行，这时throw方法抛错只可能抛出在函数外部。",
"throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。",
"上面代码中，g.throw方法被捕获以后，自动执行了一次next方法，所以会打印b。另外，也可以看到，只要 Generator 函数内部部署了try...catch代码块，那么遍历器的throw方法抛出的错误，不影响下一次遍历。",
"另外，throw命令与g.throw方法是无关的，两者互不影响。",
"上面代码中，throw命令抛出的错误不会影响到遍历器的状态，所以两次执行next方法，都进行了正确的操作。",
"这种函数体内捕获错误的机制，大大方便了对错误的处理。多个yield表达式，可以只用一个try...catch代码块来捕获错误。如果使用回调函数的写法，想要捕获多个错误，就不得不为每个函数内部写一个错误处理语句，现在只在 Generator 函数内部写一次catch语句就可以了。",
"Generator 函数体外抛出的错误，可以在函数体内捕获；反过来，Generator 函数体内抛出的错误，也可以被函数体外的catch捕获。",
"上面代码中，第二个next方法向函数体内传入一个参数 42，数值是没有toUpperCase方法的，所以会抛出一个 TypeError 错误，被函数体外的catch捕获。",
"一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象，即 JavaScript 引擎认为这个 Generator 已经运行结束了。",
"上面代码一共三次运行next方法，第二次运行的时候会抛出错误，然后第三次运行的时候，Generator 函数就已经结束了，不再执行下去了。",
"Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。",
"上面代码中，遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo。并且，Generator 函数的遍历就终止了，返回值的done属性为true，以后再调用next方法，done属性总是返回true。",
"如果return方法调用时，不提供参数，则返回值的value属性为undefined。",
"如果 Generator 函数内部有try...finally代码块，且正在执行try代码块，那么return方法会导致立刻进入finally代码块，执行完以后，整个函数才会结束。",
"上面代码中，调用return()方法后，就开始执行finally代码块，不执行try里面剩下的代码了，然后等到finally代码块执行完，再返回return()方法指定的返回值。",
"next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。",
"next()是将yield表达式替换成一个值。",
"上面代码中，第二个next(1)方法就相当于将yield表达式替换成一个值1。如果next方法没有参数，就相当于替换成undefined。",
"throw()是将yield表达式替换成一个throw语句。",
"return()是将yield表达式替换成一个return语句。",
"如果在 Generator 函数内部，调用另一个 Generator 函数。需要在前者的函数体内部，自己手动完成遍历。",
"上面代码中，foo和bar都是 Generator 函数，在bar里面调用foo，就需要手动遍历foo。如果有多个 Generator 函数嵌套，写起来就非常麻烦。",
"ES6 提供了yield*表达式，作为解决办法，用来在一个 Generator 函数里面执行另一个 Generator 函数。",
"再来看一个对比的例子。",
"上面例子中，outer2使用了yield*，outer1没使用。结果就是，outer1返回一个遍历器对象，outer2返回该遍历器对象的内部值。",
"从语法角度看，如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*表达式。",
"上面代码中，delegatingIterator是代理者，delegatedIterator是被代理者。由于yield* delegatedIterator语句得到的值，是一个遍历器，所以要用星号表示。运行结果就是使用一个遍历器，遍历了多个 Generator 函数，有递归的效果。",
"yield*后面的 Generator 函数（没有return语句时），等同于在 Generator 函数内部，部署一个for...of循环。",
"上面代码说明，yield*后面的 Generator 函数（没有return语句时），不过是for...of的一种简写形式，完全可以用后者替代前者。反之，在有return语句时，则需要用var value = yield* iterator的形式获取return语句的值。",
"如果yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。",
"上面代码中，yield命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器对象。",
"实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。",
"上面代码中，yield表达式返回整个字符串，yield*语句返回单个字符。因为字符串具有 Iterator 接口，所以被yield*遍历。",
"如果被代理的 Generator 函数有return语句，那么就可以向代理它的 Generator 函数返回数据。",
"上面代码在第四次调用next方法的时候，屏幕上会有输出，这是因为函数foo的return语句，向函数bar提供了返回值。",
"再看一个例子。",
"上面代码中，存在两次遍历。第一次是扩展运算符遍历函数logReturned返回的遍历器对象，第二次是yield*语句遍历函数genFuncWithReturn返回的遍历器对象。这两次遍历的效果是叠加的，最终表现为扩展运算符遍历函数genFuncWithReturn返回的遍历器对象。所以，最后的数据表达式得到的值等于[ 'a'",
" 'b' ]。但是，函数genFuncWithReturn的return语句的返回值The result，会返回给函数logReturned内部的result变量，因此会有终端输出。",
"yield*命令可以很方便地取出嵌套数组的所有成员。",
"由于扩展运算符...默认调用 Iterator 接口，所以上面这个函数也可以用于嵌套数组的平铺。",
"下面是一个稍微复杂的例子，使用yield*语句遍历完全二叉树。",
"如果一个对象的属性是 Generator 函数，可以简写成下面的形式。",
"上面代码中，myGeneratorMethod属性前面有一个星号，表示这个属性是一个 Generator 函数。",
"它的完整形式如下，与上面的写法是等价的。",
"Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。",
"上面代码表明，Generator 函数g返回的遍历器obj，是g的实例，而且继承了g.prototype。但是，如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象。",
"上面代码中，Generator 函数g在this对象上面添加了一个属性a，但是obj对象拿不到这个属性。",
"Generator 函数也不能跟new命令一起用，会报错。",
"上面代码中，new命令跟构造函数F一起使用，结果报错，因为F不是构造函数。",
"那么，有没有办法让 Generator 函数返回一个正常的对象实例，既可以用next方法，又可以获得正常的this？",
"下面是一个变通方法。首先，生成一个空对象，使用call方法绑定 Generator 函数内部的this。这样，构造函数调用以后，这个空对象就是 Generator 函数的实例对象了。",
"上面代码中，首先是F内部的this对象绑定obj对象，然后调用它，返回一个 Iterator 对象。这个对象执行三次next方法（因为F内部有两个yield表达式），完成 F 内部所有代码的运行。这时，所有内部属性都绑定在obj对象上了，因此obj对象也就成了F的实例。",
"上面代码中，执行的是遍历器对象f，但是生成的对象实例是obj，有没有办法将这两个对象统一呢？",
"一个办法就是将obj换成F.prototype。",
"再将F改成构造函数，就可以对它执行new命令了。",
"Generator 是实现状态机的最佳结构。比如，下面的clock函数就是一个状态机。",
"上面代码的clock函数一共有两种状态（Tick和Tock），每运行一次，就改变一次状态。这个函数如果用 Generator 实现，就是下面这样。",
"上面的 Generator 实现与 ES5 实现对比，可以看到少了用来保存状态的外部变量ticking，这样就更简洁，更安全（状态不会被非法篡改）、更符合函数式编程的思想，在写法上也更优雅。Generator 之所以可以不用外部变量保存状态，是因为它本身就包含了一个状态信息，即目前是否处于暂停态。",
"协程（coroutine）是一种程序运行的方式，可以理解成“协作的线程”或“协作的函数”。协程既可以用单线程实现，也可以用多线程实现。前者是一种特殊的子例程，后者是一种特殊的线程。",
"（1）协程与子例程的差异",
"传统的“子例程”（subroutine）采用堆栈式“后进先出”的执行方式，只有当调用的子函数完全执行完毕，才会结束执行父函数。协程与其不同，多个线程（单线程情况下，即多个函数）可以并行执行，但是只有一个线程（或函数）处于正在运行的状态，其他线程（或函数）都处于暂停态（suspended），线程（或函数）之间可以交换执行权。也就是说，一个线程（或函数）执行到一半，可以暂停执行，将执行权交给另一个线程（或函数），等到稍后收回执行权的时候，再恢复执行。这种可以并行执行、交换执行权的线程（或函数），就称为协程。",
"从实现上看，在内存中，子例程只使用一个栈（stack），而协程是同时存在多个栈，但只有一个栈是在运行状态，也就是说，协程是以多占用内存为代价，实现多任务的并行。",
"（2）协程与普通线程的差异",
"不难看出，协程适合用于多任务运行的环境。在这个意义上，它与普通的线程很相似，都有自己的执行上下文、可以分享全局变量。它们的不同之处在于，同一时间可以有多个线程处于运行状态，但是运行的协程只能有一个，其他协程都处于暂停状态。此外，普通的线程是抢先式的，到底哪个线程优先得到资源，必须由运行环境决定，但是协程是合作式的，执行权由协程自己分配。",
"由于 JavaScript 是单线程语言，只能保持一个调用栈。引入协程以后，每个任务可以保持自己的调用栈。这样做的最大好处，就是抛出错误的时候，可以找到原始的调用栈。不至于像异步操作的回调函数那样，一旦出错，原始的调用栈早就结束。",
"Generator 函数是 ES6 对协程的实现，但属于不完全实现。Generator 函数被称为“半协程”（semi-coroutine），意思是只有 Generator 函数的调用者，才能将程序的执行权还给 Generator 函数。如果是完全执行的协程，任何函数都可以让暂停的协程继续执行。",
"如果将 Generator 函数当作协程，完全可以将多个需要互相协作的任务写成 Generator 函数，它们之间使用yield表达式交换控制权。",
"JavaScript 代码运行时，会产生一个全局的上下文环境（context，又称运行环境），包含了当前所有的变量和对象。然后，执行函数（或块级代码）的时候，又会在当前上下文环境的上层，产生一个函数运行的上下文，变成当前（active）的上下文，由此形成一个上下文环境的堆栈（context stack）。",
"这个堆栈是“后进先出”的数据结构，最后产生的上下文环境首先执行完成，退出堆栈，然后再执行完成它下层的上下文，直至所有代码执行完成，堆栈清空。",
"Generator 函数不是这样，它执行产生的上下文环境，一旦遇到yield命令，就会暂时退出堆栈，但是并不消失，里面的所有变量和对象会冻结在当前状态。等到对它执行next命令时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。",
"上面代码中，第一次执行g.next()时，Generator 函数gen的上下文会加入堆栈，即开始运行gen内部的代码。等遇到yield 1时，gen上下文退出堆栈，内部状态冻结。第二次执行g.next()时，gen上下文重新加入堆栈，变成当前的上下文，重新恢复执行。",
"Generator 可以暂停函数执行，返回任意表达式的值。这种特点使得 Generator 有多种应用场景。",
"Generator 函数的暂停执行的效果，意味着可以把异步操作写在yield表达式里面，等到调用next方法时再往后执行。这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在yield表达式下面，反正要等到调用next方法时再执行。所以，Generator 函数的一个重要实际意义就是用来处理异步操作，改写回调函数。",
"上面代码中，第一次调用loadUI函数时，该函数不会执行，仅返回一个遍历器。下一次对该遍历器调用next方法，则会显示Loading界面（showLoadingScreen），并且异步加载数据（loadUIDataAsynchronously）。等到数据加载完成，再一次使用next方法，则会隐藏Loading界面。可以看到，这种写法的好处是所有Loading界面的逻辑，都被封装在一个函数，按部就班非常清晰。",
"Ajax 是典型的异步操作，通过 Generator 函数部署 Ajax 操作，可以用同步的方式表达。",
"上面代码的main函数，就是通过 Ajax 操作获取数据。可以看到，除了多了一个yield，它几乎与同步操作的写法完全一样。注意，makeAjaxCall函数中的next方法，必须加上response参数，因为yield表达式，本身是没有值的，总是等于undefined。",
"下面是另一个例子，通过 Generator 函数逐行读取文本文件。",
"上面代码打开文本文件，使用yield表达式可以手动逐行读取文件。",
"如果有一个多步操作非常耗时，采用回调函数，可能会写成下面这样。",
"采用 Promise 改写上面的代码。",
"上面代码已经把回调函数，改成了直线执行的形式，但是加入了大量 Promise 的语法。Generator 函数可以进一步改善代码运行流程。",
"然后，使用一个函数，按次序自动执行所有步骤。",
"注意，上面这种做法，只适合同步操作，即所有的task都必须是同步的，不能有异步操作。因为这里的代码一得到返回值，就继续往下执行，没有判断异步操作何时完成。如果要控制异步的操作流程，详见后面的《异步操作》一章。",
"下面，利用for...of循环会自动依次执行yield命令的特性，提供一种更一般的控制流管理的方法。",
"上面代码中，数组steps封装了一个任务的多个步骤，Generator 函数iterateSteps则是依次为这些步骤加上yield命令。",
"将任务分解成步骤之后，还可以将项目分解成多个依次执行的任务。",
"上面代码中，数组jobs封装了一个项目的多个任务，Generator 函数iterateJobs则是依次为这些任务加上yield*命令。",
"最后，就可以用for...of循环一次性依次执行所有任务的所有步骤。",
"再次提醒，上面的做法只能用于所有步骤都是同步操作的情况，不能有异步操作的步骤。如果想要依次执行异步的步骤，必须使用后面的《异步操作》一章介绍的方法。",
"for...of的本质是一个while循环，所以上面的代码实质上执行的是下面的逻辑。",
"利用 Generator 函数，可以在任意对象上部署 Iterator 接口。",
"上述代码中，myObj是一个普通对象，通过iterEntries函数，就有了 Iterator 接口。也就是说，可以在任意对象上部署next方法。",
"下面是一个对数组部署 Iterator 接口的例子，尽管数组原生具有这个接口。",
"Generator 可以看作是数据结构，更确切地说，可以看作是一个数组结构，因为 Generator 函数可以返回一系列的值，这意味着它可以对任意表达式，提供类似数组的接口。",
"上面代码就是依次返回三个函数，但是由于使用了 Generator 函数，导致可以像处理数组那样，处理这三个返回的函数。",
"实际上，如果用 ES5 表达，完全可以用数组模拟 Generator 的这种用法。"]