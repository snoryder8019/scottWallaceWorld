const express =require('express');
const dotenv = require('dotenv').config();
const fs =require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();
const router = express.Router();
var url = require('url');
var http = require('http');
var nodemailer = require('nodemailer');
//time variables
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;
//middle POST
app.use(express.urlencoded( {extended: true} ))
//middle static files
app.use(express.static('public'));
//route paths
const routerHandle= require('./routes/pages.js');
const routePosts= require('./routes/posts.js');
const routeLinks= require('./routes/links.js');
const routeBlogs= require('./routes/blogs.js');
const routerBloger = require('./routes/blogs/blogs.js');
//route app.use
app.use(routerHandle);
app.use(routePosts);
app.use(routeLinks);
app.use(routeBlogs);
app.use(routerBloger);
//SET EJS TEMPLATE
  app.set('view engine','ejs');
//SET SERVER
  console.log('\nNode Starting up on port:('+port+')!! \n\n*****started at***** \n'+Date());
  console.log('********************\nfind app @ www.scottwallace.world');
app.listen(port);
