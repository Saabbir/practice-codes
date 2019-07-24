/*
** compareArray function compares first array passed on as arguments 
** against rest of the arguments and returns the values in first array that
** are not present in any of other arrays/arguments.
*/

function compareArray() {

    if (arguments.length < 2) {
        throw new Error('Provide at least 2 arguments.')
    }

    const arr  = [];
    const arr1 = arguments[0];
    let   arr2 = [];

    if (arr1.constructor.name !== 'Array') {
        throw new Error('The first argument must be an array.');
    }
    
    for (let i = 1; i < arguments.length; i++) {
        arr2 = arr2.concat(arguments[i]);
    }

    arr1.forEach(function(item){
        if (!arr2.includes(item)) {
            arr.push(item);
        }
    });

    return arr;
}

const arrayDiff = compareArray(['red', 'green', 'blue', 'pink'], ['orange', 'red', 'blue'], ['magenta', 'blue', 'yellow', 'green']);

console.log(arrayDiff);