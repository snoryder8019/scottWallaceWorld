//first twitter bot
console.log('the bot has started');
var Twit = require('twit');
var fs = require('fs');
const dotenv = require('dotenv').config();

var T = new Twit({
  consumer_key:         process.env.TWIT_KEY,
  consumer_secret:      process.env.TWIT_SECRET,
  access_token:         process.env.TWIT_TOKEN,
  access_token_secret:  process.env.TWIT_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
//config search parameters below
var status1 = "#getupgreeley"
var status2 = "greeleyunexpected"
var stream = T.stream('statuses/filter', { track: status1 && status2 ,language: 'en' })

stream.on('tweet', function (tweet) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~DATE:'+Date()+'USERNAME:'+tweet.user.name+'~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(tweet.text)
  fs.appendFile('./views/partials/twits.ejs','<div class="tweetBox"><div class="tweetfeed">'+tweet.text+'</div><div class="tweetUser"><span class="logoFont">'+tweet.user.name+'</span></div></div><br>', function (err) {
      if(err) {throw err};

        });

})
console.log('twitter Stream is now open!!!')
