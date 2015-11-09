(function () {
    "use strict";

    App.Gallery = Backbone.Collection.extend({
        url: 'js/data/gallery.json',
        model: App.Carousel
    });
    
    App.Pictures = Backbone.Collection.extend({
        initialize: function(options) {
            this.url = options.url;
        },
        model: App.Picture
    });
})();