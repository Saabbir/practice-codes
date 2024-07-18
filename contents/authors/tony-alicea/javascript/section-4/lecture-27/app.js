/*

We can create object in a couple of ways. One of is using object literals.
This is the preferred way to create an object. We can pass object into a 
function as an argument. Because function is object in JavaScript.

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
	console.log('Hello ' + obj.firstname);
}

greet(person); // Passed `person` object as an argument

greet({ // Created object on the fly
	firstname: 'Mary'
});