var Item = Backbone.Model.extend({
  getDetails: function() {
    this.fetch({
      success: this.detailsLoaded.bind(this)
    });
  },
  detailsLoaded: function() {
    this.trigger("details_loaded");
  },
  initialize: function() {
    this.on("get_details", this.getDetails);
  }
});
