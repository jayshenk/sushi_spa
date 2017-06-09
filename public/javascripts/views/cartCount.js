var CartCountView = Backbone.View.extend({
  el: $(".cart").get(0),
  template: App.templates.cartCount,
  render: function() {
    this.$el.html(this.template({ count: this.collection.length }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "add remove reset", this.render);
  }
});
