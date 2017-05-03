var App = {
  templates: JST,
  $el: $("main"),
  menuView: function() {
    this.menu = new MenuView();
  },
  renderItems: function() {
    
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});
