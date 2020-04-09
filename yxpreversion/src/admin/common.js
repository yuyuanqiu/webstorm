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
    active: 4,
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
      current_status: {
        value: "待审核",
        comment: "",
        disabled: false,
        active: 2
      },
      comment: ""
    });

    coursesss.push(course_item);
  }
  // console.log(coursesss);

  return coursesss;
}


/**


    autoCreatedCourse() {
      let courses = [
        {
          top_level: "外语",
          second: [
            {
              name: "大学英语",
              children: [
                "大学英语（一）",
                "大学英语（二）",
                "大学英语（三）",
                "大学英语（四）"
              ]
            }
          ]
        },
        {
          top_level: "理学",
          second: [
            {
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
          second: [
            {
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
          second: [
            {
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

      let status = [
        {
          value: "申请",
          comment: "",
          disabled: false
        },
        {
          value: "审核通过",
          comment: "",
          disabled: false
        },
        {
          value: "待审核",
          comment: "",
          disabled: false
        },
        {
          value: "审核未通过",
          comment: "",
          disabled: false
        }
      ];

      let applyers = [
        "贾演",
        "贾源",
        "贾源",
        "贾宝玉",
        "贾代化",
        "贾演",
        "贾代善",
        "贾代儒",
        "贾代修",
        "贾敷",
        "贾敬",
        "贾赦",
        "贾政",
        "贾敏",
        "林如海",
        "林黛玉",
        "贾敕",
        "贾效",
        "贾敦",
        "贾珍",
        "贾琏",
        "同知",
        "贾琮",
        "贾珠",
        "贾宝玉",
        "贾环",
        "贾瑞",
        "贾璜",
        "贾珩",
        "贾㻞",
        "贾珖",
        "贾琛",
        "贾琼",
        "贾璘",
        "贾元春",
        "贾迎春",
        "贾探春",
        "贾惜春",
        "喜鸾",
        "贾蓉",
        "贾兰",
        "李纨",
        "贾蔷",
        "贾菌",
        "贾芸",
        "贾芹",
        "贾萍",
        "贾菖",
        "贾菱",
        "贾蓁",
        "贾藻",
        "贾蘅",
        "贾芬",
        "贾芳",
        "贾芝",
        "贾荇",
        "贾芷",
        "贾葛",
        "王熙凤",
        "史鼐",
        "史鼎",
        "史湘云",
        "王子腾",
        "王子胜",
        "王仁",
        "王熙凤",
        "王熙凤",
        "薛蟠",
        "薛蝌",
        "薛虬",
        "薛宝钗",
        "薛宝琴",
        "林黛玉",
        "林如海",
        "妙玉",
        "李纨",
        "秦可卿",
        "香菱",
        "甄士隐",
        "刘姥姥",
        "甄宝玉",
        "晴雯",
        "绮霰",
        "麝月",
        "檀云",
        "秋纹",
        "碧浪",
        "茜雪",
        "春燕",
        "佳蕙",
        "抱琴",
        "司棋",
        "绣橘",
        "待书",
        "翠墨",
        "入画",
        "彩屏",
        "紫鹃",
        "雪雁",
        "春纤",
        "鸳鸯",
        "琥珀",
        "珍珠",
        "玻璃",
        "翡翠",
        "鹦鹉",
        "银蝶",
        "文杏",
        "金钏",
        "玉钏",
        "绣鸾",
        "绣凤",
        "彩云",
        "彩霞",
        "素云",
        "同喜",
        "同贵",
        "翠缕",
        "宝珠",
        "瑞珠",
        "姣杏",
        "甄士隐",
        "贾雨村",
        "邢岫烟",
        "宝蟾",
        "夏金桂",
        "茗烟",
        "焦大",
        "李贵",
        "锄药",
        "墨雨",
        "伴鹤",
        "扫花",
        "引泉",
        "挑芸",
        "双瑞",
        "双寿",
        "来旺",
        "王荣",
        "钱启",
        "张若锦",
        "赵亦华",
        "钱槐",
        "杏奴",
        "柳湘莲",
        "王信",
        "女娲",
        "甄士隐",
        "贾雨村",
        "霍启",
        "封肃",
        "冷子兴",
        "周瑞",
        "林如海",
        "李守中",
        "李纨",
        "冯渊",
        "王成",
        "周瑞",
        "智能",
        "余信",
        "秦钟",
        "赖二",
        "詹光",
        "戴良",
        "钱华",
        "单聘仁",
        "吴新登",
        "秦业",
        "冯唐",
        "张友士",
        "戴权",
        "牛清",
        "牛继宗",
        "柳彪",
        "柳芳",
        "陈翼",
        "陈瑞文",
        "马魁",
        "马尚",
        "侯晓明",
        "侯孝康",
        "石光珠",
        "蒋子宁",
        "谢鲸",
        "戚建辉",
        "裘良",
        "冯紫英",
        "陈也俊",
        "卫若兰",
        "水溶",
        "净虚",
        "智善",
        "云光",
        "夏守忠",
        "赖大",
        "吴天佑",
        "卜固修",
        "山子野",
        "林之孝",
        "程日兴",
        "昭容",
        "彩缤",
        "花自芳",
        "卜世仁",
        "倪二",
        "王短腿",
        "方椿",
        "马道婆",
        "胡斯来",
        "鲍太医",
        "王济仁",
        "蒋玉菡",
        "张道士",
        "道士",
        "傅试",
        "傅秋芳",
        "茗玉",
        "王君效",
        "金彩",
        "金文翔",
        "嫣红",
        "柳湘莲",
        "赖尚荣",
        "赖大",
        "邢岫烟",
        "薛蝌",
        "邢忠",
        "李纹",
        "李绮",
        "梅翰林",
        "胡君荣",
        "乌进孝",
        "单大良",
        "赵国基",
        "春燕",
        "柳家的",
        "司棋",
        "佩凤",
        "贾珍",
        "偕鸾",
        "张华",
        "俞禄",
        "秋桐",
        "贾赦",
        "贾琏",
        "天文生",
        "潘又安",
        "周太监",
        "翠云",
        "邢德全",
        "文花",
        "圆信",
        "智通",
        "孙绍祖",
        "贾迎春",
        "夏金桂",
        "薛蟠",
        "夏奶奶",
        "王一贴",
        "林黛玉",
        "薛宝钗",
        "贾元春",
        "贾探春",
        "史湘云",
        "妙玉",
        "贾迎春",
        "贾惜春",
        "王熙凤",
        "李纨",
        "秦可卿",
        "香菱",
        "薛宝琴",
        "邢岫烟",
        "李纹",
        "李绮",
        "宝蟾",
        "宝珠",
        "瑞珠",
        "娇杏",
        "晴雯",
        "鸳鸯",
        "紫鹃",
        "金钏",
        "司棋",
        "玉钏",
        "茜雪",
        "麝月"
      ];

      let coursesss = [];

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

      for (let i = 0; i < 100; i++) {
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

        let course_item = Object.assign(
          {},
          {
            top_level: top_level_name,
            second_level: second_level_name,
            name: course,
            applyer: applyer,
            id: Math.floor((Math.random() + 1) * 1000000000),
            status: status,
            bg_rul: "",
            des:
              "本专业培养具备良好的政治理论素养、思想道德素质和科学文化素质，既能在学 校和科研机构从事本专业的教学、研究工作，又能在党政机关和企事业单位从事以本专业为基础 的宣传、组织、管理、思想政治工作的复合型人才",
            apply_date: setDate(),
            current_status: "待审核",
            comment: ""
          }
        );

        coursesss.push(course_item);
      }
      console.log(coursesss);

      return coursesss;
    },


 */