var http = require ("http");
var twitter = require("twitter")
var PORT1 = 7000;


// TWITTER//
var client = new Twitter(keys.twitterKeys);

var params = { screen_name: 'AnaGarces' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    
        if (error) {
            return console.log("liri doesn't understand that commands");
        }
    
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                var date = tweets[i].created_at
                var texts = tweets[i].text
            }
            console.log( date, texts)
        }
    
    });


function handleRequest1(request, response) {
    
    response.end( date, texts  
        + request.url);
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function () {
    console.log("Server listening on: http://localhost:" + PORT1);
})


var PORT2 = 7500;

function handleRequest2(request, response) {
    
    response.end("When someone tells me 'no,' it doesn't mean I can't do it, it simply means I can't do it with them." + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function () {
    console.log("Server listening on: http://localhost:" + PORT2);
})