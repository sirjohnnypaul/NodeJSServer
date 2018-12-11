var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!', condition: 'True', myTable: [1,2,3] });
});

module.exports = router;
