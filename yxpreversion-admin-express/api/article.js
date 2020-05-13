function get_article_category(db, router) {

  // 论坛标题分类

  db.collection('new_major').aggregate([{
    "$project": {
      "_id": 0,
      "first_level": "$_id.first_level",
      "second_level": 1
    }
  }], function (err, cursor) {

    cursor.toArray(function (err, result) {
      // console.log(result)

      
      router.get('/title', function (req, res, next) {

        res.send(result)
        client.close()

      });

    });

  })
}

module.exports = {
  get_article_category,
}