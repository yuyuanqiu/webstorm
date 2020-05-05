# express 开发

## 200503

- nodejs 程序热更新：jj
  - node-dev
  - nodemon
  - 安装某模块之后需要修改 script 中的内容
- 跨域问题--
- axios 异步请求同步化
  - 放在 promise 解决

# mongodb


## insert

```javascript
db.collection.insertMany(
  [<document1>, ...],
  {
    // 可选的option
    writeConcern: <document>,
    // 有序/无序插入
    ordered: <boolean>
  }
)
db.collection.insertOne(
  <document>,
  {
    writeConcern: <document>
  }
)
db.collection.insertMany(
  [<document>, ...],
  {
    writeConcern: <document>,
    ordered: <boolean>
  }
)
// example:
// _id可选，无时将自动插入对象
try {
   db.products.insertMany( [
      { _id: 10, item: "large box", qty: 20 },
      { _id: 11, item: "small box", qty: 55 },
      { _id: 11, item: "medium box", qty: 30 },
      { _id: 12, item: "envelope", qty: 100},
      { _id: 13, item: "stamps", qty: 125 },
      { _id: 13, item: "tape", qty: 20},
      { _id: 14, item: "bubble wrap", qty: 30}
   ], { ordered: false } );
} catch (e) {
   print (e);
}
```


## 其他插入

### update

- v4.2+开始，更新方法接受聚合管道
  - 聚合阶段$set
  - 访问聚合变量在变量前加`$$`并用引号引起
  - 聚合变量：`$$NOW`(当前日期时间), `$$CLUSTER_TIME`(当前时间戳)
  - 替换整个文档时，文档将会更新为<update>，但是_id字段不会被替换
- 若<update>是聚合管道，则将在符合query的情况下将管道应用于要插入的文档中，无_id字段将被字段创建
- 为了避免多次插入同一文档，需使用upsert: true，并且query条件具有唯一索引**疑惑**




```javascript
db.collection.update(
  <query>,
  <update>,  // 文件或管道
  {
    upsert: <boolean>,// 无符合条件文档时是否创建新文档插入
    multi: <boolean>,// 是否更新满足query的多个文档，更新多个文件
    writeConcern: <document>,
    collation: <document>,
    arrayFilters: [<filterDocument1>, ...],// 筛选器文档数组
    hint: <document | string>
  }
)

// examples:
// 替换整个文档
db.books.update(
  {_id: 2},
  {
    item: '111',
    stock: 12
  }
)

// 使用upsert的聚合管道
db.books.update(
  {item: 'myq', rating: [2, 5, 3]},
  [ // 聚合管道
    {
      $replaceRoot: {newRoot: { // 和$setOnInsert类似，在根下添加stock
        $mergeObjects: [{stock: 0}, "$$ROOT"]
      }},
      $set: {avgRating:   // 与$set更新运算符类似
        {$avg: "$rating"},
        tags: ["fiction", "murder"], 
        lastModified: "$$NOW" // 当前时间，与$currentDate类似
      }
    }
  ],
  {upsert: true}
)
// 结果
{
  "_id": ObjectId(""),
  "stock: 0,
  "item: "myq",
  "rating: 3.33333333335,
  "tags" ["fiction", "murder"],
  "lastModified": ISODate("2020-01-23T04:32:32.923Z)
}
```

#### 使用聚合管道（4.2+）


- 聚合管道阶段：
  - $addFields及其别名$set
  - $project及其别名$unset
  - $replaceRoot及其别名$replaceWith

```javascript
[<stage1>, ......]

// examples：
db.members.update(
  {},// 更新所有
  [ // 聚合管道
    {
      $set: {
        status: "modified",
        comments: ["$misc1", "misc2"],  // 根据已有的misc1和misc2字段合入到新字段comments中
        lastUpdate: "$$NOW"
      },  // 第一阶段
      {
        $unset: ["misc1", "misc2"]  // 删除集合中所有而文档的misc1/2字段
      }   // 第二阶段
    }
  ],
  {multi: true}
)
```

#### 确切的数组过滤器

