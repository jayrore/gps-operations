
var GPS = {};
// parse [ lat , long ]coordinates to MongoDB coordinates
GPS.GMAPS = function(){
	this.version = "v3";
};
var GMAPS = GPS.GMAPS;

GMAPS.prototype.get = function(arg) {
	return this[arg].toString() || undefined;
}; 
module.exports = GPS;