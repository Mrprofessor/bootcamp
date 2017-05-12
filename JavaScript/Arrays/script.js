
//part 1
var arr = [1,2,3,4];
var uni = ['a','a','a','a'];
function printReverse (array) {
	// body... 
	console.log('Printing array in reverse order.');
	for(var i=array.length-1;i>=0;i--)
		console.log(array[i]);
}
printReverse(arr);
printReverse([65,12,99]);

//part 2

function isUniform(array) {
	var pivot = array[0];
	var flag = true;
	for(var i=1;i<array.length;i++) {
		if(pivot !== array[i]) {
			flag = false;
			break;
		}
	}
	console.log(flag);
}
isUniform(arr);
isUniform(uni);
// part 3

function sumArray(array) {
	var sum = 0;
	array.forEach( function(element, index) {
		// statements
		sum += element;
	});
	console.log("sum is : " + sum);
}
sumArray([1,1,1,1]);
sumArray(arr);


//part 4

function max(array) {
	var max = array[0];
	array.forEach( function(element, index) {
		// statements
		if(max < element)
			max = element;
	});
	console.log("maximum no is : "+max);
}
max([1,1,1,1]);
max(arr);


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