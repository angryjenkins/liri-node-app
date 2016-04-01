console.log(process.argv);

var command = process.argv[2];
var query = process.argv[3];
//I need cases for each liri command: my-tweets, spotify-this-song, movie-this, do-what-it-says.

switch(command){
    case 'my-tweets':

      console.log("Getting tweets, ....");
      getTweets();

      break;
  case 'spotify-this-song':

    console.log("this should get spotify information.");
    getSpotifyInfo();
    break;
  case 'movie-this':
    console.log("this should get movie information.");
    getMovieInfo();
    break;
  case 'do-what-it-says':
    getFromRandom();
    getSpotifyInfo();

    console.log("this should pull a spotify query from randon.txt.");

    break;
}

// We will need functions for the following: my-tweets, spotify-this-song, movie-this,do-what-it-says.

function getTweets(){
  var Twitter = require('twitter');
  var keys = require('./keys.js');
  var client = new Twitter(keys.twitterKeys);

  var params = {screen_name: 'angryjenkins', count: 20};

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      console.log(tweets);
    }
});

}

function getSpotifyInfo(){
  var query = process.argv[3];
  var spotify = require('spotify');

  spotify.search({ type: 'track', query: query}, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }

      var spotifyData = data.tracks.items[0];

      console.log(spotifyData);

  });

}

function getMovieInfo(query){
  var request = require('request');
  var queryURL = 'http://www.omdbapi.com/?type=movie&s=' + query;
  // sample request api call
  // var request = require('request');
  request.get(queryURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(response); // Show the HTML for the Modulus homepage.
      }
  });
}

function getFromRandom(){
    var fs = require('fs');

    fs.readFile('./random.txt', "utf8", function(err, data){
        data = data.split(', ');
        console.log(data);
        return data;

    });

    var command = data[0];
    var query = data[1];


}

function logging(command, query){

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
