(function () {
	"use strict";

	App.BaseView = Backbone.View.extend({
		el: '#page',
		initialize: function (options) {
			this.options = options;
			this.render();
		},
		render: function () {
			var templateId = this.options.templateId;
			var compiledTemplate = _.template($(templateId).html());
			this.$el.html(compiledTemplate({}));
			return this;
		}
	}); 

	App.GalleryView = Backbone.View.extend({
		el: '#page',
		initialize: function (options) {
			console.log("gallry view ctor");
			this.options = options;
			this.collection = options.collection;

			this.collection.bind('reset', this.render);
			this.render();
		},
		render: function () {
			var that = this;
			var templateId = this.options.templateId;
			var compiledTemplate = _.template($(templateId).html());

			this.$el.empty();
			this.$el.append(compiledTemplate({}));

			this.collection.forEach(function (pic) {
				var pictureView = new App.PictureView({
					model: pic
				});
				var carouselItemView = new App.CarouselItemView({
					model: pic
				});
				
				that.$el.find('#galleryPictures').append(pictureView.render().el);
				that.$el.find('#carousel-slides').append(carouselItemView.render().el);
				
				var isFirst = pic.get('imageIndex')  == 0;
				var active = isFirst ? 'class="active"' : '';
				that.$el.find("#carousel-indicators").append('<li data-target="#carousel-example-generic" data-slide-to="' + pic.get('imageIndex') + '" ' + active + '></li>');
			});
			
			this.$el.find('.item').first().addClass('active');
			this.$el.find('.carousel').carousel()

			return this;
		}
	});
	
	App.CarouselItemView = Backbone.View.extend({
		className:'item',
		template: '#carouselItemTemplate',
		render: function () {
			var templateId = this.template;
			var compiledTemplate = _.template($(templateId).html());
			this.$el.empty();
			this.$el.append(compiledTemplate(this.model.toJSON()));
			return this;
		}
	});

	App.PictureView = Backbone.View.extend({
		events: {
			"click": "selectImage"	
		},
		tagName:"li",
		className:'galleryPictureContainer',
		template: '#pictureViewTemplate',
		render: function () {
			var templateId = this.template;
			var compiledTemplate = _.template($(templateId).html());
			this.$el.empty();
			this.$el.append(compiledTemplate(this.model.toJSON()));
			return this;
		},
		selectImage: function(){
			var imageIndex = this.model.get('imageIndex');
			$('.carousel').carousel(imageIndex);
		}
	});
})();