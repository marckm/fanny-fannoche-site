(function() {
	"use strict";
	
	App.Carousel = Backbone.Model.extend({
		defaults: {
			url: '',
			title: ''
		}
	});
	
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