var fs = require('fs');

function loadFromCsv(opt){
	var csvContent = readCSV();
	var line = csvContent.split('\n');
	
	line.forEach(function(l){
		console.log(l);
	});
	return coordFormat(csvContent) ;
};

function readCSV(file){
	return fs.readFileSync('./docs/locations.csv').toString();
};

function coordFormat(strLine){
	//mongoose format [lat, lng]
	var arrayLine = strLine.split('	').slice(0,2);
	return arrayLine;
};

exports.coords= function(){
	var coords = {};

	//METHODS
	coords.loadFromCsv = loadFromCsv;
	return coords
};

exports.gmaps = function(){
	var version = "v3";

	return { version : version }
};