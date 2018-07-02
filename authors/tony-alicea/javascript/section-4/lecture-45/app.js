/*
	NOTE:
	> Suppose I invoked a function named a
	> and gave it a function as a parameter.
	> The function a will invoke that function.
	> This is called callback function.
	> I call you and you call the function that I gave you.
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