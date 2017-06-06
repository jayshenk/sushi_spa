var ItemDetailView = Backbone.View.extend({
  id: "item_details",
  template: App.templates.itemDetail,
  events: {
    "click .prev": "prevItemDetail",
    "click .next": "nextItemDetail",
    "click a.add_cart": "addToCart"
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$content.html(this.$el);
  },
  prevItemDetail: function() {
    var id = this.model.get("id");
    App.trigger("prev_item_detail", id);
  },
  nextItemDetail: function() {
    var id = this.model.get("id");
    App.trigger("next_item_detail", id);
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  initialize: function() {
    this.model.trigger("get_details");
    this.listenTo(this.model, "details_loaded", this.render);
  }
});
