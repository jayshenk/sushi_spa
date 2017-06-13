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
  },
  incrementItem: function(id) {
    var item = this.get(id);

    item.set("quantity", item.get("quantity") + 1);
    this.update();
  },
  decrementItem: function(id) {
    var item = this.get(id);
    var quantity = item.get("quantity");

    quantity === 1 ? this.remove(id) : item.set("quantity", quantity - 1);
    this.update();
  },
  update: function() {
    this.setTotal().updateStorage();
    this.trigger("cart_updated");
  },
  empty: function() {
    this.reset();
    this.update();
  },
  initialize: function() {
    this.readStorage();
    this.on("empty_cart", this.empty);
    this.on("increment_item", this.incrementItem);
    this.on("decrement_item", this.decrementItem);
  }
});
