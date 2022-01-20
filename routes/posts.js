const express = require('express');
const router = express.Router();
const fs = require('fs');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.tpmae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoose = require('mongoose');


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
router.post('/contactform', (req,res) => {

    async function run() {
      try {
        await client.connect();
        const database = client.db("users");
        const user = database.collection("userInfo");
        // create a document to insert
        const doc = {
          name: req.body.fname,
          email: req.body.email,
          message: req.body.message,
        }
        const result = await user.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);

    console.log('connected to mongo db!!! Hooray!!')
    //
    client.close();
    console.log('mongo connection closed')


  console.log('querried '+req.body.fname)
        res.render('pages/submission');
});

module.exports = router;
