const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = require('../app');
const mobile = require('../items/items')
const mobiles = mobile.mobiles;

/* GET home page. */

router.get('/', function (req, res, next) {
  let user = req.session.user
  res.render('home', { mobiles, user });
});
router.get('/login', function (req, res, next) {
  if (req.session.islogged) {
    res.redirect('/');
  } else {
    res.render("login",{loginfail:req.session.loginfail})
    req.session.loginfail=false
  }
});
router.post('/login', (req, res, next) => {
  const data = { password: '123456', email: 'aws@gmail.com', name: 'Akshay' }
  let log = req.session.islogged;
  if (log) {
    res.redirect('/');
  }
  else {
    if (req.body.userPassword === data.password && req.body.UserEmail === data.email) {
      req.session.user = data;
      req.session.islogged = true;
      res.redirect('/');
    } else {
req.session.loginfail=true;      
      res.redirect('/login')
    }
  }
})
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
})




module.exports = router;
