var App = {
  templates: JST,
  $el: $("main"),
  $content: $("#content"),
  menuView: function() {
    this.renderItems();
    this.bindEvents();
  },
  renderItems: function() {
    this.itemsView = new ItemsView({ collection: this.items });
  },
  renderItemDetails: function(model) {
    new ItemDetailView({ model: model });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("viewItemDetails", this.renderItemDetails);
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});