- 更新文档时使用$[<identifier>]过滤后的位置运算符定义一个标识符，然后在数组过滤器文档中引用该标识符
- <identifier>必须小写字母开头，只能包含字母和数字
- 不能为同一标识符指定多个数组过滤器文档，不能包含两个独立的相同标识符的过滤器文档

```javascript
[
  {$for: [{'x.a': {$gt: 85}}, {'x.b': {$gt: 80}}]}
]
[
  {$and: [{'x.a': {$gt: 85}}, {'x.b': {$gt: 80}}]}
]

// examples:
db.students.update(
  {grades: {$gt: 100}}, // 查询grades数组元素大于100的集合
  {$set: {"grades.$[element]: 100}},// 将符合过滤器条件的元素值设置为100
  {
    multi: true,
    arrayFilters: [{'element': {$gte: 100}}]  // 元素大于100
  }
)
```

### updateOne

```javascript
db.collection.updateOne(
  <filter>, // 查询选择器
  <update>, // 文件/管道
  {
    upsert: <boolean>,  // 无匹配<filter>的文档，将创建新的文档，避免多次更新应确保filter字段进行唯一索引
    writeConcern: <document>,
    collation: <document>,  // 指定用于操作的排序规则
    arrayFilters: [<filterdocument>, ...],  // 筛选器文档数组，确定字段更新操作要修改那些数组元素
    hint: <document | string > // 指定用于支持查询谓词的索引
  }
)
```

### updateMany

- 更新与集合的指定过滤器匹配的所有文档

```javascript
db.collection.updateMany(
  <filter>, // 查询选择器
  <update>, // 文件/管道
  {
    upsert: <boolean>,  // 无匹配<filter>的文档，将创建新的文档，避免多次更新应确保filter字段进行唯一索引
    writeConcern: <document>,
    collation: <document>,  // 指定用于操作的排序规则
    arrayFilters: [<filterdocument>, ...],  // 筛选器文档数组，确定字段更新操作要修改那些数组元素
    hint: <document | string > // 指定用于支持查询谓词的索引
  }
)
```

### findAndModify

- 修改并返回单个文档

```javascript
db.collection.findAndModify({
  query: <document>,  // 查询选择器，只选择一个要修改的文档，默认为空{}
  sort: <document>, // 按照指定的排序顺序修改第一个文档
  remove: <boolean>,  // 必须指定remove/update，删除query字段指定的文档
  update: <document | aggregation pipeline>,// 必须指定remove/update，更新
  new: <boolean>, // 为true时返回修改后的文档，有remove时被忽略
  fields: <document>,// 要返回的字段子集
  upsert: <boolean>,  // 与update字段结合使用
  bypassDocumentValidation: <boolean>,
  writeConcern: <document>,
  collation: <document>,
  arrayFilters: [<filterdocument>, ...]
})
```

### findOneAndUpdate

- 根据filter和sort条件更新单个文档

```javascript
db.collection.findOneAndUpdate(
  <filter>,
  <update document or aggregation pipeline>,
  {
    projection: <document>,   // 要返回的字段子集，返回所有字段忽略此参数
    sort: <document>,   // 指定filter匹配的文档排序顺序
    maxTimeMS: <number>,  // 指定完成操作时间限制（毫秒），超出限制引发错误
    upsert: <boolean>,    //  是否创建新文档
    returnNewDocument: <boolean>,   // 返回更新的文档
    collation: <document>,
    arrayFilters: [<filterdocument>, ...]
  }
)
```

### findOneAndReplace

- 根据filter和sort条件更新单个文档

```javascript
db.collection.findOneAndReplace(
  <filter>,
  <replacement>,  // 替换文件，不能包含更新运算符，不能指定不同的_id
  {
    projection: <document>,   // 要返回的字段子集，返回所有字段忽略此参数
    sort: <document>,   // 指定filter匹配的文档排序顺序
    maxTimeMS: <number>,  // 指定完成操作时间限制（毫秒），超出限制引发错误
    upsert: <boolean>,    //  是否创建新文档
    returnNewDocument: <boolean>,   // 返回替换的文档
    collation: <document>,
  }
)
```

### bulkWrite

- 使用控件执行多个写入操作

