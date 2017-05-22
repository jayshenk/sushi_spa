var ItemsView = Backbone.View.extend({
  id: "items",
  tagName: "ul",
  render: function() {
    this.collection.each(this.renderItem.bind(this));
    this.$el.appendTo(App.$content);
  },
  renderItem: function(item) {
    var itemView = new ItemView({ model: item });

    this.$el.append(itemView.el);
  },
  initialize: function() {
    this.render();
  }
});
