const express = require('express');
const router = express.Router();

router.get('/blogs',(req, res) => {
  res.render('pages/blogs',{title:'blogs'})


});

module.exports = router;
