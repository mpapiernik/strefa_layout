var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 52.2419336,
				lng: 21.0096498
			  });
			  
			  var marker = map.addMarker({
				lat: 52.2419336,
				lng: 21.0096498,
	            title: 'Company, Inc.'
		       });
			});
        },

    };
}();