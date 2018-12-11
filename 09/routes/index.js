var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: "Site Vallidation", success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
});

router.post('/submit',function(req, res) {
  req.check('email','Not correct address').isEmail();
  req.check('password', 'Password too short').isLength({min:6});
  req.check('password','Passwords does not match each other').equals(req.body.confirmpassword);

  var errors = req.validationErrors();
  if(errors) {
    req.session.errors = errors;
    req.session.success = false;
  }
  else {
    res.session.success = true;
  }
  
  res.redirect('/');
});

module.exports = router;
