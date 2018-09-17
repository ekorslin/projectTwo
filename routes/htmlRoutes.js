var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
     
    db.Search.findAndCountAll({
      where: {
         inorout: 'out'
      },  
   })
   .then(function(result){

     var outTotal = result.count;
     console.log("this is the count: " + outTotal);
     
     res.render("index", {
      outTotal: outTotal
    });
   });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Search.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
