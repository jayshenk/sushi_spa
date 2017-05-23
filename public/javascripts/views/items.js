var ItemsView = Backbone.View.extend({
  id: "items",
  tagName: "ul",
  render: function() {
    this.collection.each(this.renderItem.bind(this));
    App.$content.html(this.$el);
  },
  renderItem: function(item) {
    var itemView = new ItemView({ model: item });

    this.$el.append(itemView.el);
  },
  initialize: function() {
    this.render();
  }
});
