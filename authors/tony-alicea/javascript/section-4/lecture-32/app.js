/*
** Lecture Name: By Value vs By Reference
*/ 

// by value (primitives)
var a = 3;
var b;

b = a; // Copy value of `a` and assign into `b`. New memory location is created.
a = 2;

// `a` and `b` both stores in two different memory location that's why changing one's value doesn't affect other.

console.log(a); // Logs 2
console.log(b); // Logs 3

// by reference (all objects (including functions))
var c = { greeting: 'Hi' };
var d;

d = c; // `d` points same location at the memory where `c` points to.
c.greeting = 'Hello'; // mutate object property

// Mutating object properties will reflect on both `c` and `d` as both points to the same memory location.

console.log(c); // Logs { greeting: 'Hello' }
console.log(d); // Logs { greeting: 'Hello' }

// by reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola'; // mutate object property
}

changeGreeting(d);

console.log(c); // Logs { greeting: 'Hola' }
console.log(d); // Logs { greeting: 'Hola' }

// equals operator sets up new memory space (new address)
c = { greeting: 'Howdy' }; // reassign `c` variable to a new object

console.log(c); // Logs { greeting: 'Howdy' }
console.log(d); // Logs { greeting: 'Hola' }