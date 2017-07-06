var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/CRUD', { native_parser: true });
db.bind('crud');

/* GET home page. */
router.get('/', function (req, res, next) {
  const name = req.param('name');

  db.crud.remove({ name: name }, (err, msg) => {
    db.close();
    if (err) {
      console.log(err);
      res.render('messageDisplay', { message: err });
    }
    res.render('messageDisplay', { message: "Data successfully deleted!!" });
  });
});

module.exports = router;

