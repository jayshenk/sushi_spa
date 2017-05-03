var router = new (Backbone.Router.extend({
  routes: {
    "index.html": function() { this.navigate("menu", { trigger: true }); },
    "menu": App.menuView
  }
}))();

Backbone.history.start({ pushState: true });
