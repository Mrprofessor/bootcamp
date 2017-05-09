

console.log("CONNECTED");
var todos = [];

var input = prompt("What would you like to do ?");

while(input !== "quit") {

	if(input === "list"){
		console.log(todos);
	} else if (input === "new") {
		var newTodo = prompt("Enter new task.");
		todos.push(newTodo);
	}
	input = prompt("What would you like to do ?");
}

console.log("Okay..You quit the app.");