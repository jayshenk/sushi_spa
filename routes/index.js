var path = require("path");
var Items = require(path.resolve(path.dirname(__dirname), "modules/items"));

module.exports = function(router) {
  router.get('/index.html', function(req, res, next) {
    res.render('index', {
      items: Items.get()
    });
  });
};
