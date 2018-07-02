/*
	NOTE:
	> this variable points to the global object when invoking a normal function.
	> this variable points to the container object when invoking a method.
	> this variable points to the global object when invoke a function inside any method.
*/

function a() {
	console.log(this); // at this point this points to the global object
	this.newvariable = 'hello'; // newvariable get attached to the window object
}

a();

console.log(newvariable); // we can access newvaribale in the global execution context

function b() {
	console.log(this); // also this points to the global object
}

b();

var c = {
	name: 'The c object',
	log: function() {
		var self = this;
		console.log(self);
		self.name = 'Updated c object';
		console.log(self);

		function setname(newname) {
			self.name = newname;
		}

		setname('Updated again! The c object');

		console.log(self);
	}
}

c.log();