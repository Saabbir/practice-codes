b(); // When execution phase reach this line, it finds this function in the memory and logs the string 'Called b!'.

console.log(a); // When execution phase reach this line, it sees the value of `a` is undefined and logs it.

var a = 'Hello World!'; // Assign 'Hello World!' to `a`

function b() {
	console.log('Called b!');
}

// But the above style is not preferred as it is confusing.
// Always use functions and variables after declaration.

b(); // Logs 'Called b!'

console.log(a); // Logs 'Hello World!'