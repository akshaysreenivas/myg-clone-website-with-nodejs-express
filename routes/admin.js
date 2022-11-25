const express = require('express');
const router = express.Router();
const app = require('../app');

router.get('/', function(req, res, next) {
  res.render('admin');
  
});

module.exports = router;
