/*
	NOTE:
	> JSON isn't really a part of JavaScript.
	> It's a subset of JavaScript.
	> Stands for JavaScript object notation.
	> Because it's inspired by JavaScript object literal syntax.
	> Anything that is JSON valid is also valid JavaScript object literal syntax
	> but not all object literal syntax is valid JSON.
	> In JSON, properties have to be wrapped in quotes.
*/

var objectLiteral = {
	firstname: 'Saabbir',
	lastname: 'Hossain'
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true}');

console.log(jsonValue);