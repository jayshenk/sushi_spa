var router = new (Backbone.Router.extend({
  routes: {
    "index.html": function() { this.navigate("menu", { trigger: true }); },
    "menu": App.renderItems.bind(App),
    "menu/:id": App.itemDetail.bind(App),
    "checkout": App.checkout.bind(App)
  }
}))();

Backbone.history.start({ pushState: true });

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  var href = $(e.currentTarget).attr("href").replace(/^\//, "");
  var route = href || "menu";

  router.navigate(route, { trigger: true });
});
