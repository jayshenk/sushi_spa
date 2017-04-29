var express = require('express');
var path = require("path");
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/menu_items.json");
var router = express.Router();

function getMenuItems() {
  return JSON.parse(fs.readFileSync(file_path, "utf8"));
}

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', {
    menuItems: getMenuItems()
  });
});

module.exports = router;
