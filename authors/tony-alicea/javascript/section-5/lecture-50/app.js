/*
	NOTE:
	> Every object in JavaScript has a `__proto__` property.
	> The `__proto__` property itself is an object.
	> Never set a value into the `__proto__` property.
	> It's very very recommended.
*/

var person = {
	firstName: 'Default',
	lastName: 'Default',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
}

var jhon = {
	firstName: 'Jhon',
	lastName: 'Doe'
}

// Don't do this EVER! for demo purposes only!!!
jhon.__proto__ = person;

console.log(jhon.getFullName()); // Jhon Doe

var jane = {
	firstName: 'Jane'
}

// Don't do this EVER! for demo purposes only!!!
jane.__proto__ = jhon;

console.log(jane.getFullName()); // Jane Doe

var anonymous = {
	firstName: 'Anonymous'
};

// Don't do this EVER! for demo purposes only!!!
anonymous.__proto__ = person;

console.log(anonymous.getFullName()); // Default Default