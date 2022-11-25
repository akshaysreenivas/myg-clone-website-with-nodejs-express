const express = require('express');
const session = require('express-session');
const cookie=require("cookie-parser")
const router = express.Router();
const app = require('../app');
const mobile=require('../items/items')
let loggedIn = false;
/* GET home page. */

router.get('/', function (req, res, next) {
const mobiles=mobile.mobiles;
  res.render('admin', {mobiles,loggedIn});
});
router.get('/login', function (req, res, next) { 
  if(loggedIn)
  res.redirect('/')
  else
  res.render('login');
});
router.post('/login', (req, res, next) => {
  if(loggedIn)
  res.redirect('/')
  else{
  const password = '123456';
  const email = 'aws@gmail.com';
  let newPassword = req.body.userPassword;
  let newEmail = req.body.UserEmail;
  if (newPassword === password && newEmail === email) {
    loggedIn = true;
    res.redirect('/');
    console.log(req.sessionID)
    

  } else {
    console.log('login failed')
    loggedIn = false;
    loginFail=true;
    res.render('login',{loginFail})

  }
}
})
router.get('/logout',(req, res, next)=>{
  loggedIn = false;
  res.redirect('/')
})
module.exports = router;
