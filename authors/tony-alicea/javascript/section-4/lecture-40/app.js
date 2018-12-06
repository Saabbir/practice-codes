/*
**  Lecture Name: Immediatly Invoked Function Expression (IIFE)

	NOTES:
	> If JavaScript engine sees function keyword as the first word it expects
	> a space and a name after it as part of function declaration rule. If it
	> not finds it, it will throw a SyntaxError. We can escape that by 
	> wrapping the whole function defination inside a grouping operator ()
	> to use it as a function expression.
*/

// Function statement
function greet(name) {
	console.log('Hello ' + name);
}
greet('Jhon'); // Logs 'Hello Jhon'

// Function expression
var greetFunc = function(name) {
	console.log('Hello ' + name);
}
greetFunc('Jane'); // Logs 'Hello Jane'

// Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
	return ('Hello ' + name);
}('Mary'); // We can immediately call the function after creation

console.log(greeting); // Logs 'Hello Mary'

(function(name) {
	var greeting = "Hello";
	console.log(greeting + ' ' + name);
}('Saabbir')); // Returns 'Hello Saabbir'