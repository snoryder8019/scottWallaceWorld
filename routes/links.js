const express = require('express');
const router = express.Router();

router.get('/blc',(req,res)=>{
    console.log("outbound count function needed BALC")
res.redirect('http://www.badassladiesclub.com')});

router.get('/swlc',(req,res)=>{
res.redirect('https://www.somewherelandingcabins.com')});
router.get('/w2',(req,res)=>{
res.redirect('http://www.w2marketing.biz')});
router.get('/sook',(req,res)=>{
res.redirect('http://www.southernoklahomapride.org')});

router.get('/zeroGravity',(req,res)=>{
    res.redirect('http://www.zerogravityinflatables.com')});
router.get('/noco',(req,res)=>{
    res.redirect('http://www.nocometalworkz.com')});

    router.get('/github',(req,res)=>{
        res.redirect('http://www.github.com/snoryder8019')});

        module.exports = router;
