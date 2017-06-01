var CartItems = Backbone.Collection.extend({
  readStorage: function() {
    var storedCart = JSON.parse(localStorage.getItem("cart"));
    this.reset(storedCart);
    this.setTotal().setQuantity();
  },
  updateStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  initialize: function() {
    this.readStorage();
  }
});
