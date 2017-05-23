var ItemDetailView = Backbone.View.extend({
  id: "item_details",
  template: App.templates.itemDetail,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$content.html(this.$el);
  },
  initialize: function() {
    this.model.trigger("get_details");
    this.listenTo(this.model, "details_loaded", this.render);
  }
});
