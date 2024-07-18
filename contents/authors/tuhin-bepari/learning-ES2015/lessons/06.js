/**
 * ES2015 Destructuring assignments
 */

var [first, , sylhet] = ["Dhaka", "Chittagong", "Sylhet", "Barisal"];
console.log(first, sylhet);

var person = {
  first: "Tuhin",
  last: "Bepari",
  likes: ["Programming", "Watching Movies", "Walking"],
  print() {
    this.likes.forEach((action) => {
      console.log(`${this.first} likes to ${action}`);
    });
  },
};

function fullname({ first, last }) {
  console.log(`Given person full name is ${first} ${last}`);
}

fullname(person);
