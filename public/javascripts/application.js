var App = {
  templates: JST,
  $el: $("main"),
  $content: $("#content"),
  renderItems: function() {
    this.itemsView = new ItemsView({ collection: this.items });
  },
  itemDetail: function(id) {
    var model = this.items.get(id);
    new ItemDetailView({ model: model });
  },
  initialize: function(items) {
    this.items = items;
    this.renderItems();
  },
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper("format_nutrition", function(amount) {
  return (+amount).toFixed(4);
});
