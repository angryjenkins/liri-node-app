console.log(process.argv);

var command = process.argv[2];
var query = process.argv[3];

//I need cases for each liri command: my-tweets, spotify-this-song, movie-this, do-what-it-says.

switch(command){
    case 'my-tweets':

        getTweets();

        break;
    case 'spotify-this-song':

        break;
    case 'movie-this':

        break;
    case 'do-what-it-says':

        break;
}

// We will need functions for the following: my-tweets, spotify-this-song, movie-this,do-what-it-says.

function getTweets(){

}

function getpotifyInfo(){

}

function getMovieInfo(){

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
