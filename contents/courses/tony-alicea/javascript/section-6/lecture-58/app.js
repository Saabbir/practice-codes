/*
	NOTE:
	> Arrays are objects in JavaScript.
	> Array indexes are name of name-value pairs of object.
*/

Array.prototype.myCustomProperty = 'My Custom Property';

var arr = ['a', 'b', 'c'];

for (var name in arr) { // this is not recommended
	console.log(name + ': ' + arr[name]);
}

console.log(arr.__proto__ === Array.prototype); // true

for (var i = 0; i < arr.length; i++) { // recommended
	console.log(arr[i]);
}