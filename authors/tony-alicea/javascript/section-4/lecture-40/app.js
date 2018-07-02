// function statement
function greet(name) {
	console.log('Hello ' + name);
}
greet('Jhon');

// using a function expression
var greetFunc = function(name) {
	console.log('Hello ' + name);
}
greetFunc('Jhon');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
	return ('Hello ' + name);
}('Jhon');

console.log(greeting);

(function(name) {
	var greeting = "Hello";
	console.log(greeting + ' ' + name);
}('Jhon')); // IIFE