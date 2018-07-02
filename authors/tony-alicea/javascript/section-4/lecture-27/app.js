/*
	NOTE:
	> We can create object in a couple of ways.
	> One of is using object literals.
	> This is the preferred way to create an object.
	> We can pass object into a function as a parameter.
*/

var person = { // Created object using object literal syntax
	firstname: 'Saabbir',
	lastname: 'Hossain',
	address: {
		street: '111 Main St.',
		city: 'New York',
		state: 'NY'
	}
};

function greet(obj) {
	console.log('Hello ' + obj.firstname); // Used obj parameter as an object
}

greet(person); // Passed person object as a parameter

greet({ // Created object on the fly
	firstname: 'Mary'
});