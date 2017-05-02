var router = new (Backbone.Router.extend({
  routes: {
    "index.html": navigateToMenu
  }
}))();

function navigateToMenu() {
  router.navigate("menu");
}

Backbone.history.start({ pushState: true });
