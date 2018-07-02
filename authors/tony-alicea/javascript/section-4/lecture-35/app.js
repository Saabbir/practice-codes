/*
	NOTE:
	> In ES6, there is alternative and better way to set default value of the parameters.
	> When we invoke a function, a special keyword arguments is created for us to use.
	> It contains all the parameters passed when function called.
	> Arguments special keyword will be depricated in future.
	> Arguments are an array like collections in JavaScript
	> but not an actual JavaScript array.
*/

function greet(firstname, lastname, language) {

	language = language || 'en'; // We can use this trick to set a default value to a parameter

	if (arguments.length === 0) {
		console.log('Missing parameters!');
		console.log('-------------------');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log(arguments[0]);
	console.log('-------------------');
}

greet();

greet('Jhon');

greet('Jhon', 'Doe');

greet('Jhon', 'Doe', 'es');