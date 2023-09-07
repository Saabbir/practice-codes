/*
New ways to create variables using let and const statement.
Both let and const are block scoped.	
*/

var x = 10;
const birthYear = 1990;

if (x) {
  let x = 4;
  console.log("Local value of x is " + x);
}

console.log("Global value of x is " + x);

console.log("Birth year is " + birthYear);
