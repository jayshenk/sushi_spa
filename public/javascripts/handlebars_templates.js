this["JST"] = this["JST"] || {};

this["JST"]["item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article><header><figure><img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"menu-item\"></figure><h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></header><p class=\"price\">$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><footer><a href=\"#\" class=\"add_cart\">Add to cart</a></footer></article>";
},"useData":true});

this["JST"]["itemDetail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div><div class=\"nav prev\"><img src=\"/images/nav-prev.png\" alt=\"prev\"></div><figure><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"selected-item\"></figure><article><a class=\"close\" href=\"/\">+</a><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><footer><h2>$12.00</h2><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>"
    + alias4((helpers.format_nutrition || (depth0 && depth0.format_nutrition) || alias2).call(alias1,(depth0 != null ? depth0.protein : depth0),{"name":"format_nutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Fat (total)</td><td>"
    + alias4((helpers.format_nutrition || (depth0 && depth0.format_nutrition) || alias2).call(alias1,(depth0 != null ? depth0.fat : depth0),{"name":"format_nutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Carbohydrates</td><td>"
    + alias4((helpers.format_nutrition || (depth0 && depth0.format_nutrition) || alias2).call(alias1,(depth0 != null ? depth0.carbohydrates : depth0),{"name":"format_nutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Energy (kj)</td><td>"
    + alias4((helpers.format_nutrition || (depth0 && depth0.format_nutrition) || alias2).call(alias1,(depth0 != null ? depth0.energyKJ : depth0),{"name":"format_nutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Energy (kcal)</td><td>"
    + alias4((helpers.format_nutrition || (depth0 && depth0.format_nutrition) || alias2).call(alias1,(depth0 != null ? depth0.energyKCal : depth0),{"name":"format_nutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Sugar</td><td>"
    + alias4((helpers.format_nutrition || (depth0 && depth0.format_nutrition) || alias2).call(alias1,(depth0 != null ? depth0.sugar : depth0),{"name":"format_nutrition","hash":{},"data":data}))
    + "</td></tr></tbody></table></aside><div class=\"nav next\"><img src=\"/images/nav-next.png\" alt=\"next\"></div></div>";
},"useData":true});