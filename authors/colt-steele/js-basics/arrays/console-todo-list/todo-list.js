var todos = ['Practice JavaScript'];

var input = prompt("What would you like to do?");

while (input !== 'quit') {
	if (input === 'view') {
		displayTodo();
	} else if (input === 'add') {
		addTodo();
	} else if (input === 'delete') {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log('YOU QUIT THE APP!');

function displayTodo() {
	console.log('**********');
	todos.forEach(function(item, index) {
		console.log(index + ': ' + item);
	});
	console.log('**********');	
}

function addTodo() {
	var todo = prompt('Enter a new todo.');
	todos.push(todo);
	console.log('Todo Added!');	
}

function deleteTodo() {
	var todoIndex = prompt('Enter the todo index you want to be deleted.');
	todoIndex = Number(todoIndex);
	todos.splice(todoIndex, 1);
	console.log('Todo Deleted!');
}