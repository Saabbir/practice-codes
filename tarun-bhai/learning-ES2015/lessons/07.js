// ES2015 Modules and Generators

import 'babel-core/polyfill';

// Generators
var cities = ["Dhaka", "Chittagong", "Sylhet", "Barisal"];

function displayCity( names ) {
    for ( var i = 0; i < names.length; i++ ) {
        yield names[i];
    }
}

console.log(displayCity(cities).value);