```javascript
db.collection.bulkWrite(
  [<operation>, ...], // 有效操作：insert/delete/update/replaceOne，delete/updateMany
  {
    writeConcern: <document>,
    ordered: <boolean>  // 执行有序/无序操作，默认为true
  }
)

// examples：
db.characters.bulkWrite([
  {insertOne: {
    "document": {
      "_id": 4,
      "char": "dithe"
    }
  }},
  {updateOne: {
    "filter": {"char": "eldon"},
    "update": {$set: {"status": "sss"}}
  }},
  {deleteOne: {
    "filter": {"char": "meldane"},
    "replacement": {"char": "tanys"}
  }}
])
```








## 查询

- 查询所有文档，需将空文档作为查询过滤器`db.col.find({})`
- 查询特定条件：`db.col.find({status: "d"})`
- 

## 操作符

### 查询操作符

### 比较查询

#### $eq

- 字段值或字段中有的元素值等于指定的值

```javascript
{<field>: {$eq: <value>}}

// examples:
db.col.find({
  qty: {$eq: 20},   // qty: 20和qty: [20, 30]均符合
  "item.name": {$eq: 'ab'}
})
```

#### $gt

- 选择字段值或字段中有的元素值**大于**指定值的文档
- $gte: **大于/等于**

#### $lt

- 选择字段值或字段中有的元素值**小于**指定值的文档
- $lte: **小于/等于**

#### $ne 

- 选择的字段值不等于指定值的文档

#### $in

- 字段值或字段中有的元素值等于指定数组中任何值的文档

```javascript
{field: {
  $in: [<value>, ...]
}}
```

#### $nin

- 字段值或字段中有的元素值不包含指定数组中任何值的文档

```javascript
{field: {
  $nin: [<value>, ...]
}}
```

### 逻辑查询操作符

#### $and

- 查询同时满足一系列条件的集合

```javascript
{$and: [
  {<expression>}, ......
]}

// examples:
db.col.find({
  $and: [
    {price: {$ne: 1.9}},
    {price: {$exists: true}}
  ]
})
```

#### $not

```javascript
{field: {
  $not: {
    <operator-expression>
  }
}}

// examples:
db.col.find({
  price: {$not: {$gt: 1.9}} // price值小于/等于1.9或字段不存在的集合
})
```

#### $nor

```javascript
{$nor: [
  {<expression>},......
]}

// examples:
db.col.find({
  /** 
   * 返回price!==1.99 && scale !== true
   * price !== 1.99 && scale not exist
   * price not exist && scale !== true
   * price and scale not exist
   * /
  
  $nor: [{price: 1.99}, {scale: true}]  
})
```

#### $or

```javascript
{$or: [
  {<expression>, ......}
]}
```

### 元素查询操作符

#### $exists

- 是否匹配包含该字段的文档，即使该字段值为null

```javascript
{field: {
  $exists: <boolean>
}}

// examples:
db.col.find({a: {$exists: true}})
```

#### $type

- 返回指定类型字段的文档

```javascript
{field: {
  $type: <BSON type> | [<BSON type>, ...]   // $type的值可以是bason类型的数字/字符串，例如Double类型对应数字是1，对应字符串是"double"
}}
```

### 评估查询操作符

#### $expr

- 允许在查询语言中使用聚合表达式

```javascript
{$expr: {<expression>}} // 聚合表达式


```
#### $mod

```javascript
{field: {$mod: [divi， rem]}}  // 选择字段除以除数divi之后余数为rem的文档
```

#### $regex

- 模式匹配

```javascript
{<field>: {
  $regex: /pattern/, $options: '<options>' or
  $regex: 'pattern', $options: '<options>' or
  $regex: /pattern/<options>    // options: i: 不区分大小写，m：是否匹配多行值（多个文档），x：忽略空白字段，s：允许点字符匹配所有字符
}}

// example: 

```

#### $text



### 更新操作符

**相同的特性**：

- 字段不存在将添加新字段，
- 嵌入式文档/数组应使用点表示法

### 字段更新操作符

#### $set:

- 用指定的值替换字段的值，

```javascript
{$set: {
  <field1>: <value1>, ...
}}

// example
db.products.update(
  {_id: 100},
  {$set: {
    "details.make": "123",
    "tags.1.rating": 1
  }}
)
```

