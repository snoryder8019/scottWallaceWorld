const express = require('express');
const router = express.Router();
const fs = require('fs');

//time variables
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;


//******HOMEPAGE**********
router.get('/',(req, res) => {
  res.render('pages/index',{title:'Web Developer | Scott Wallace | Portfolio'})
 console.log('index hit at: '+Date())

});
//sandbox 2
router.get('/sandboxV2',(req,res)=>{
  res.render('pages/sb2');
})
//contact form
router.get('/sandbox',(req, res) => {
 ////
 async function listEm(client){
  const player1= await client.db('miniBattle').collection('miniBattler').findOne({name:"Scott"});
  if (player1){
    console.log(player1)
  }else{
    console.log('no Hero Found')
  }
 }

async function listHeroes(){
  try{
  await client.connect();
  await listEm(client);
}catch(err){
  console.log('err: '+err)
}finally{
  await client.close();
  }
}

//listHeroes().catch(console.error)
////

 res.render('pages/sandbox')
 
  console.log('**************\nsomeone is playing in the sandbox!!  \n'+date)
});
router.get('/scottsDash',(req, res) => {
  res.render('pages/scottsDash',{title:'scotts dash'})
});
router.get('/submission',(req, res) => {
  res.render('pages/submission',{title:'Submitted Successfully'})
});
router.get('/masking',(req, res) => {
  res.render('pages/masking',{title:'masking'})
});
// router.get('/twitch',(req, res) => {
//   res.render('pages/twitch',{title:'twitch'})
// });
router.get('/contact',(req, res) => {
  res.render('pages/contact',{title:'contact'})
});
router.get('/resume',(req, res) => {
  res.render('pages/resume',{title:'resume'})
  console.log('resume hit')
});
//frontend log checking
module.exports = router;
