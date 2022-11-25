var express = require('express');
var router = express.Router();
const app = require('../app');

router.get('/account', function(req, res, next) {
  res.render('admin');
  
});

module.exports = router;
