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
    var id = model.get("id");

    router.navigate("menu/" + id);
    new ItemDetailView({ model: model });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenToOnce(this.items, "view_item_details", this.renderItemDetails);
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper("format_nutrition", function(amount) {
  return (+amount).toFixed(4);
});
