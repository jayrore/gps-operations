var gps = require('./gps');
var coords = gps.coords();

console.log(coords);
var locationsFile = coords.loadFromCsv();
console.log(locationsFile);
// Load gps to mongodb from csv file