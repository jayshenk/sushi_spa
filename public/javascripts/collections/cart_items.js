var CartItems = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);

    return this;
  },
  getTotal: function() { return this.total; },
  readStorage: function() {
    var storedCart = JSON.parse(localStorage.getItem("cart"));
    this.reset(storedCart);
    this.setTotal();
  },
  updateStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  addItem: function(item) {
    var existing = this.get(item.get("id"));

    if (existing) {
      existing.set("quantity", existing.get("quantity") + 1);
    } else {
      existing = item.clone();
      existing.set("quantity", 1);
      this.add(existing);
    }
    this.update();
    this.trigger("cart_updated");
  },
  update: function() {
    this.setTotal().updateStorage();
  },
  initialize: function() {
    this.readStorage();
  }
});
