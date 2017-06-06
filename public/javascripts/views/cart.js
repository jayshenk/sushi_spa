var CartView = Backbone.View.extend({
  template: App.templates.cart,
  id: "cart",
  initialRender: function() {
    this.collection.length ? this.render() : this.$el.hide();
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    if (this.collection.length && this.$el.is(":hidden")) {
      this.$el.prependTo(App.$el).slideDown(300);
    }
  },
  initialize: function() {
    this.initialRender();
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});
