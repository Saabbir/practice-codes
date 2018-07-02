/*
	NOTE:
	> `Object.create` function will return an empty object and
	> set it's prototype property equal to the object we pass as arguments.
	> Function invoked with `new` operator returns an empty object.
	> And `__proto__` of the empty object is eqaul to the 
	> `prototype` property of the function.
	> Function used to create objects are called constructor function.
*/

// Polyfill
if (!Object.create) {
	Object.create = function(obj) {
		if (arguments.length > 1) {
			throw new Error('Object.create implementation only accepts the first parameter');
		}

		function F() {}; // empty constructor function
		F.prototype = obj;
		return new F();
	};
}

var person = {
	firstname: 'Default',
	lastname: 'Default',
	greet: function() {
		return ('Hi ' + this.firstname);
	}
}

var jhon = Object.create(person);
jhon.firstname = 'Jhon';
jhon.lastname = 'Doe';

console.log(jhon);
console.log(jhon.greet());