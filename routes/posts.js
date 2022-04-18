const express = require('express');

const router = express.Router();
const fs = require('fs');
const nodemailer = require('nodemailer');

let alert = require('alert');

const env = require('dotenv').config();
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
router.post('/contactQuerry', (req,res) =>{

});
router.post('/contactform', (req,res) => {

///////////////////////

const { MongoClient} = require('mongodb');

async function main(){
const uri = "mongodb+srv://"+process.env.MONGOUSER+":"+encodeURIComponent(process.env.MONGOPASS)+"@cluster0.tpmae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
 // connection async try catch 
try {
  await client.connect();
  //main function durin db call

  //call another function
  await createUser(client,{
    name: req.body.fname,
    email: req.body.email,
    message : req.body.message
  });
}catch (err){
  console.log(err)
}finally{
  await client.close();
}
}
main().catch(console.error);

async function createUser(client,newUser){
 const result = await client.db("users").collection("users").insertOne(newUser);

 console.log('new user id: '+result.insertedId+'\n email: '+ req.body.email)

}
//async function in connection call
async function listDatabases(client){
  const databasesList =  await client.db().admin().listDatabases();
//handle return information
  console.log("databases:");
databasesList.databases.forEach(db =>{
  console.log('-'+db.name);
})
}


/////////////////////

  console.log("posts initiated")
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    port:465,
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
