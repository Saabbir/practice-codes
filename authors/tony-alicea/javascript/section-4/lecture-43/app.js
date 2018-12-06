/*
	Lecture Name: Understanding Closure Part 2

	NOTES:
	> Only thing to remember to understand closure is where was the function created
	> during which execution context. The created function has access to that function's
	> local variable which was created during that function's execution context.
*/

function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
			function() {
				console.log(i);
			}
		);

	}

	return arr;
}

var fs = buildFunctions();

fs[0](); // Logs 3
fs[1](); // Logs 3
fs[2](); // Logs 3

function buildFunctions2() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(

			(function(j) {

				return function() {
					console.log(j);
				}

			}(i))

		)

	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // Logs 0
fs2[1](); // Logs 1
fs2[2](); // Logs 2