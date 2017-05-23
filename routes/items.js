var path = require("path");
var _ = require("underscore");
var Items = require(path.resolve(path.dirname(__dirname), "modules/items"));

module.exports = function(router) {
  router.get("/items", function(req, res) {
    res.json(Items.get());
  });
};
