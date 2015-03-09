
var GPS = {};
// parse [ lat , long ]coordinates to MongoDB coordinates
GPS.GMAPS = function(){
	this.version = "v3";
	this.get = function(attr){
		return this[attr];
	}
	return this;
};

module.exports = GPS;