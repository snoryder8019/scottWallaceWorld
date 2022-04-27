const express =require('express');
const client = require('./config/mongo.js')
const env = require('dotenv').config();
const port = process.env.PORT;
const app = express();
var url = require('url');
var http = require('http');
const { json } = require('express/lib/response');
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
const miniBattle = require(__dirname+'/routes/miniBattle.js')
const routerHandle= require(__dirname+'/routes/pages.js');
const routePosts= require(__dirname+'/routes/posts.js');
const routeLinks= require(__dirname+'/routes/links.js');
const routeBlogs= require(__dirname+'/routes/blogs.js');
const routerBloger = require(__dirname+'/routes/blogs/blogs.js');
//route app.use
app.use(routerHandle);
app.use(miniBattle);
app.use(routePosts);
app.use(routeLinks);
app.use(routeBlogs);
app.use(routerBloger);
//SET EJS TEMPLATE
  app.set('view engine','ejs');
//



//
//SET SERVER

  console.log('\nNode Starting up on port:('+port+')!! \n\n*****started at***** \n'+Date());
  console.log('********************\nfind app @ www.scottwallace.world');
app.listen(port);
