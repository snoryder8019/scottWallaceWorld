const express = require('express');
const router = express.Router();

router.get('/blogs',(req, res) => {
  res.render('pages/blog0',{title:'blogs'})


});

module.exports = router;
