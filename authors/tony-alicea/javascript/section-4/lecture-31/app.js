/*
	NOTE:
	> In global execution context, all function statements
	> and variables are stored in the memory location
	> before syntax parser starts executing the code.
	> This is happened in the creation phase of the execution context.
	> And this is called hoisting.
	> All variables in the execution context creation phase
	> are set equal to undefined primitive data type value.
	> Execution phase comes after creation phase in the execution context.
*/

greet(); // Will work as the function is already in the memory.

// Function statement
function greet() {
	console.log('Hi');
}

//greetTwo(); // At this point, greetTwo variable is undefined. And undefined can't be invoked.

// Function expression
var greetTwo = function() {
	console.log('Hey');
}

greetTwo();

function greetThree(fn) {
	fn(); // Parameter used as a function
}

greetThree(function() { // Passed function as a parameter
	console.log('Hello');
})