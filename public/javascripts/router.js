var router = new (Backbone.Router.extend({
  routes: {
    "index.html": function() { this.navigate("menu", { trigger: true }); },
    "menu": "menu"
  },
  menu: function() { App.menuView(); }
}))();

Backbone.history.start({ pushState: true });

$(document).on("click", "a[href='/']", function(e) {
  e.preventDefault();
  router.navigate("menu", { trigger: true });
});
