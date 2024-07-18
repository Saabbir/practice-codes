/**
 * Array Intersection
 */
function intersection() {
  let outputArray = [];
  const inputArrays = [];
  for (let i = 0; i < arguments.length; i++) {
    inputArrays.push(arguments[i]);
  }

  outputArray = inputArrays.reduce((a, b) => a.filter((c) => b.includes(c)));

  return outputArray;
}

const result = intersection(
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20]
);

console.log(result);
