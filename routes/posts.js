const express = require('express');
const router = express.Router();
const fs = require('fs');


//time variables

const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;

//CONTACT FORM POST
router.post('/sendData', (req,res) => {
  console.log('querried '+req.body.sandbox)
        res.render('pages/'+req.body.sandbox);
});
router.post('/blogPost', (req,res) => {
  console.log('querried '+req.body.blogOpt)
        res.render('pages/'+req.body.blogOpt);
});

module.exports = router;
