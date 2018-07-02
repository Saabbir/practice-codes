/* Write a function isEven() which takes a single numeric argument
** and returns true if the number is even, and false otherwise.
*/

function isEven(number) {
	return number % 2 === 0;
}

isEven(4); // true
isEven(21); // false
isEven(68); // false
isEven(333); // false

/* Write a function factorial() which takes a single numeric argument
** and returns the factorial of that number.
*/

function factorial(number) {
	var result = 1;
	for (var i = 2; i <= number; i++) {
		result *= i;
	}
	return result;
}

factorial(5); // 120
factorial(2); // 2
factorial(10); // 3628800
factorial(0); // 1

/* Write a function kebabToSnake() which takes a single kebab-cased string argument
** and returns the snake_cased version.
*/

function kebabToSnake(kebabString) {
	var snakeString;
	var regex = /-/g;
	snakeString = kebabString.replace(regex, '_');
	return snakeString;
}

kebabToSnake('hello-world'); // hellow_world
kebabToSnake('dogs-are-awesome'); // dogs_are_awesome
kebabToSnake('blah'); // blah