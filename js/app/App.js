(function () {

	App = {
		init: function () {	
			// Initiate the router
			var appRouter = new App.AppRouter;
		},
		run: function () {
			App.init();
			// Start Backbone history a necessary step for bookmarkable URL's
			Backbone.history.start();
		}
	}

	App.AppRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			'quest': 'home',
			'gallery': 'showGallery',
			'videos': 'showVideos',
			'shop': 'showShop'
		},
		home: function () {
			var view = new App.BaseView({ templateId: '#questTemplate' });
			
		},
		showGallery: function () {
			var pictures = new App.Gallery();
			pictures.fetch(
				{
					success: function () {
						var view = new App.GalleryView({ collection: pictures, templateId: '#galleryTemplate' });
					},
					error: function () {
						alert('Error while loading images. Please refresh the page');
					}
				});
		},
		showShop: function () {
			var view = new App.BaseView({ templateId: '#shopTemplate' });
		},
		showVideos: function () {
			var view = new App.BaseView({ templateId: '#videosTemplate' });
		}
	});

})();