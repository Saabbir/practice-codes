/*
	NOTE:
	> Commented out the execution phase scenario of JavaScript engine.
*/

a(); // JavaScript engine: Owh! it's a function call! Yes I've the function in my memory. I'm calling it.

function a() { // JavaScript engine: Owh! it's a function! nothing to do with it right now. Keep moving.
	console.log('Called a!');
}

console.log(b); // JavaScript engine: Yes! I've a memory space for you and your value is undefined.

var b = 'Hello World!'; // JavaScript engine: I'm going to set the value 'Hello World!' to b.

console.log(b); // JavaScript engine: Yes! I've a memory space for you and your value is 'Hello World!'