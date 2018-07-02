/*
	NOTE:
	> If you're running your JavaScript code in the browser the global object is the window object
	> In JavaScript, when you create variables and functions
	> and you're not inside a function
	> those variables and functions get attached to the global object.
*/

// The following varibale a and function b get attached to the window object.
// That means these are property of the window object

var a = "Hello World!";

function b() {}

console.log(window.a);

console.log(window.b);

console.log(window);

console.log('------------------------') // This is just a separator to distinguish between console logs

// At the global level the this variable points to the global object
// That means we can write this instead of window as they both points to the same location in the memory

console.log(this.a);

console.log(this.b);

console.log(this)

console.log('------------------------') // This is just a separator to distinguish between console logs

// Also we can check the this variable and the window object is equal or not

if (window === this) {
	console.log('"window === this" = ' + true);
}

if (typeof window === typeof this) {
	console.log('"typeof window === typeof this" = ' + true);
}