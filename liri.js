console.log(process.argv);

var command = process.argv[2];
var query = process.argv[3];

switch(command){
    case 'my-tweets':
    	
        gerTweets();

        break;
    case 'spotify-this-song':
        
        break;
    case 'movie-this':

        break;
    case 'do-what-it-says':
        
        break;
}
// var query = "https://api.twitter.com/1.1/search/tweets.json?q=%40angryjenkins"

	var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (!error) {
			console.log(tweets);
	  	}
});.

}

function getpotifyInfo(){

}

function getMovieInfo(){

}

function getFromRandom(){
	fs.readFile("bestThingsEver.txt", "utf8", function(err,data){
		//pull commas and make line breaks (alternate);

		var output = data.split(',');

		for (i=0; i<output.length;i++){
			console.log(output[i]);
		}

		var command = output[0];
		var query = output[1];
		var fs = require('fs');

		fs.readFile("random.txt", "utf8", function(err,data){
			var output = data.split(',');
			var command = output[0].trim();
			var query = output[1].trim();


			for (i=0; i<output.length;i++){
				console.log(output[i]);
			}

			// console.log(dataString);
		});
	});

}

function logging(command){

}


//I need cases for each liri command: my-tweets, spotify-this-song, movie-this, do-what-it-says.


// We will need functions for the following:

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