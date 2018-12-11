var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!', condition: 'True'});
});

router.get('/test/:id', function(req, res){
  res.render('test', {output : req.params.id})
})

router.post('/test/submit',function(req, res) {
  var id = req.body.id;
  res.redirect('/test/'+id);
});

module.exports = router;
