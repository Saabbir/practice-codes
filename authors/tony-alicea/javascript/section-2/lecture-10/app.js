/*
	NOTE:
	> JavaScript engine execute code top to bottom line by line character by character.
	> This is execution phase of the execution context.
*/

function a() { // JavaScript engine: Owh! it's a function! nothing to do with it right now. Keep moving.
	console.log('Called a!');
}

a(); // JavaScript engine: Owh! it's a function call! Yes I've the function in my memory. I'm calling it.

console.log(b); // JavaScript engine: yes I've a memory space for you and your value is undefined

var b = 'Hello World!'; // JavaScript engine: I'm going to set the memory space for b to the value 'Hello World!'

console.log(b); // JavaScript engine: yes I've a memory space for you and your value is 'Hello World!'