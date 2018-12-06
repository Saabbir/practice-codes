/*

**  Lecture Name: Understanding Closures

	NOTES:
	> Inner execution context always has reference to it's outer execution context
	> in which it was created. In other words, inner function always have access
	> to it's outer functions variables in which it was lexically created or sits.
	> Even though the outer execution context was popped off from the call stack.
	> The way of having reference to a variable enviroment which execution context
	> was popped off from the call stack it's called closure.
	> The scope chain always remain intact.

*/

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}
}

var sayHi = greet('Hello'); // Returns a function which has access to the `whattosay` variable via closure

sayHi('Saabbir'); // Logs 'Hello Saabbir'