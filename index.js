var signUpInit = [1,1,1,1,1];
const express =require('express');
const dotenv = require('dotenv').config();
const fs =require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();

//time variables
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;
//
const router = express.Router();
var url = require('url');
//route paths
const routerHandle= require('./routes/pages.js');
const routePosts= require('./routes/posts.js');
const routeLinks= require('./routes/links.js');
//
//const contactSent = require('../pages/partials/contact.ejs');
var http = require('http');
var nodemailer = require('nodemailer');

//middle POST
app.use(express.urlencoded( {extended: true} ))
//middle static
app.use(express.static('public'));
app.use(routerHandle);
app.use(routePosts);
app.use(routeLinks);
//HOMEPAGE
app.get('/',(req, res) => {
  res.render('pages/index',{title:'Homepage'})
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Index Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'Index route hit & data logged successfully'+req.ip);
  });
});
//SET EJS TEMPLATE
  app.set('view engine','ejs');
  //SET SERVER
  console.log('static and listening on:('+port+') started at: '+Date());
  console.log('find app @ www.scottwallace.world');
app.listen(port);
