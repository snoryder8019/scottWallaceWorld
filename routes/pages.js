const express = require('express');
const router = express.Router();

//time variables
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;


//******HOMEPAGE**********
router.get('/',(req, res) => {
  res.render('pages/index',{title:'Homepage'})
  console.log(showTime+'Index route hit & data logged successfully'+req.ip);
  });
//contact form
router.get('/sandbox',(req, res) => {
  res.render('pages/sandbox',{title:'sandbox'})
  console.log('**************\nsomeone is playing in the sandbox!!  \n'+date)
});
router.get('/scottsDash',(req, res) => {
  res.render('pages/scottsDash',{title:'scotts dash'})
});
router.get('/submission',(req, res) => {
  res.render('pages/submission',{title:'Submitted Successfully'})
});
router.get('/masking',(req, res) => {
  res.render('pages/masking',{title:'masking'})
});
router.get('/contact',(req, res) => {
  res.render('pages/contact',{title:'contact'})
});
router.get('/resume',(req, res) => {
  res.render('pages/resume',{title:'resume'})
  console.log('resume hit')
});
//frontend log checking
module.exports = router;
