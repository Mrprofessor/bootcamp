
var express = require('express');
var app = express();
var sorry = "Sorry page not found...What are you doing wid ur life?"
var def = "Hi there, welcome to my assignment.!"

app.get('/', function (req, res) {
	res.send('<h1 style="color:teal;">'+ def +'</h1>');
	console.log("normal request made");
});


app.get('/speak/:string', function (req, res) {

	var animal = req.params.string.toLowerCase();
	var sound = "";
	var sounds = {

		pig : "Oink.",
		cow : "Moo.",
		dog : "Woof woof.",
		goldfish : "......",
		crow : "ka kaaa.",
		cat : "I hate you Human"
	};
	
	
	sound = sounds[animal];

	res.send('<h1 style="color:teal;"> The '+ animal +' says ' + sound + '</h1>');
	console.log("dynamic level-1 request made");
});

app.get('/repeat/:str/:num', function (req, res) {

	var str = req.params.str;
	var num = Number(req.params.num);
	var word = ""
	for(var i = 0; i < num; i++){
		word += str + " ";
	}
	


	res.send('<h1 style="color:teal;">'+ word + '</h1>');
	console.log("dynamic level-2 request made about " + str);
});

app.get('*', function (req, res){
	res.send('<h1 style="color:red;">'+ sorry +'</h1>');
	console.log("rubbish request made");
});

// listen
app.listen('3000', function(req, res){
	console.log("Starting server.\nCheck on localhost:3000");
});