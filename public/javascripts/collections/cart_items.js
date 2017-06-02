var CartItems = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);

    return this;
  },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);

    return this;
  },
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
