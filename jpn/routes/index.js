var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
/* GET home page. */

//terrible function but placeholder




router.get('/', function(req, res) {
  res.render('layout', { title: 'Express' });
});



module.exports = router;
