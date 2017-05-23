var path = require("path");
var _ = require("underscore");
var Items = require(path.resolve(path.dirname(__dirname), "modules/items"));
var ItemDetails = require(path.resolve(path.dirname(__dirname), "modules/item_details"));

module.exports = function(router) {
  router.get("/items", function(req, res) {
    res.json(Items.get());
  });

  router.get("/items/:id", function(req, res) {
    var itemDetails = _(ItemDetails.get()).findWhere({ itemID: +req.params.id });
    res.json(itemDetails.details);
  });
};
