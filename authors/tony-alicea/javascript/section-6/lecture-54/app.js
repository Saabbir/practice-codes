/*
	NOTE:
	> Every function in JavaScript has a `prototype` property.
	> That property itself contains an object. An empty object.
	> Prototype (`__proto__`) of every object 
	> created by invoking a function with a `new` keyword
	> points to the `prototype` property of that function.
	> Therefore, `jane.__proto__ === Person.prototype` is true.
*/

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
}

var jhon = new Person('Jhon', 'Doe');
console.log(jhon);

var jane = new Person('Jane', 'Doe');
console.log(jane);

console.log(jane.getFullName());

console.log(jane.__proto__ === Person.prototype); // true