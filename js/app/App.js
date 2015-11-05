(function () {

	App = {
		title: ' - SheArtWild',
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
			document.title = "Quest" + App.title;
			var view = new App.BaseView({ templateId: '#questTemplate' });
		},
		showGallery: function () {
			document.title = "Gallery" + App.title;
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
			document.title = "Shop" + App.title;
			var view = new App.BaseView({ templateId: '#shopTemplate' });
		},
		showVideos: function () {
			document.title = "Videos" + App.title;
			var view = new App.BaseView({ templateId: '#videosTemplate' });
		}
	});

})();