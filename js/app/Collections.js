(function () {
    "use strict";

    App.Gallery = Backbone.Collection.extend({
        url: 'js/data/abstraits.json',
        model: App.Picture
    });
})();