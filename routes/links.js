const express = require('express');
const router = express.Router();

router.get('/blc',(req,res)=>{
res.redirect('http://www.badassladiesclub.com')});
router.get('/valrick',(req,res)=>{
res.redirect('http://www.valricktravels.com')});
router.get('/w2',(req,res)=>{
res.redirect('http://www.w2marketing.biz')});
router.get('/zeroGravity',(req,res)=>{
    res.redirect('http://www.zerogravityinflatables.com')});
    router.get('/github',(req,res)=>{
        res.redirect('http://www.github.com/snoryder8019')});
module.exports = router;
