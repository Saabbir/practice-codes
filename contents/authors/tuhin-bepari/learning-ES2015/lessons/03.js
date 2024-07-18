/**
 * Use of ES2015 spread syntax.
 */

var design = ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"];
var programming = ["PHP", "SQL", "MySQL", "Python"];

// Will be added as sub array
var webDev = ["Django", design, programming];
console.log(webDev);

// Will extract all elements to first level citizen
var webDevs = ["Django", ...design, ...programming];
console.log(webDevs);
