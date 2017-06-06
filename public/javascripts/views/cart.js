var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: $("#cart").get(0),
  events: {
    "click a.empty_cart": "empty"
  },
  initialRender: function() {
    this.collection.length ? this.render() : this.$el.hide();
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    if (this.collection.length && this.$el.is(":hidden")) {
      this.$el.slideDown(this.delay);
    }
  },
  empty: function(e) {
    e.preventDefault();
    this.$el.slideUp(this.delay);
    this.collection.trigger("empty_cart");
  },
  delay: 300,
  initialize: function() {
    this.initialRender();
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});
