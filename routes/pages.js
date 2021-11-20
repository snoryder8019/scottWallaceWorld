const express = require('express');
const router = express.Router();



//frontend log checking
router.get('/scottlogs',(req, res) => {
  res.render('pages/logs',{title:'Logs'})
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' ScottLogs Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'ricklogs route hit & data logged successfully'+req.ip);
  });
});
//contact form
router.get('/contact',(req, res) => {
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Contact Form Hit '+req.ip, function (err) {
      if(err) {throw err};
      console.log(showTime+' Contact route hit & data logged successfully'+req.ip);
  });
    res.render('pages/contact',{title:'contact'})
});

router.get('/sandbox',(req, res) => {
  res.render('pages/sandbox',{title:'sandbox'})


});
router.get('/masking',(req, res) => {
  res.render('pages/masking',{title:'masking'})


});
router.get('/resume',(req, res) => {
  res.render('pages/resume',{title:'resume'})
  console.log('resume hit')

});
//frontend log checking
router.get('/scottlogs',(req, res) => {
  res.render('pages/logs',{title:'Logs'})
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' ScottLogs Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'scotts logs route hit & data logged successfully'+req.ip);
  });
});
//contact form
router.get('/contact',(req, res) => {
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Contact Form Hit '+req.ip, function (err) {
      if(err) {throw err};
      console.log(showTime+' Contact route hit & data logged successfully'+req.ip);
  });
    res.render('pages/contact',{title:'contact'})
});
module.exports = router;
