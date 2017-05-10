var db = [
	{
		title : 'Wanted',
		rating : 3,
		hasWatched : true
	},
	{
		title : 'Mad Max',
		rating : 5,
		hasWatched : true
	},
	{
		title : 'Bullshit',
		rating : 0.5,
		hasWatched : false
	},
	{
		title : 'Blood diamond',
		rating : 4.5,
		hasWatched : true
	}
]

function buildString(movie) {
	// statements
	var result = "You have "
	if(movie.hasWatched) {
		result += "watched "
	}
	else{
		result += "not watched "
	}

	result +=  "\"" + movie.title + "\"" + " - " + movie.rating + " stars. "
	return result;
}

db.forEach( function(movie) {
	// statements
	console.log(buildString(movie));
});