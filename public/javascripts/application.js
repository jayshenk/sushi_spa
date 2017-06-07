var App = {
  templates: JST,
  $el: $("main"),
  $content: $("#content"),
  renderItems: function() {
    this.itemsView = new ItemsView({ collection: this.items });
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  itemDetail: function(id) {
    var model = this.items.get(id);
    new ItemDetailView({ model: model });
  },
  prevItemDetail: function(currentId) {
    var prevId = currentId == 1 ? 1 : currentId - 1;
    router.navigate("menu/" + prevId, { trigger: true });
  },
  nextItemDetail: function(currentId) {
    var nextId;

    if (currentId == this.items.toJSON().length) {
      nextId = 1;
    } else {
      nextId = currentId + 1;
    }
    router.navigate("menu/" + nextId, { trigger: true });
  },
  checkout: function() {
    new CheckoutView({ collection: this.cart });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("add_to_cart", this.cart.addItem.bind(this.cart));
    this.on("next_item_detail", this.nextItemDetail.bind(this));
    this.on("prev_item_detail", this.prevItemDetail.bind(this));
  },
  initialize: function(items) {
    this.items = items;
    this.renderItems();
    this.createCart();
    this.bindEvents();
  },
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper("format_kcal", function(amount) {
  return (+amount).toFixed(4);
});
