/*
	NOTE:
	> Every time a function is called,
	> a special varibale `this` is created.
	> By default that `this` variable points to the 
	> `window` object in the browser environment.
	> That means `this.firstname = firstname` sets the firstname
	> property of the window object.
	> If we invoke the function with `new` keyword,
	> it creates an empty object and `this` variable points
	> to that empty object.
	> If we don't return anything from that function
	> then it returns the object created by the new keyword automatically.
	> This type of function are called constructor function.
*/

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

var jhon = new Person('Jhon', 'Doe');
console.log(jhon);

var jane = new Person('Jane', 'Doe');
console.log(jane);