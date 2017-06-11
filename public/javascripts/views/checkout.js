var CheckoutView = Backbone.View.extend({
  id: "checkout",
  template: App.templates.checkout,
  events: {
    "click span.quantity_modifier": "modifyQuantity",
    "click a": "cancel",
    "submit": "order"
  },
  modifyQuantity: function(e) {
    var $el = $(e.target);
    var id = $el.closest("tr").attr("data-id");

    eventName = $el.is(".fa-minus") ? "subtract_item" : "increment_item"
    this.collection.trigger(eventName, id);
    this.render();
  },
  cancel: function() {
    this.collection.trigger("empty_cart");
  },
  order: function(e) {
    e.preventDefault();
    var $f = this.$("form");

    $.ajax({
      url: $f.attr("action"),
      type: $f.attr("method"),
      data: { itemsOrdered: JSON.stringify(this.collection.toJSON()) },
      success: function() {
        this.collection.trigger("empty_cart");
        router.navigate("menu", { trigger: true });
      }.bind(this)
    });
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
  },
  initialize: function() {
    this.render();
    App.$content.html(this.$el);
  }
});
