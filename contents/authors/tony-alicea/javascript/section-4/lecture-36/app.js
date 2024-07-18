/*
**  Lecture Name: Function Overloading

	NOTES:
	> In other programming languages has something called function overloading
	> but in JavaScript we don't have that. It actually means a function can
	> have same name of other function if it's paremeters are different.
*/ 

function greet(firstname, lastname, language) {

	language = language || 'en';

	if (language === 'en') {
		console.log('Hello ' + firstname + ' ' + lastname);
	}

	if (language === 'es') {
		console.log('Hola ' + firstname + ' ' + lastname);
	}
}

function greetEnglish(firstname, lastname) {
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
	greet(firstname, lastname, 'es');
}

greetEnglish('Jhon', 'Doe');
greetSpanish('Mary', 'Jane');