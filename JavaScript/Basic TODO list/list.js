var todos = [];

var input = prompt("What would you like to do ?");

while(input !== "quit") {

	if(input === "list"){
		
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do ?");
}


function listTodos() {
	
	todos.forEach(function(element,i) {
		console.log('***************');
			console.log(i+1 + " : " + element);
		});
}

function addTodo() {
	var newTodo = prompt("Enter new task.");
		todos.push(newTodo);
}

function deleteTodo() {
	var index = prompt("Which index...?");
		todos.splice(index,1);
		console.log("Deleted Todo.")
}



console.log("Okay..You quit the app.");