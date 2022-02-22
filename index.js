const express =require('express');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.tpmae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoose = require('mongoose');


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
const routerHandle= require(__dirname+'/routes/pages.js');
const routePosts= require(__dirname+'/routes/posts.js');
const routeLinks= require(__dirname+'/routes/links.js');
const routeBlogs= require(__dirname+'/routes/blogs.js');
const routerBloger = require(__dirname+'/routes/blogs/blogs.js');
//route app.use
app.use(routerHandle);
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
