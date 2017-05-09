var ItemsView = Backbone.View.extend({
  id: "items",
  tagName: "ul",
  template: App.templates.items,
  render: function() {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
    this.$el.appendTo(App.$content);
  },
  initialize: function() {
    this.render();
  }
});
