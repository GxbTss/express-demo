var express = require('express');
var router = express.Router();
var userModel = require('../models/userModels.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 用户列表
router.get('/list', function(req, res, next) {
  // var list = [
  //   {
  //     _id: 1,
  //     username: 'tom',
  //     email: '12345678@qq.com'
  //   }
  // ];
  userModel.find(function(err, data){
    if (err) {return console.log(err)}
    console.log(data)
    res.render('UserList', {
      user: data
    })
  })
  // res.render('UserList', {
  //   user: list
  // })
})
// 添加用户
router.get('/add', function(req, res, next) {
  res.render('UserAdd')
})
router.post('/add', function(req, res, next) {
  console.log(req, res)
  var newuser = new userModel({
    username: req.body.username,
    email: req.body.email
  })
  newuser.save(function(err, data) {
    if (err) {return console.log(err)}
    res.redirect('/users/list')
  })
})

module.exports = router;
