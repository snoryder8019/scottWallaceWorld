const express = require('express');
const router = express.Router();
const fs = require('fs');
let alert = require('alert');
const env = require('dotenv').config();
//time variables
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;
const { append } = require('express/lib/response');
const client = require('../config/mongo.js')

router.post('/miniBattle', (req,res) => {
console.log('mini battle registry')

///////////////////////
async function main(){
try {
  await client.connect();
  await createBattler(client,{
    name: req.body.fname,
    email: req.body.email,
    class : req.body.class
  });
}catch (err){
  console.log(err)
}finally{
  await client.close();
}
}

main().catch(console.error);

async function createBattler(client,newBattler){
 const result = await client.db("miniBattle").collection("miniBattler").insertOne(newBattler);
 console.log('new user id: '+result.insertedId+'\n email: '+ req.body.class+'from IP: '+ req.body.ip)
}
/////////////////////


  console.log("posts initiated")
  res.render('pages/index');
});
router.post('/lookupHero', (req,res)=>{
///////
async function mainLookup(){
  try{
  await client.connect();
  await lookupHero(client, req.body.nameLookup);
}catch(err){
  console.log(err)
}finally{
  await client.close();
}}
mainLookup().catch(console.error)
async function lookupHero(client, nameOfHero){
  const result= await client.db('miniBattle').collection('miniBattler').findOne({name:nameOfHero});
  if (result){
    console.log('found: '+nameOfHero)
    console.log(result);
    fs.writeFile('gameTemp/player1.txt',result.name+'\n'+ result.class, (err)=>{
      if(err)
      console.log(err);
      else{
        console.log('player 1 txt updated')
      }
    })
  }else{
    console.log('no Hero Found')
  }
  }})
/////////////////



module.exports = router;
