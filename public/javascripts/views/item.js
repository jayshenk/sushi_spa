var ItemView = Backbone.View.extend({
  tagname: "li",
  template: App.templates.item,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$content.find("#items"));
  },
  initialize: function() {
    this.render();
  }
});
