/*
	NOTE:
	> Every function call has it's own variable environment
*/

function b() {
	var myVar;
	console.log(myVar); // This line will log third in the console
}

function a() {
	var myVar = 2;
	console.log(myVar); // This line will log second in the console
	b();
}

var myVar = 1;

console.log(myVar); // This line will log first in the console

a();

console.log(myVar); // This line will log fourth in the console