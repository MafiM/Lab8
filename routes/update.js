var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/CRUD', { native_parser: true });
db.bind('crud');

/* GET home page. */
router.get('/', function (req, res, next) {
  const oldname = req.param('oldname');
  const name = req.param('name');
  const catagory = req.param('catagory');
  const longitude = req.param('longitude');
  const latitude = req.param('latitude');

  db.crud.update({name:oldname},{ name: name, catagory: catagory, location: [longitude, latitude] }, (err, msg) => {
     db.close();
    if (err) {
      console.log(err);
      res.render('messageDisplay', { message: err });
    }
    res.render('messageDisplay', { message: "Data successfully updated!!" });
  });
});

module.exports = router;

