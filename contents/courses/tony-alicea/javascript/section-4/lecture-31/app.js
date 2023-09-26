/*

	Lecture Name: Function Statement and Function Expression

*/

greet(); // Will work as the function is already in the memory.

// Function statement
function greet() {
	console.log('Hi');
}

//greetTwo(); // At this point, greetTwo variable is undefined. And undefined can't be invoked. TypeError will be thrown.

// Function expression
var greetTwo = function() {
	console.log('Hey');
}

greetTwo(); // Logs 'Hey'

function greetThree(fn) {
	fn(); // Parameter used as a function
}

greetThree(function() { // Passed function as an argument
	console.log('Hello');
})