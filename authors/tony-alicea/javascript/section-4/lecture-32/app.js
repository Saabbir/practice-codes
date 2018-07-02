// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a); // 2
console.log(b); // 3

// by reference (all objects (including functions))
var c = { greeting: 'Hi' };
var d;

d = c;
c.greeting = 'Hello'; // mutate object property

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola'; // mutate object property
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'Howdy' };

console.log(c);
console.log(d);