#### $unset

- 删除特定字段替换为null，与$一起使用时，会将匹配的第一个元素替换为null而非删除所有匹配的元素
- $: 表示第一个匹配的元素

```javascript
{$unset: {
  <field>: "", ...
}}

// examples:
db.products.update(
  {sku: 'unknown', age: 10},
  {$unset: {
    "age.$": ""   // 将数组中的第一个值为10的元素替换为null
  }}
)
```

#### $setOnInsert

- 需结合选项upsert： true一起使用，表示更新并插入文档，若已有某值，则更新不插入

```javascript
db.collection.update(
  <query>,
  {$setOnInsert: {<field>: <value>, ...}},
  { upsert: true}
)

// examples:
db.collectionstore.update(
  {_id: 1},
  {
    $set: {item: "apple"},
    $setOnInsert: {defaultJDQ: 100} // 当文档中已有defaultJDQ时不会插入
  },
  {upsert: true}
)
```

#### $inc:

- 增加指定的值（+value）

```javascript
{$inc: {
  <field1>: <amount1>,...
}}

// example
db.products.update(
  {sku: "abc123"},
  {$inc: {
    quantity: -2,// 增加-2即减2
    "metrics.orders": 1, // 增加1
  }}
)
```

#### $mul

- 将字段的值乘以某数字，**字段的值为数字**
- 不存在某字段，将设置为与某数字类型相同的0
- 不同数字类型相乘将会进行数字转换

```javascript
{$mul: {
  <field>: <number1>,...
}}

// examples:
db.products.update(
  {_id: 2},
  {$mul: {
    price: NumberLong(100)  // 表示乘以一个长整型数字100
  }}
)
```

#### $max, $min

