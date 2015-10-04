(function() {
	"use strict";
	
	App.Picture = Backbone.Model.extend({
		defaults: {
			imageUrl: '',
			imageTitle: '',
			imageIndex: -1
		},
    	initialize: function(){
    	}
	});
	
})();