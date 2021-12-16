//first twitter bot
console.log('the bot has started');
var Twit = require('twit');
var fs = require('fs');
var T = new Twit({
  consumer_key:         'bfmVy4XOd1KwLmfcYTdv8XxcL',
  consumer_secret:      '17A2VQh2Ty2BV5CBz9bY104gq34Oth0keMH3QsF2qlh6XWmx4v',
  access_token:         '194026618-MQ01NklkkNOlsR6ciIiZRhIuLlKH2s5qdciVtQJg',
  access_token_secret:  'vrKD7vYlrkKEBJwZMBy8un0QDDvdwohfY1h9CvLPuXch0',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
//config search parameters below
var status1 = "rvn"
var status2 = "ravencoin"
var stream = T.stream('statuses/filter', { track: status1 && status2 ,language: 'en' })

stream.on('tweet', function (tweet) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~DATE:'+Date()+'USERNAME:'+tweet.user.name+'~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(tweet.text)
  fs.appendFile('./views/partials/twits.ejs','<div class="tweetBox"><div class="tweetfeed">'+tweet.text+'</div><div class="tweetUser"><span class="logoFont">'+tweet.user.name+'</span></div></div><br>', function (err) {
      if(err) {throw err};

        });

})
console.log('twitter Stream is now open!!!')
/*API:
bfmVy4XOd1KwLmfcYTdv8XxcL
API Secret:
17A2VQh2Ty2BV5CBz9bY104gq34Oth0keMH3QsF2qlh6XWmx4v

access:
194026618-MQ01NklkkNOlsR6ciIiZRhIuLlKH2s5qdciVtQJg
access secret:
vrKD7vYlrkKEBJwZMBy8un0QDDvdwohfY1h9CvLPuXch0*/
