var path = require("path");
var Orders = require(path.resolve(path.dirname(__dirname), "modules/orders"));

module.exports = function(router) {
  router.post("/", function(req, res) {
    var order = req.body;
    var orders = Orders.get();

    order.id = Orders.getLastID() + 1;
    orders.push(order);
    Orders.set(orders);
    res.json(order);
  });
};
