/*
	NOTE:
	> Execution context has two phases.
	> One is creation phase.
	> Another is execution phase.
	> Creation phase runs first before execution phase.
	> In creation phase, JavaScript engine looks into it's current execution context
	> and finds out all the variables and functions are declared
	> and stores them in the memory space.
	> Then execution phase happen that will execute code top to bottom line by line character by character.
	> That means JavaScript engine first setup the memory location for variables and functions before execution.
	> That's called Hoisting.
	> Functions are stored in the memory entirely in the creation phase.
	> But variables are stored in the memory with the initial value of undefined.
	> Not the value that assign to it in the code.
	> As the JavaScript engine don't know what the value is assigned to it in the creation phase.
	> That will be known when execution phase runs and reach that assignment line.
*/

b(); // When execution phase reach this line, it finds this function in the memory and runs it.

console.log(a); // When execution phase reach this line, it sees the value of a is undefined and prints it.

var a = "Hello World!";

function b() {
	console.log('Called b!');
}

// But the above style is not preferred as it is confusing.
// Always use function and variable bottom of the declaration.

console.log('---------------------------------');

b();

console.log(a);