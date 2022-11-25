const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = require('../app');
const mobile=require('../items/items')
const mobiles=mobile.mobiles;

const filestore=require("session-file-store")(session)

/* GET home page. */

router.get('/', function (req, res, next) {

let user=req.session.user

console.log(user)

  res.render('home', {mobiles,user});
});
router.get('/login', function (req, res, next) { 
  if(req.session.user){
    res.redirect('/');
   } else{
    res.render("login")
    }
});
router.post('/login', (req, res, next) => {
  const data={password:'123456',email:'aws@gmail.com',name:'Akshay'}
 
  let newPassword = req.body.userPassword;
  let newEmail = req.body.UserEmail;

  if (newPassword === data.password && newEmail === data.email) {
    req.session.user=data;
    req.session.islogged=true;

    console.log(req.sessionID)
    console.log(req.session.user)
    
    res.redirect('/');
  } else {
    console.log('login failed')
    res.redirect('/login')
  }
})
router.get('/logout',(req, res, next)=>{
  res.redirect('/')
})




module.exports = router;
