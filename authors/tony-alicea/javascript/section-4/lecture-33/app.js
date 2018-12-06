/*

	Lecture Name: Objects, Functions, and 'this'.

	NOTES:
	> `this` variable points to the global object when invoking a normal function.
	> `this` variable points to the container object when invoking an object method.
	> `this` variable points to the global object when invoking a function inside object method.

*/

function a() {
	console.log(this); // at this point `this` variable points to the global object
	this.newvariable = 'hello'; // `newvariable` gets attached to the window object
}

a();

console.log(newvariable); // we can access `newvaribale` in the global execution context

var c = {
	name: 'The c object',
	log: function() {
		var self = this; // `self` points to the `c` object in the memory
		console.log(self); // Logs `c` object
		self.name = 'Updated c object';
		console.log(self);

		function setname(newname) {
			self.name = newname;

			// This function has access to the `self` variable for it's lexical enviroment
		}

		setname('Updated again! The c object');

		console.log(self);
	}
}

c.log();