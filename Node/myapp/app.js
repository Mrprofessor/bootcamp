
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello There');
	console.log("Request made");
});

app.get('/r/:subredditName', function (req, res) {
	var subReddit = req.params.subredditName;
	res.send('<h1>Welcome to the ' + subReddit.toUpperCase()+ ' page<h1>');
	console.log(req.params);
});

app.get('/r/:subredditName/comments/:id/:title/', function (req, res) {
	res.send('<h1>Welcome to the comments page<h1>');
	console.log(req.params);
});

app.get('/cat', function (req, res){
	res.send('<p style="font-size: 2em;">Love for <b>cats</b></p>');
	console.log("cat request made");
});

app.get('/bye', function(req, res) {
    res.send("Bye Bye");
    console.log("Bye request");
});

app.get('*', function (req, res){
	res.send('<p style="font-size: 2em;">You are typing <b>Rubbish</b></p>');
	console.log("rubbish request made");
});

// listen
app.listen('3000', function(req, res){
	console.log("Starting server.\nCheck on localhost:3000");
});