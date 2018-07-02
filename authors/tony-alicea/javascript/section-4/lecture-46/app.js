/*
	NOTE:
	> All function objects has access to the
	> bind(), call(), and apply() methods.
	> These all three methods have to do
	> with the this variable.
	> bind() method do not execute the function.
	> It just copy the function with the object reference.
	> call(), and apply() methods executes the function. 
*/

var person = {
	firstName: 'Jhon',
	lastName: 'Doe',
	getFullName: function() {
		var fullName = this.firstName + ' ' + this.lastName;
		return fullName;
	}
}

var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-------------------');
}

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-------------------');
}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
	firstName: 'Jane',
	lastName: 'Doe'
}
console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
	return a * b;
}

// a permanently sets to the value 2
var multiplyByTwo = multiply.bind(this, 2);
// b passed to the value 4
console.log(multiplyByTwo(4)); // 8

// a and b permanently sets to the value 2
var multiplyByTwo = multiply.bind(this, 2, 2);
// 5 becomes extra parameter passed to the function
console.log(multiplyByTwo(5)); // 4

// if we pass no parameter value
var multiplyByTwo = multiply.bind(this);
// both parameter value is open in this case
console.log(multiplyByTwo(2, 5)); // 10

// a permanently sets to the value 3
var multiplyByThree = multiply.bind(this, 3);
// b passed to the value 4
console.log(multiplyByThree(4)); // 12