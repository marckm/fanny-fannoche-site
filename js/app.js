(function() {
	'use strict';
	
	var BaseView = Backbone.View.extend({
		 el: '#page',
		 initialize: function (options) {
			 this.options = options; 
			 this.render();
		},
		render: function () { 
			var templateId = this.options.templateId;
			var compiledTemplate = _.template($(templateId).html());
			this.$el.html(compiledTemplate({})) ; 
			return this;
		}
	});
	
	var AppRouter = Backbone.Router.extend({
	    routes: {
	        '' : 'home',
			'quest': 'home',
			'gallery': 'showGallery',
			'videos': 'showVideos',
			'shop': 'showShop'
	    },
		home: function () { 
			var view = new BaseView({ templateId: '#questTemplate' });
	    }, 
		showGallery: function () {
			 var view = new BaseView({ templateId: '#galleryTemplate' });
   		},
	 	showShop: function () {
			 var view = new BaseView({ templateId: '#shopTemplate' });
   		},
		showVideos: function () {
			 var view = new BaseView({ templateId: '#videosTemplate' });
   		}  
	});
	
	var App = {
		init: function(){	
			// Initiate the router
			var appRouter = new AppRouter;
		},
		run: function() {
			App.init();
			// Start Backbone history a necessary step for bookmarkable URL's
			Backbone.history.start();
		}
	};
	
	App.run();
	
})();