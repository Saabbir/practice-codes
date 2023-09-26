/*

**  Lecture Name: Arguments and Spread

	NOTES:
	> In ES6, there is an alternative and better way to set default value of the parameters.
	> When we invoke a function, a special variable `arguments` is created for us to use.
	> It contains all the arguments passed when function called.
	> `arguments` variable holds an array-like collection of values
	> but not an actual JavaScript array.
*/

function greet(firstname, lastname, language) {

	language = language || 'en'; // We can use this trick to set a default value to a parameter

	if (arguments.length === 0) {
		console.log('Missing parameters!');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
}

greet();

console.log('--------------------------------------');

greet('Jhon');

console.log('--------------------------------------');

greet('Jhon', 'Doe');

console.log('--------------------------------------');

greet('Jhon', 'Doe', 'es');