
var GPS = {};
// parse [ lat , long ]coordinates to MongoDB coordinates
GPS.GMAPS = function(){
	var version = "v3";
	return {
		getVersion : function(){
			return version;
		}
	};
};

GPS.GMAPS.prototype.pro = function() {
	console.log("proto");
};



module.exports = GPS;