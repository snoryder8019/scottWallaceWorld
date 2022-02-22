const express = require('express');

const router = express.Router();
const fs = require('fs');
const nodemailer = require('nodemailer');
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.tpmae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const mongoose = require('mongoose');
let alert = require('alert');

const dotenv = require('dotenv').config();
// const user = {
//   name:${fname},
//   email:${email},
//   message:${message}
// }


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

router.post('./contactQuerry', (req,res) =>{

});
router.post('/contactform', (req,res) => {
  // client.connect(err => {
  //   db.collection('inventory').insertOne({
  //     item: req.body.fname,
  //     qty: req.body.email,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' }
  //   });
  //   // perform actions on the collection object
  //   console.log('mongo GO!')
  //   client.close();
  // });




  console.log("posts initiated")
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
       //type:'OAuth2',
        user: process.env.EMAILNAME,
        pass:process.env.EMAILPASS,
        // clientId: cId,
        // clientSecret:cSec,
        // refreshToken:rToke,
        // accessToken:accessToken
      }
})
    let mailOptions = {
        from:'Your Portfolio WebApp!! from '+ req.body.fname + ' from email:'+ req.body.email,
        to:'m.scott.wallace@gmail.com',
        //to:'zgravityinflatables@gmail.com',
        subject:'SCOTTWALLACE.WORLD SUBMISSION',
        text: req.body.message,
        html:'<h1>User Submission </h1><br><h2>'+req.body.message+'</h2>'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("transporter "+error);

        }
        else{
        console.log('email sent'+ info.response)
        }
      
    })
  res.render('pages/index');
  alert('contact information sent!!')
});

module.exports = router;
