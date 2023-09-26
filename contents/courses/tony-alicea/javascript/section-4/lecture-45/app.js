/*
	Lecture Name: Closures and Callbacks

	NOTES:
	> Suppose I invoked a function named sayHi and gave it a function
	> named sayHello as an argument. The function sayHi will invoke the function sayHello. 
	> This is called callback function. I call you and you call the function that I gave you.
	> In here sayHello is the callback function and sayHi is the higher order function.
	
*/

function sayHiLater() {
	
	var greeting = 'Hi!';

	setTimeout(function() {
		console.log(greeting);
	}, 3000);

}

sayHiLater();

function tellMeWhenDone(callback) {
	callback();
}

tellMeWhenDone(function() {
	console.log('I am done!');
});

tellMeWhenDone(function() {
	console.log('All done ...');
});