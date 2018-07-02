/*
	NOTE: 
	> In JavaScript functions are objects
	> And an object can have a property and method
*/

function functionName() {} // Function declaration or function statement
functionName(); // Function call or function invocation

// We can attach a property in a function
functionName.propertyName = 'Functions are objects in JavaScript';

// We can attach a method in a function
functionName.methodName = function() {
	console.log(functionName.propertyName);
} 
functionName.methodName();