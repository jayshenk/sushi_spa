var ItemView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.item,
  events: {
    "click header": "viewItemDetails"
  },
  viewItemDetails: function() {
    App.trigger("viewItemDetails", this.model);
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
