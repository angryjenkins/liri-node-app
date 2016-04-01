console.log(process.argv);

var command = process.argv[2];
var query = process.argv[3];
//I need cases for each liri command: my-tweets, spotify-this-song, movie-this, do-what-it-says.
var keys = require('./keys.js');


switch(command){
    case 'my-tweets':


      getTweets();
      console.log("tweets should be gotten.");

      break;
  case 'spotify-this-song':

    console.log("this should get spotify information.");

    break;
  case 'movie-this':
    console.log("this should get movie information.");

    break;
  case 'do-what-it-says':
    var fs = require('fs');

    fs.readFile('./random.txt', "utf8", function(err, data){
        data = data.split(', ');
        var command = data[0];
        var query = data[1];

        getSpotifyInfo(command, query);
    });
    console.log("this should pull a spotify query from randon.txt.");

    break;
}

// We will need functions for the following: my-tweets, spotify-this-song, movie-this,do-what-it-says.

function getTweets(){
  var Twitter = require('twitter');

  var client = new Twitter(keys.twitterKeys);

  var params = {screen_name: 'angryjenkins'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      console.log(tweets);
    }
});

}

function getSpotifyInfo(){

}

function getMovieInfo(){
  // sample request api call
  // var request = require('request');
  // request.get('http://www.modulus.io', function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //         console.log(body); // Show the HTML for the Modulus homepage.
  //     }
  // });
}

function getFromRandom(){

}

function logging(command){

}






// command == my-tweets:
//require twitter.
// function to pull 20 of my tweets with timestamps.


// command == spotify-this-song
//require spotify.
// add var query = process.argv[3];
// from spotfiy, get: artist, song title, preview link, album, year.
//  If no song default to Blink 182 - what's my age again.


// command == movie-this
//require request.
//  use OMDB API via request npm package to pull:
// movie name, year, IMDB Rating, Country, Language, Plot, Cast, Rotten Tomatoes Rating, Rotten Tomatoes URL.


// command -- "do-what-it-says"
// pull command and query from random.txt (using fs),
//if not movie, output results for "Mr. Nobody."

//BONUS - log all commands to log.txt
