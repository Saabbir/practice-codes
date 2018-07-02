/*
	NOTE:
	> Inner execution context always has reference
	> to it's outer execution context.
	> In other words, inner function always have access
	> to it's outer functions variables.
	> Even though the outer execution context
	> or function is gone or finished running.
	> It's called closure.
	> The scope chain always remain intact.
*/

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}
}

var sayHi = greet('Hello');

sayHi('Saabbir');