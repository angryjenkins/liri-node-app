# liri-node-ap
Meet LIRI - the Language Interpretation and Recognition Interface
-----------------------------------------------------------------


This is LIRI. LIRI is a command line application built with Node v5.10.0. it uses arguments entered into the command line to search tweets, pull movie info, and search for music.

Installation
------------

To install this application, simply clone this repo to your computer:

*$ git clone https://github.com/angryjenkins/liri-node-app.git*

Operation
---------

To use the application, open a terminal or bash window in the directory you cloned.

To call the app, the first two arguments will be *node liri*. After this, use the following:

+ *my-tweets* - by default, will log my last twenty tweets. Include a fourth argument with of th e twitter handle you want to query to pull their last twenty tweets.

example: $ node liri my-tweets angryjenkins

+ *movie-this* - by default, will log movie information about "Mr. Nobody". To query a movie, include it as your fourth argument.

example: $ node liri movie-this fargo

+ *spotify-this-song* by default, will log song info from spotify for Blink 182's "What's My Age Again". include a fourth argument to query a specific song title.

example: $ node liri spotify-this-song juicy

+ *do-what-it-says* this  command pulls a command and query from the textfile "random.txt"
