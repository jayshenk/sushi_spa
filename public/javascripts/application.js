var App = {
  templates: JST,
  $el: $("main"),
  $content: $("#content"),
  menuView: function() {
    this.renderItems();
  },
  renderItems: function() {
    this.itemsView = new ItemsView({ collection: this.items });
  },
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});
