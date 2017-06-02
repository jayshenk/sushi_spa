var ItemView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.item,
  events: {
    "click header": "viewItemDetails",
    "click a.add_cart": "addToCart"
  },
  viewItemDetails: function() {
    var id = this.model.get("id");
    router.navigate("menu/" + id, { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  render: function() {
    var id = this.model.get("id");

    this.$el.attr("data-id", id);
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});
