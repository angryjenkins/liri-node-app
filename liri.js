// console.log(process.argv);

var command = process.argv[2];

//I need cases for each liri command: my-tweets, spotify-this-song, movie-this, do-what-it-says.

switch(command){
    case 'my-tweets':
    console.log("Getting tweets, ....");

    getTweets();
    logging(command);
    break;

  case 'spotify-this-song':
    console.log("Getting spotify info, ....");

    getSpotifyInfo();
    logging(command,query);
    break;

  case 'movie-this':
    console.log("Getting OMDB info, ....");

    getMovieInfo();
    logging(command,query);
    break;

  case 'do-what-it-says':
    console.log("Reading random.txt, ....");

    getFromRandom();

    break;
}

// We will need functions for the following: my-tweets, spotify-this-song, movie-this,do-what-it-says.

function getTweets(){
  var Twitter = require('twitter');
  var keys = require('./keys.js');
  var client = new Twitter(keys.twitterKeys);

  if(process.argv[3]){
    var query = process.argv[3];
  } else {
    var query = '@angryjenkins';
  }

  var params = {screen_name: query, count: 20};

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {

      for(i=0; i<tweets.length;i++){
        console.log("Tweet #" + (i+1));
        console.log("Screen Name: @" + tweets[i].user.screen_name + " (Real Name: " + tweets[i].user.name  + ")");
        console.log("Created: " + tweets[i].created_at);
        console.log("Tweet: " + tweets[i].text);
      }
    }
  });

  return query;
}

function getSpotifyInfo(){
  var spotify = require('spotify');

if(process.argv[3]){
    var query = process.argv[3];
} else {
  var query = 'whats my age again';
}


  spotify.search({ type: 'track', limit: "1", offset: "1", query: query}, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }

      var spotifyData = data.tracks.items[0];

      // console.log(spotifyData);
      console.log('Your Song Query *****');
      console.log('artist: ' + spotifyData.artists[0].name);
      console.log('song title: ' + spotifyData.name);
      console.log('preview link: ' + spotifyData.external_urls.spotify);
      console.log('album: ' + spotifyData.album.name);
      console.log('release date: ' + data.release_date);
    });

    return query;
}

function getMovieInfo(){
  if(process.argv[3]){
    var query = process.argv[3];
  } else {
    var query = "Mr Nobody";
  }

  var request = require('request');
  var queryURL = 'http://www.omdbapi.com/?type=movie&s=' + query;
  // sample request api call
  // var request = require('request');
  request.get(queryURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(response.body);
      }
  });

  return query;
}

function getFromRandom(){
    var fs = require('fs');

    fs.readFile('./random.txt', "utf8", function(err, data){
        data = data.split(',');
        console.log(data);
        // return data;
        var command = data[0];
        var query = data[1];

        console.log('Command: ' + command);
        console.log('Query: ' + query);

        getSpotifyInfo(query);
        logging(command,query);

        return query;
    });

}

function logging(){
  var fs = require('fs');

  var logTime = new Date();
  if(process.argv[3]){
    var logQuery = process.argv[3];

  } else {
    var logQuery = '(@angryjenkins)';
  }

  fs.appendFile('liriLog.txt', logTime + ': ' + command + ' -- ' + logQuery + '\n');

  console.log("activity logged: "+ command + ' , ' + logQuery);
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
