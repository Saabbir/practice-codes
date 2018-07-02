/*
	NOTE:
	> Every time a function is invoked.
	> a new execution context is created
	> with a new variable environment.
*/

function makeGreeting(language) {

	return function(firstname, lastname) {

		if (language === 'en') {
			console.log('Hello' + ' ' + firstname + ' ' + lastname);
		}

		if (language === 'es') {
			console.log('Hola' + ' ' + firstname + ' ' + lastname);
		}

	}

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Jhon', 'Doe');
greetSpanish('Jhon', 'Doe');