- 若指定的值大于当前值，则更新为指定值，否则不更新
- [使用BSON顺序比较不同类型的值](https://s0docs0mongodb0com.icopy.site/manual/reference/bson-type-comparison-order/#faq-dev-compare-order-for-bson-types)
- 字段不存在，将该字段设为指定值

```javascript
{$max: {
  <field>: <value>,...
}}

// examples:
db.scores.update(
  {_id: 1},
  {$max: {
    highScore: 1000
  }}
)
```

#### $rename

- 重命名字段，该操作可能打乱原有顺序
- 原理：执行旧名称和新名称的$unset，若新名称存在，则清空，再对新名称执行$set

```javascript
{$rename: {
  <field>: <newName>,...
}}

//examples:
db.students.update(
  {_id: 1},
  {$rename: {
    "nickname": "newNickName",
    "other.ceil": "other.newCeil"
  }}
)
```

#### $currentDate

- 将字段的值设置为当前日期（Date-默认， timestamp）
- <typeSpecification>可以是：
  - true：表示当前日期为Date
  - { $type: "timestamp" }
  - { $type: "data"}

```javascript
{$currentDate: {
  <field>: <typeSpecification>, ...
}}

// examples:
db.customers.updateOne(
  {_id: 1},
  {
    $currentDate: {
      lastModified: true,
      "cancellation.date": {$type: "timestamp"}
    }
  }
)
// 4.2版本使用聚合管道，重写上面示例
db.customers.updateOne(
  {_id: 1},
  [{
    $set: {
      lastModified: "$$NOW",
      cancellation: {
        date: "$$CLUSTER_TIME"
      }
    }
  }]
)
```

### 数组更新操作符

#### $(update)
#### $[]
#### $[<identifier>]

#### $push

- 将指定的值附加到**数组**中
- 可与$each, $slice, $sort, $position 一起使用
  - \$each： 将多个值依次加到数组末尾
  - $slice: 限制数组元素数量，必须和$each 一起，即使 each 为空数组
  - $sort: 排序，需和$each 一起，值为 1/-1
  - $position: 从指定的位置插入，需和$each 一起，位置 index 从 0 开始

```javascript
// 无修饰符
{$push: {
  <field1>: <value1>,...
}}

// 有修饰符
{$push: {
  <field1>: {
    <modifier1>: <value1>,...
  }
}}

// examples:
db.students.update(
  {_id: 5},
  {
    $push: {
      quizzes: {
        $each: [{ek: 5, score: 8}, {ek: 6, score: 9}],// 将数组中的每个元素添加到末尾
        $sort: {score: -1},// 对quizzes中的score降序排序
        $slice: 3 // 最终结果保留前3个数组元素
      }
    }
  }
)
```

#### $addToSet

- 将数组中不存在的value**值添加到数组**，存在则不添加

```javascript
{$addToSet: {
  <field>: <value>, ...// 若值为数组，不会拆分之后添加（使用$each则会拆分）
}}

// examples：
db.test.update(
  {_id: 1},
  {$addToSet: {
    letters: ['c', 'd'] // 将['c', 'd']加到数组末尾
  }}
)
```

#### $each

- 与$addToSet使用时，仅将不存在的value添加到数组，存在的value不添加
- 与$push使用时
- **$each可传递空数组**


```javascript
{$addToSet: {
  <field>: {
    $each: [<value1>, ...]
  }
}}

{$push: {
  <field>: {
    $each: [<value>, ...]
  }
}}

```

#### $position

- 与$push和$each运算符一起使用，在指定位置插入
- 从0开始， 负数从末尾开始，例如-1表示在最后一个元素**之前**插入
```javascript
{$push: {
  <field>: {
    $each: [<value>, ...],
    $position: <num>  
  }
}}

// examples：
db.students.update(
  {_id: 2},
  {
    $push: {
      scores: {
        $each: [90, 80],
        $position: -2 // 在倒数第二个元素之前插入
      }
    }
  }
)
```

#### $sort

- 与$push和$each运算符一起使用，对数组元素进行排序
- 当数组元素是嵌套对象时，使用$sort: {<field>: 1/-1};



```javascript
{$push: {
  <field>: {
    $each: [<value>, ...],
    $sort: <sort specification>   // 1/ -1
  }
}}

// examples: 
db.students.update(
  {_id: 1},
  {$push: {
    quizzes: {
      $each: [{id: 3, score: 8}, {id: 4, score: 7}],
      $sort: { score: 1}
    }
  }}
)

```

#### $slice

- 与$push和$each运算符一起使用，返回指定数量元素的数组
- <num>的值：0（空数组），负数（从末尾截取），正数
- 以前的版本$each修饰符应在第一个

```javascript
{$push: {
  <field>: {
    $each: [<value>, ...],
    $slice: <num>
  }
}}

// examples：
db.students.update(
  {_id: 3},
  {
    $push: {
      scores: {
        $each: [],
        $slice: -3
      }
    }
  }
)
```

#### $pull

- 从现有**数组**中删除 1/多个与指定条件匹配的值的实例
- 删除的是数组，则仅删除顺序一致且完全匹配的数组
- 删除文档，则删除完全相同字段的文档，顺序可不一致

```javascript
{$pull: {
  <field1>: <value | condition>, ...
}}

// examples：
db.stores.update(
  {},
  {
    $pull: {
      fruits: {
        $in: ["apples", "oranges"]// 删除fruits中所有的apples或oranges元素
      },
      vegetables: "carrots"// 删除vegetables中的carrots元素
    }
  }
)

db.profiles.update(
  {_id: 1},
  {
    $pull: {
      votes: {$gte: 6}// 删除votes中所有大于/等于6的元素
    }
  }
)

db.survey.update(
  {},
  {
    $pull: {
      results: {
        score: 8, item: 'b'// 删除results数组中同时包含score为8且item为b的元素
      }
    }
  }
)
```

#### $pullAll

- 删除指定值的实例

```javascript
{$pullAll: {
  <field1>: [<value1>, ...], ...
}}

// examples: 
db.survey.update(
  {_id: 1},
  {
    $pullAll: {
      scores: [0, 5]  // 在scores数组中删除所有的0/5
    }
  }
)
```

#### $pop

- 删除**数组**的第一个元素（使用-1）或最后一个元素（使用1）


```javascript
{$pop: {
  <field>: <-1 | 1>, ...
}}

// examples: 
db.students.update(
  {_id: 1}, 
  {$pop: {
    scores: -1  // 删除scores数组的第一个元素
    scores: 1 // 删除scores数组的最后一个元素
  }}
)
```